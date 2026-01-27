# Image Optimization Script

This script helps optimize the large PNG image in your project.

## Current Image

- **File**: `ultra_highest_4k.png`
- **Size**: 26.25 MB
- **Location**: `public/`

## Optimization Steps

### Option 1: Convert to WebP (Recommended)

Using Sharp (Node.js):

```bash
# Install sharp
npm install sharp --save-dev

# Create optimization script
node scripts/optimize-images.js
```

Create `scripts/optimize-images.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');

async function optimizeImage() {
  try {
    // Convert to WebP with quality 85
    await sharp('public/ultra_highest_4k.png')
      .webp({ quality: 85 })
      .toFile('public/ultra_highest_4k.webp');
    
    console.log('✓ Created ultra_highest_4k.webp');
    
    // Create AVIF version (even smaller)
    await sharp('public/ultra_highest_4k.png')
      .avif({ quality: 80 })
      .toFile('public/ultra_highest_4k.avif');
    
    console.log('✓ Created ultra_highest_4k.avif');
    
    // Create responsive sizes
    const sizes = [640, 1080, 1920, 3840];
    for (const size of sizes) {
      await sharp('public/ultra_highest_4k.png')
        .resize(size, null, { withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(`public/ultra_highest_4k_${size}w.webp`);
      
      console.log(`✓ Created ultra_highest_4k_${size}w.webp`);
    }
    
    console.log('\\n✓ All images optimized!');
  } catch (error) {
    console.error('Error:', error);
  }
}

optimizeImage();
```

### Option 2: Use Online Tools

1. **Squoosh.app** (Google)
   - Visit: https://squoosh.app
   - Upload `ultra_highest_4k.png`
   - Select WebP or AVIF format
   - Adjust quality slider (80-85%)
   - Download optimized version

2. **TinyPNG**
   - Visit: https://tinypng.com
   - Upload PNG
   - Download compressed version

### Option 3: Command Line (ImageMagick)

```bash
# Install ImageMagick
# Windows: winget install ImageMagick.ImageMagick

# Convert to WebP
magick public/ultra_highest_4k.png -quality 85 public/ultra_highest_4k.webp

# Create responsive sizes
magick public/ultra_highest_4k.png -resize 1920x -quality 85 public/ultra_highest_4k_1920w.webp
magick public/ultra_highest_4k.png -resize 1080x -quality 85 public/ultra_highest_4k_1080w.webp
```

## Using Next.js Image Component

After optimization, use Next.js Image component for automatic optimization:

```typescript
import Image from 'next/image'

// Before
<img src="/ultra_highest_4k.png" alt="..." />

// After
<Image
  src="/ultra_highest_4k.webp"
  alt="..."
  width={3840}
  height={2160}
  quality={85}
  priority={false} // Set to true only for above-fold images
  placeholder="blur"
  blurDataURL="data:image/webp;base64,..." // Generate with plaiceholder
/>
```

## Expected Results

| Format | Size | Reduction |
|--------|------|-----------|
| Original PNG | 26.25 MB | - |
| WebP (85%) | ~3-5 MB | 80-85% |
| AVIF (80%) | ~2-3 MB | 88-90% |

## Next Steps

1. Run the optimization script
2. Update image references to use WebP/AVIF
3. Use Next.js Image component
4. Delete original PNG after confirming
5. Test on different browsers
