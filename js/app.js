let app = function(){

};

app.icons = {};

app.icons.showBlack = (tabId) => {
    chrome.browserAction.setIcon({
        path: "icon/black.png",
        tabId: tabId
    });
}

app.icons.showGreen = (tabId) => {
    chrome.browserAction.setIcon({
        path: "icon/green.png",
        tabId: tabId
    });
}

app.urls = {};

app.urls.isInternal = (url) => {
    return !url.includes('http://')
        && !url.includes('https://');
};
