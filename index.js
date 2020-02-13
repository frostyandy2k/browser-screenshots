const puppeteer = require('puppeteer');

(async () => {
	// 1. Launch the browser
	const browser = await puppeteer.launch({defaultViewport: null});

	// 2. Open a new page
	const page = await browser.newPage();

	try {

		await page.setViewport({
		  width: 400,
		  height: 2000,
		  deviceScaleFactor: 1,
		});

  		for (let i = 2; i < process.argv.length; i++) {
			await takeScreen(page, process.argv[i]);
		}

		await page.setViewport({
		  width: 800,
		  height: 2000,
		  deviceScaleFactor: 1,
		});

  		for (let i = 2; i < process.argv.length; i++) {
			await takeScreen(page, process.argv[i]);
		}

		await page.setViewport({
		  width: 1024,
		  height: 2000,
		  deviceScaleFactor: 1,
		});

  		for (let i = 2; i < process.argv.length; i++) {
			await takeScreen(page, process.argv[i]);
		}

		await page.setViewport({
		  width: 2048,
		  height: 2000,
		  deviceScaleFactor: 1,
		});

  		for (let i = 2; i < process.argv.length; i++) {
			await takeScreen(page, process.argv[i]);
		}
	
  		await browser.close();
  		process.exit(0);
  		
	} catch (e) {
  		console.log(e);
  		process.exit(1);
	}
})();

async function takeScreen(page, url){
	// 3. Navigate to URL
	await page.goto(url);

	let resolution = page.viewport().width + 'x' + page.viewport().height;
	let path = `screenshot-${url}`.replace(/\//g,".") + resolution + '.png';
	// 4. Take screenshot
	await page.screenshot({path: path});
}
