#!/bin/bash
# Quick deployment script for krishnakky.com

# Navigate to your domain root
cd /path/to/krishnakky.com/public_html

# Backup current WordPress (optional)
mkdir backup-$(date +%Y%m%d)
cp -r * backup-$(date +%Y%m%d)/

# Move WordPress to blog subfolder (if you want to keep it)
mkdir blog
mv *.php blog/
mv wp-* blog/
mv .htaccess blog/ 2>/dev/null || true

# Upload your React build files here
# (You'll need to upload the dist/ contents manually via FTP/cPanel)

echo "Ready to upload React files to root directory!"
echo "Upload contents of krishna_portfolio/dist/ to current directory"