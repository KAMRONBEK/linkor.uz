import { CreateUserData, UpdateUserData } from '../models/User';
import { UserService } from '../services/UserService';

export async function GET(request: Request): Promise<Response> {
    try {
        const url = new URL(request.url);
        const userId = url.searchParams.get('id');
        const email = url.searchParams.get('email');
        const search = url.searchParams.get('search');
        const limit = parseInt(url.searchParams.get('limit') || '10');

        // Get user by ID
        if (userId) {
            const user = await UserService.getUserById(userId);
            if (!user) {
                return new Response(
                    JSON.stringify({ error: 'User not found' }),
                    {
                        status: 404,
                        headers: { 'Content-Type': 'application/json' },
                    }
                );
            }
            return new Response(JSON.stringify({ user }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Get user by email
        if (email) {
            const user = await UserService.getUserByEmail(email);
            if (!user) {
                return new Response(
                    JSON.stringify({ error: 'User not found' }),
                    {
                        status: 404,
                        headers: { 'Content-Type': 'application/json' },
                    }
                );
            }
            return new Response(JSON.stringify({ user }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Search users by display name
        if (search) {
            const users = await UserService.searchUsersByDisplayName(search);
            return new Response(JSON.stringify({ users }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Get all users with pagination
        const users = await UserService.getUsers(limit);
        return new Response(JSON.stringify({ users }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('GET /api/users error:', error);
        return new Response(
            JSON.stringify({ error: 'Internal server error' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}

export async function POST(request: Request): Promise<Response> {
    try {
        const body = await request.json();
        const userData: CreateUserData = body;

        // Validate required fields
        if (!userData.email) {
            return new Response(
                JSON.stringify({ error: 'Email is required' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Check if user already exists
        const existingUser = await UserService.getUserByEmail(userData.email);
        if (existingUser) {
            return new Response(
                JSON.stringify({ error: 'User already exists' }),
                {
                    status: 409,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        const user = await UserService.createUser(userData);
        return new Response(JSON.stringify({ user }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('POST /api/users error:', error);
        return new Response(
            JSON.stringify({ error: 'Internal server error' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}

export async function PUT(request: Request): Promise<Response> {
    try {
        const url = new URL(request.url);
        const userId = url.searchParams.get('id');

        if (!userId) {
            return new Response(
                JSON.stringify({ error: 'User ID is required' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        const body = await request.json();
        const updateData: UpdateUserData = body;

        const user = await UserService.updateUser(userId, updateData);
        return new Response(JSON.stringify({ user }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('PUT /api/users error:', error);
        return new Response(
            JSON.stringify({ error: 'Internal server error' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}

export async function DELETE(request: Request): Promise<Response> {
    try {
        const url = new URL(request.url);
        const userId = url.searchParams.get('id');

        if (!userId) {
            return new Response(
                JSON.stringify({ error: 'User ID is required' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        await UserService.deleteUser(userId);
        return new Response(
            JSON.stringify({ message: 'User deleted successfully' }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    } catch (error) {
        console.error('DELETE /api/users error:', error);
        return new Response(
            JSON.stringify({ error: 'Internal server error' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
} 