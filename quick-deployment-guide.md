# Quick React Homepage Deployment

## Step 1: Move WordPress to /blog/ subfolder

On your server (krishnakky.com):
1. **Create folder**: `blog`
2. **Move ALL WordPress files** to `blog/` folder
3. **Update WordPress URLs**:
   - Login to: `https://krishnakky.com/blog/wp-admin`
   - Go to: **Settings** → **General**
   - Change **WordPress Address**: `https://krishnakky.com/blog`
   - Change **Site Address**: `https://krishnakky.com/blog`

## Step 2: Upload React to Root

1. **Upload contents** of `krishna_portfolio/dist/` to root directory
2. **Your React portfolio** is now at `https://krishnakky.com/`

## Final Structure:
```
krishnakky.com/
├── index.html          # React portfolio (main page)
├── assets/             # React assets
│   └── index-xxxxx.js
└── blog/               # WordPress moved here
    ├── index.php
    ├── wp-content/
    └── wp-config.php
```

## Step 3: Test
- **Main site**: `https://krishnakky.com/` (React Portfolio)
- **Blog**: `https://krishnakky.com/blog/` (WordPress)