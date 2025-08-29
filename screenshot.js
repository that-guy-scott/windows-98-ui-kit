const puppeteer = require('puppeteer');
const path = require('path');

async function takeScreenshot() {
    const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set viewport to a typical desktop size
    await page.setViewport({
        width: 1200,
        height: 800,
        deviceScaleFactor: 1
    });
    
    // Navigate to the demo HTML file
    const demoPath = 'file://' + path.resolve(__dirname, 'examples/demo.html');
    console.log('Loading:', demoPath);
    
    await page.goto(demoPath, { waitUntil: 'networkidle0' });
    
    // Wait a bit for any animations to load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Take screenshot
    const screenshotPath = path.resolve(__dirname, 'demo-screenshot.png');
    await page.screenshot({ 
        path: screenshotPath,
        fullPage: true
    });
    
    console.log('Screenshot saved to:', screenshotPath);
    
    await browser.close();
}

takeScreenshot().catch(console.error);