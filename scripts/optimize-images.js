const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
    const publicDir = path.join(__dirname, '..', 'public');

    console.log('🎨 Starting image optimization...\n');

    try {
        // Optimize ultra_highest_4k.png
        const largeImage = path.join(publicDir, 'ultra_highest_4k.png');

        if (fs.existsSync(largeImage)) {
            console.log('📸 Optimizing ultra_highest_4k.png...');

            // Create WebP version
            await sharp(largeImage)
                .webp({ quality: 85 })
                .toFile(path.join(publicDir, 'ultra_highest_4k.webp'));
            console.log('  ✓ Created ultra_highest_4k.webp');

            // Create AVIF version (even smaller)
            await sharp(largeImage)
                .avif({ quality: 80 })
                .toFile(path.join(publicDir, 'ultra_highest_4k.avif'));
            console.log('  ✓ Created ultra_highest_4k.avif');

            // Create responsive sizes
            const sizes = [640, 1080, 1920, 2560];
            for (const size of sizes) {
                await sharp(largeImage)
                    .resize(size, null, { withoutEnlargement: true })
                    .webp({ quality: 85 })
                    .toFile(path.join(publicDir, `ultra_highest_4k_${size}w.webp`));
                console.log(`  ✓ Created ultra_highest_4k_${size}w.webp`);
            }
        }

        // Optimize other PNG images
        const pngFiles = fs.readdirSync(publicDir)
            .filter(file => file.endsWith('.png') && file !== 'ultra_highest_4k.png');

        for (const file of pngFiles) {
            const filePath = path.join(publicDir, file);
            const stats = fs.statSync(filePath);

            // Only optimize files larger than 100KB
            if (stats.size > 100 * 1024) {
                console.log(`\n📸 Optimizing ${file}...`);
                const baseName = path.basename(file, '.png');

                await sharp(filePath)
                    .webp({ quality: 85 })
                    .toFile(path.join(publicDir, `${baseName}.webp`));
                console.log(`  ✓ Created ${baseName}.webp`);
            }
        }

        console.log('\n✅ All images optimized successfully!');
        console.log('\n📊 Next steps:');
        console.log('  1. Update image references to use .webp versions');
        console.log('  2. Use Next.js Image component for automatic optimization');
        console.log('  3. Delete original large PNG files after confirming');

    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

optimizeImages();
