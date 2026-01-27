# Video Optimization Script for Production Deployment

This document provides instructions for optimizing the large video files in your project.

## Current Video Files

| File | Size | Location |
|------|------|----------|
| anil09.mp4 | 330.85 MB | public/ |
| anill.mp4 | 53.91 MB | public/ |
| screen-recording-brocode.mp4 | 122.12 MB | public/ |
| interview-screenity.mp4 | 1.26 MB | public/ |

**Total: 508 MB of video content**

## Recommended Approach

### Option 1: Use FFmpeg for Local Compression (Recommended)

Install FFmpeg and run these commands to compress videos:

```bash
# Install FFmpeg (if not already installed)
# Windows: Download from https://ffmpeg.org/download.html
# Or use: winget install ffmpeg

# Compress anil09.mp4 (target: ~50-70MB)
ffmpeg -i public/anil09.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k public/anil09-optimized.mp4

# Compress anill.mp4 (target: ~10-15MB)
ffmpeg -i public/anill.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k public/anill-optimized.mp4

# Compress screen-recording-brocode.mp4 (target: ~20-30MB)
ffmpeg -i public/screen-recording-brocode.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k public/screen-recording-brocode-optimized.mp4
```

**Parameters Explained:**
- `-crf 28`: Constant Rate Factor (18-28 is good, higher = smaller file)
- `-preset slow`: Better compression (slower encoding)
- `-c:a aac -b:a 128k`: Audio codec and bitrate

### Option 2: Use Online Video Hosting (Best for Scale)

**Recommended Services:**

1. **Cloudflare Stream** (Best for high traffic)
   - Upload videos to Cloudflare Stream
   - Get embed URLs
   - Automatic adaptive bitrate streaming
   - Global CDN delivery

2. **YouTube (Unlisted)**
   - Upload as unlisted videos
   - Use YouTube embed
   - Free, unlimited bandwidth
   - Automatic quality adaptation

3. **Vimeo**
   - Professional video hosting
   - Customizable player
   - Good analytics

### Option 3: AWS S3 + CloudFront

```bash
# Upload to S3
aws s3 cp public/anil09-optimized.mp4 s3://your-bucket/videos/

# Set up CloudFront distribution for CDN delivery
```

## Implementation Steps

### After Compression

1. **Replace video references in components:**

```typescript
// Before
<video src="/anil09.mp4" />

// After (local optimized)
<video src="/anil09-optimized.mp4" />

// After (CDN)
<video src="https://cdn.yourdomain.com/videos/anil09.mp4" />
```

2. **Add lazy loading:**

```typescript
<video 
  src="/anil09-optimized.mp4"
  loading="lazy"
  preload="none"
  poster="/video-poster.webp"
/>
```

3. **Delete original large files:**

```bash
# After confirming optimized versions work
rm public/anil09.mp4
rm public/anill.mp4
rm public/screen-recording-brocode.mp4
```

## Expected Results

| Metric | Before | After (Compressed) | After (CDN) |
|--------|--------|-------------------|-------------|
| Total Video Size | 508 MB | ~80-120 MB | 0 MB (external) |
| Initial Page Load | ~15s | ~5s | ~2s |
| Bandwidth Cost | High | Medium | Low |

## Next Steps

1. Choose your optimization approach (local compression or CDN)
2. Run the compression commands or upload to CDN
3. Update video references in components
4. Test video playback
5. Delete original large files
6. Deploy to production

## Notes

- **CRF values**: Lower = better quality, larger file. Start with 28, adjust if needed.
- **Poster images**: Create WebP thumbnails for each video (~50KB each)
- **Adaptive streaming**: For best UX, use HLS/DASH with multiple quality levels
