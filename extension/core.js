async function update() {
  let [tab] = await browser.tabs.query({active: true, currentWindow: true})

  browser.tabs.executeScript(
    tab.id,
    {
      file: './parser.js'
    }
  )
}
