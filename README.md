# Portfolio website design

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/jared-jaredworks-projects/v0-portfolio-website-design)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/BReMPyEINAv)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/jared-jaredworks-projects/v0-portfolio-website-design](https://vercel.com/jared-jaredworks-projects/v0-portfolio-website-design)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/BReMPyEINAv](https://v0.app/chat/projects/BReMPyEINAv)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Development Workflow

### Making Local Changes

This repository uses a branch-based workflow with pull requests for all changes to maintain clean git history and enable code review.

#### Step 1: Create a Feature Branch

```bash
# Ensure you're on main with latest changes
git checkout main
git pull

# Create a new branch with a descriptive name
git checkout -b descriptive-branch-name
```

**Branch naming examples:**
- `add-contact-form`
- `fix-mobile-navigation`
- `update-hero-section`
- `refactor-case-study-layout`

#### Step 2: Make Changes and Commit

```bash
# Make your code changes
# Then stage and commit them
git add .
git commit -m "Descriptive commit message"
```

#### Step 3: Push and Create Pull Request

```bash
# Push your branch to GitHub
git push -u origin descriptive-branch-name
```

Then create a pull request on GitHub to merge into `main`.

#### Step 4: Clean Up After Merge

After your PR is merged and you've deleted the branch on GitHub:

```bash
# Switch back to main
git checkout main

# Get the merged changes
git pull

# Remove remote branch references
git fetch --prune

# Delete your local branch
git branch -d descriptive-branch-name
```

**Quick cleanup command:**
```bash
git checkout main && git pull && git fetch --prune && git branch -d branch-name
```

### Why This Workflow?

- ✅ Each PR represents one clear feature or fix
- ✅ Easy to review and understand what changed
- ✅ Clean git history with descriptive branch names
- ✅ Can work on multiple features in parallel
- ✅ Easy to revert specific changes if needed
- ✅ Branch names document your work

### GitHub Desktop Alternative

1. **Create branch**: Branch menu → New Branch
2. **Switch branches**: Branch menu → Switch to Branch
3. **Fetch updates**: Repository menu → Fetch (⌘⇧F)
4. **Delete branch**: Branch menu → Delete → select merged branch

---
#### :)))
