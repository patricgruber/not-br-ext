# Not-br (Firefox) Extension
✨This is a fork that ports the extension [not-BR](https://github.com/axoletl/not-br/) to the Firefox browser.  
The extension is still in an **early stage!** 
For testing you can temporarily load the extension:
1. Clone this repository
2. In Firefox, go to `about:debugging`
3. Go to "This Firefox"
4. Open "Temporary Extensions"
5. Click on "Load Temporary Add-On"
6. Select the `manifest.json` file in the `extension` directory
  
<br />

💽To use the extension:
- Right click on any website and click **"Convert this page"** to convert it to not-BR
- To adjust settings, click the notBR icon to open the extension popup panel from your extension toolbar
- You can also convert pages from the popup panel
  
<br />

📑Known Issues and limitations:
- Page will not convert if Devtools are opened
- Page will not auto convert if it is loaded in the background on another tab
- Converted pages cannot be live updated by the settings, this is a performance limitation, but a smarter way to do this may come up later
- Pages may just get really messed up by the conversion, please feel free to report these as things can be done to mitigate this, but please be aware that I can't selectively change features for specific webpages, every webpage is structured differently because the web is built on silly string!
- Text using angle brackets(<>) might get messed up, this is due to the way the parsing works, testing solutions for this, sorry!
- Investigate... [whatever the fuck is going on with emojis](https://twitter.com/subspacesk8r/status/1530388045576278017)
  
<br />
  
🥺Todo/nice to have:
- Font override and OpenDyslexic implementation
  
<br />
  
✏Let me know any feedback on this repo's issues page.
