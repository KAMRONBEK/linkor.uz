// Communication types for Linkor.uz (Chat, Messages, Notifications)

export interface ChatRoom {
    id: string;
    jobId: string;
    participants: string[];
    lastMessage?: Message;
    createdAt: Date;
    updatedAt: Date;
}

export interface Message {
    id: string;
    chatRoomId: string;
    senderId: string;
    content: string;
    type: 'text' | 'file' | 'image';
    attachments: string[];
    createdAt: Date;
    isRead: boolean;
}

export interface Notification {
    id: string;
    userId: string;
    type: 'application' | 'message' | 'contract' | 'payment' | 'system';
    title: string;
    content: string;
    data: Record<string, any>;
    isRead: boolean;
    createdAt: Date;
} 