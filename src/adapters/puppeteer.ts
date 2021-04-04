import puppeteer from 'https://deno.land/x/pptr/mod.ts'

let browser = await puppeteer.launch({ headless: false, executablePath: '' })
console.log('browser ->', browser)
