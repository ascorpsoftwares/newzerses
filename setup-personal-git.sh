#!/bin/bash

# Personal Git Setup Script
# Usage: ./setup-personal-git.sh [name] [email] [github_username]
# Example: ./setup-personal-git.sh "Krishna Kumar Yadav" "krishnakky121@gmail.com" "krishnakky999"

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}  Personal Git Setup Script${NC}"
    echo -e "${BLUE}================================${NC}"
}

# Default values (you can modify these)
DEFAULT_NAME="Krishna"
DEFAULT_EMAIL="ascorpsoftwares@gmail.com"
DEFAULT_USERNAME="ascorpsoftwares"

# Parse command line arguments
NAME=${1:-$DEFAULT_NAME}
EMAIL=${2:-$DEFAULT_EMAIL}
GITHUB_USERNAME=${3:-$DEFAULT_USERNAME}

print_header

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    print_status "Initializing Git repository..."
    git init
    print_status "Git repository initialized!"
else
    print_status "Git repository already exists."
fi

# Show current global config (for reference)
print_status "Current global Git configuration:"
echo "  Name: $(git config --global user.name 2>/dev/null || echo 'Not set')"
echo "  Email: $(git config --global user.email 2>/dev/null || echo 'Not set')"
echo ""

# Set local Git configuration (only for this workspace)
print_status "Setting up local Git configuration for this workspace..."
git config --local user.name "$NAME"
git config --local user.email "$EMAIL"

# Set up GitHub remote if provided
if [ ! -z "$GITHUB_USERNAME" ]; then
    REPO_NAME=$(basename "$PWD")
    GITHUB_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
    
    # Check if remote already exists
    if git remote get-url origin >/dev/null 2>&1; then
        print_warning "Remote 'origin' already exists. Current URL:"
        git remote get-url origin
        echo ""
        read -p "Do you want to update it to $GITHUB_URL? (y/N): " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            git remote set-url origin "$GITHUB_URL"
            print_status "Remote 'origin' updated to: $GITHUB_URL"
        fi
    else
        git remote add origin "$GITHUB_URL"
        print_status "Remote 'origin' added: $GITHUB_URL"
    fi
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    print_status "Creating .gitignore file..."
    cat > .gitignore << 'EOF'
# Dependencies
node_modules/
vendor/

# kiro workspace
.kiro

# Build outputs
dist/
build/
*.min.js
*.min.css

# Environment files
.env
.env.local
.env.production
.env.staging

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
logs/
*.log
npm-debug.log*

# Runtime data
pids/
*.pid
*.seed

# WordPress specific
wp-config.php
wp-content/uploads/
wp-content/cache/

# Local development
.local/
.cache/
EOF
    print_status ".gitignore file created!"
fi

# Show final configuration
print_status "Local Git configuration for this workspace:"
echo "  Name: $(git config --local user.name)"
echo "  Email: $(git config --local user.email)"
if git remote get-url origin >/dev/null 2>&1; then
    echo "  Remote: $(git remote get-url origin)"
fi
echo ""

# Show helpful commands
print_status "Useful commands for this workspace:"
echo "  git add .                    # Stage all changes"
echo "  git commit -m 'message'      # Commit changes"
echo "  git push -u origin main      # Push to GitHub (first time)"
echo "  git push                     # Push subsequent changes"
echo ""

print_status "Setup complete! Your global Git config remains unchanged."
print_warning "Remember to create the repository on GitHub: https://github.com/$GITHUB_USERNAME/$REPO_NAME"

# Optional: Initial commit
if [ -z "$(git status --porcelain)" ]; then
    print_status "No files to commit."
else
    read -p "Do you want to make an initial commit? (y/N): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add .
        git commit -m "Initial commit - Personal project setup"
        print_status "Initial commit created!"
        
        if git remote get-url origin >/dev/null 2>&1; then
            read -p "Do you want to push to GitHub? (y/N): " -n 1 -r
            echo ""
            if [[ $REPLY =~ ^[Yy]$ ]]; then
                # Try to set upstream branch
                git branch -M main
                git push -u origin main
                print_status "Pushed to GitHub!"
            fi
        fi
    fi
fi

echo ""
print_status "All done! 🎉"