# EAS Hosting Setup

This project is configured with automatic EAS hosting deployments for different environments.

## 🚀 Deployment Environments

### Development Environment

- **Trigger**: Push to `dev` branch
- **Command**: `npm run deploy:dev`
- **URL**: Generated automatically (e.g., https://linkor-uz--ld93sxh4m6.expo.app)

### Preview Environment

- **Trigger**: Pull requests to `dev` branch
- **Command**: `npm run deploy:preview`
- **URL**: Generated automatically for each PR

### Production Environment

- **Trigger**: Manual deployment
- **Command**: `npm run deploy:prod`
- **URL**: Production URL (configured separately)

## 📋 Setup Requirements

### 1. GitHub Secrets

Add the following secret to your GitHub repository:

- `EXPO_TOKEN`: Your Expo access token
  - Get it from: https://expo.dev/accounts/[account]/settings/access-tokens
  - Go to: Repository Settings → Secrets and variables → Actions → New repository secret

### 2. EAS CLI Authentication

Make sure you're logged into EAS CLI:

```bash
npx eas-cli login
```

## 🛠️ Manual Deployment Commands

```bash
# Deploy to development
npm run deploy:dev

# Deploy to preview
npm run deploy:preview

# Deploy to production
npm run deploy:prod
```

## 🔄 Automatic Deployments

### When you push to `dev` branch:

1. GitHub Actions triggers automatically
2. Builds the web export (`expo export --platform web`)
3. Deploys to EAS development environment
4. Provides deployment URL in the action logs

### When you create a PR to `dev` branch:

1. GitHub Actions triggers automatically
2. Builds and deploys to preview environment
3. Comments on the PR with deployment details
4. Updates automatically on new commits to the PR

## 📊 Monitoring Deployments

- **EAS Dashboard**: https://expo.dev/projects/16c26489-28fb-490f-bd51-2be5cf5c5cab/hosting/deployments
- **GitHub Actions**: Check the Actions tab in your repository
- **Deployment URLs**: Available in action logs and PR comments

## 🔧 Configuration Files

- `.github/workflows/eas-hosting.yml`: GitHub Actions workflow
- `eas.json`: EAS project configuration
- `vercel.json`: Vercel deployment configuration (for comparison)
- `package.json`: NPM scripts for manual deployment

## 📝 Notes

- EAS Hosting is currently in preview
- Each deployment gets a unique URL
- Development deployments are perfect for testing features
- Preview deployments are great for code review
- Production deployments should be used for stable releases
