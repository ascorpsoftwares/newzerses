# Deploy React Portfolio to krishnakky.com

## Step 1: Prepare Files for Upload

Your built React app is in: `krishna_portfolio/dist/`

Files to upload:
- `index.html`
- `assets/` folder (contains JS and CSS)

## Step 2: Upload to Server

### Via FTP/cPanel File Manager:
1. **Login to your hosting control panel**
2. **Navigate to public_html** (or your domain's root folder)
3. **Create folder**: `portfolio`
4. **Upload contents** of `dist/` folder to `portfolio/` folder

### Via SSH (if available):
```bash
# On your server
cd /path/to/krishnakky.com/public_html
mkdir portfolio
# Upload dist contents to portfolio folder
```

## Step 3: Test Your Portfolio

Visit: `https://krishnakky.com/portfolio/`

## Step 4: Link from WordPress

Add a menu item or link in your WordPress site:
- **WordPress Admin** → **Appearance** → **Menus**
- **Add Custom Link**: `https://krishnakky.com/portfolio/`
- **Link Text**: "Portfolio" or "About Me"

## Alternative: Replace Homepage

If you want React as your main site:
1. **Backup current site**
2. **Upload React files to root** (`public_html/`)
3. **Move WordPress to subfolder** (`/blog/`)

## File Structure After Upload:
```
krishnakky.com/
├── index.php (WordPress)
├── wp-content/
├── wp-config.php
├── portfolio/          # Your React app
│   ├── index.html
│   └── assets/
│       └── index-xxxxx.js
└── other WordPress files...
```