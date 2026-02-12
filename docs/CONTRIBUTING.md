# Development Workflow

This project uses a branch-based workflow with pull requests for all changes to maintain clean git history and enable code review.

## Branching

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

## Making Changes

```bash
git add .
git commit -m "Descriptive commit message"
```

## Push and Open a PR

```bash
git push -u origin descriptive-branch-name
```

Then open a pull request on GitHub to merge into `main`.

## Cleanup After Merge

After your PR is merged and the branch is deleted on GitHub:

```bash
git checkout main && git pull && git fetch --prune && git branch -d branch-name
```

## GitHub Desktop

1. **Create branch**: Branch menu → New Branch
2. **Switch branches**: Branch menu → Switch to Branch
3. **Fetch updates**: Repository menu → Fetch (⌘⇧F)
4. **Delete branch**: Branch menu → Delete → select merged branch
