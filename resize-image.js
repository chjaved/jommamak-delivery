import sharp from 'sharp';
import fs from 'fs';

async function resizeImage() {
  try {
    // For JomMamak landing page hero, we want:
    // - Desktop hero: 1920x1080 (16:9 aspect ratio) 
    // - Tablet hero: 1024x768 (4:3 aspect ratio)
    // - Mobile hero: 800x600 (4:3 aspect ratio)
    // - App screenshots: 375x812 (iPhone X dimensions)
    
    const inputPath = 'input.png';
    
    if (!fs.existsSync(inputPath)) {
      console.log('❌ Please save your uploaded image as "input.png" in the project root directory');
      console.log('📍 Save it to: c:\\Users\\user\\Documents\\jommamak-delivery\\input.png');
      return;
    }
    
    console.log('📸 Found input image, starting resize process...');
    
    // Create hero images for responsive design
    const heroSizes = [
      { name: 'hero-desktop', width: 1920, height: 1080 },
      { name: 'hero-tablet', width: 1024, height: 768 },
      { name: 'hero-mobile', width: 800, height: 600 }
    ];
    
    for (const size of heroSizes) {
      await sharp(inputPath)
        .resize(size.width, size.height, {
          fit: 'cover',
          position: 'center'
        })
        .png({ quality: 85, compressionLevel: 8 })
        .toFile(`public/${size.name}.png`);
      
      console.log(`✅ Created ${size.name}.png (${size.width}x${size.height})`);
    }
    
    // Create app screenshot sizes (iPhone-like dimensions)
    const screenshotSizes = [
      { name: 'app-screenshot', width: 260, height: 560 },
      { name: 'app-screenshot-large', width: 750, height: 1624 }
    ];
    
    for (const size of screenshotSizes) {
      await sharp(inputPath)
        .resize(size.width, size.height, {
          fit: 'cover',
          position: 'center'
        })
        .png({ quality: 90, compressionLevel: 6 })
        .toFile(`public/${size.name}.png`);
      
      console.log(`✅ Created ${size.name}.png (${size.width}x${size.height})`);
    }
    
    // Create WebP versions for better performance
    await sharp(inputPath)
      .resize(1920, 1080, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 85 })
      .toFile('public/hero-screenshot.webp');
    
    console.log('✅ Created hero-screenshot.webp for modern browsers');
    
    // Replace the existing hero-screenshot.png
    fs.copyFileSync('public/hero-desktop.png', 'public/hero-screenshot.png');
    console.log('✅ Updated hero-screenshot.png with desktop version');
    
    console.log('\n🎉 All images resized successfully!');
    console.log('📁 Check the public/ folder for your new optimized images');
    
  } catch (error) {
    console.error('❌ Error resizing image:', error);
  }
}

resizeImage();
