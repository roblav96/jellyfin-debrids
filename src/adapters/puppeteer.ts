// import puppeteer from 'https://deno.land/x/pptr/mod.ts'
// import { PuppeteerDeno } from 'https://deno.land/x/puppeteer/deno/Puppeteer.ts'
// console.log('PuppeteerDeno ->', PuppeteerDeno)

import puppeteer from 'https://deno.land/x/puppeteer/mod.ts'
const browser = await puppeteer.launch({ product: 'firefox', headless: false })
const page = await browser.newPage()
await page.goto('https://jellyfin.org')
await page.screenshot({ path: 'jellyfin.org.png' })

await browser.close()

// console.log('Puppeteer ->', Puppeteer)

// let browser = await new Puppeteer({ headless: false, executablePath: '' })
// console.log('browser ->', browser)
