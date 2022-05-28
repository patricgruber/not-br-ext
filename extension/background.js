let controls = {
    fixation: 5,
    saccade: 10,
    opacity: 100,
    size: 16,
    height: 1,
    spacing: 1,
    auto: false
}

browser.runtime.onInstalled.addListener(() => {
    browser.storage.sync.set({ controls })
    browser.contextMenus.create({
        id: "notBR",
        title: "Convert this page",
    })
})

browser.contextMenus.onClicked.addListener(update)

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status != 'complete') {
        return
    }
    browser.storage.sync.get("controls", ({ controls }) => {
        if (controls.auto) {
            console.log('notBR: autorun')
            update()
        }
    })
}
)
