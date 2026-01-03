# Project Videos & Poster Images

This portfolio uses **Vercel Blob Storage** to serve video files efficiently.

## Why Vercel Blob?

Video files are too large to commit to Git repositories. Vercel Blob provides:
- Fast CDN delivery
- Automatic optimization
- No repository bloat
- Free tier: 100GB transfer/month

## How to Upload Videos to Vercel Blob

### Step 1: Access Vercel Blob Storage
1. Go to [vercel.com](https://vercel.com) and open your project
2. Navigate to **Storage** tab in the sidebar
3. Click **Create Database** → **Blob** (if not already created)
4. Or click into your existing Blob storage

### Step 2: Upload Your Video Files
1. Click **Upload** button in Blob dashboard
2. Select your video file(s)
3. Once uploaded, click on the file to copy its URL
4. The URL will look like: `https://[hash].public.blob.vercel-storage.com/[filename]`

### Step 3: Update the Code
Replace the local video path with the Blob URL in `app/page.tsx`:

```tsx
// ❌ Before (won't work)
videoSrc="/videos/car-mart.mp4"

// ✅ After (works!)
videoSrc="https://[your-hash].public.blob.vercel-storage.com/car-mart.mp4"
```

## Videos Needed

### ✅ Already Uploaded (Working)
- `walmart-infosec.mp4` - Walmart Information Security
- `walmart-luminate.mp4` - Walmart Data Ventures Luminate

### ⚠️ Need to Upload (Currently using fallback colors)
- `car-mart.mp4` - America's Car Mart
- `follett.mp4` - Follett Corporation
- `jcpenney.mp4` - JCPenney
- `walmart-themis.mp4` - Walmart Legal Themis
- `handled-home.mp4` - Handled Home

## Video Requirements

### Recommended Specs
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 or 1280x720
- **Aspect Ratio**: 16:9
- **Duration**: 10-30 seconds (keeps file size manageable)
- **File Size**: Under 10MB per video (Blob free tier is generous)

### Optimization Tips
- Use [HandBrake](https://handbrake.fr/) to compress videos
- Target bitrate: 2-4 Mbps for web
- Consider 720p instead of 1080p to reduce file size
- Remove audio track if not needed

## Poster Images (Optional)

Poster images serve as thumbnails before videos load. Place them in `/public/images/posters/`:

- `car-mart.png`
- `follett.png`
- `jcpenney.png`
- `walmart-infosec.jpg`
- `walmart-themis.png`
- `walmart-luminate.png`
- `handled-home.png`

Poster specs:
- **Format**: JPG or PNG
- **Resolution**: 1920x1080
- **File Size**: Under 200KB

## Fallback Colors

If a video or poster fails to load, these fallback colors display:

- America's Car Mart: `#2563EB` (blue)
- Follett Corporation: `#204A65` (teal/blue)
- JCPenney: `#E5E5E5` (light gray)
- Walmart Information Security: `#1F2937` (dark slate)
- Walmart Legal Themis: `#1D4ED8` (blue)
- Walmart Data Ventures Luminate: `#E5E5E5` (light gray)
- Handled Home: `#F97316` (orange)

## Performance Features

The `ProjectVideo` and `ProjectCard` components include:
- **Lazy Loading**: Videos load only when entering viewport
- **Intersection Observer**: Triggers 50px before view
- **Hover to Play**: Videos play on hover (in modal they autoplay)
- **Fallback System**: Graceful degradation to poster → color
