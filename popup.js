chrome.tabs.create({
            url: chrome.extension.getURL('layout.html'),
            active: false
        }, function(tab) {
            chrome.windows.create({
                tabId: tab.id,
                type: 'popup',
                focused: true
            });
        });
//window.open(chrome.extension.getURL('layout.html'), '_blank')