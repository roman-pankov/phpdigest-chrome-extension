let app = function(){

};

app.icons = {};

app.icons.showDefault = (tabId) => {
    chrome.browserAction.setIcon({
        path: "icon/black.png",
        tabId: tabId
    });
}

app.icons.showExists = (tabId) => {
    chrome.browserAction.setIcon({
        path: "icon/green.png",
        tabId: tabId
    });
}

app.urls = {};

app.urls.isInternal = (url) => {
    return url.includes('chrome://') || url.includes('chrome-extension://');
};
