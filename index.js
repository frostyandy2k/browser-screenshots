const puppeteer = require('puppeteer');

(async () => {
	takeScreen('http://test-shop.blc.localhost:8070');
})();

async function takeScreen(url){
	  // 1. Launch the browser
  const browser = await puppeteer.launch();

  // 2. Open a new page
  const page = await browser.newPage();

  // 3. Navigate to URL
  await page.goto(url);

  let path = `screenshot-${url}.png`.replace(/\//g,".");
	// 4. Take screenshot
  await page.screenshot({path: path});

  await browser.close();
}
