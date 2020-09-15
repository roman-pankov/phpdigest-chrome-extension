chrome.runtime.onInstalled.addListener(() => {
    (async function(){

        let token = appStorage.get('token');

        if(null === token){
            await axios.post("/users")
                .then(response => {
                    token = response.data.data.token;
                    appStorage.store('token', token)
                })
            ;
        }
    })();
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo.status === "loading"){

        chrome.tabs.getSelected(null, function(tab){

            if(!app.urls.isInternal(tab.url)){

                axios.get("/links/favourite/check", {
                    params: {
                        url: tab.url
                    }
                }).then(response => {
                    response.data.data.exists
                        ? app.icons.showGreen(tab.tabId)
                        : app.icons.showBlack(tab.tabId);
                }).catch(function(error){
                    console.log(error);
                });

            }

        });
    }
});

chrome.browserAction.onClicked.addListener(function(tab){

    chrome.tabs.getSelected(null, function(tab){

        if(!app.urls.isInternal(tab.url)){

            axios.post("/links/favourite/toggle", {
                params: {
                    url: tab.url
                }
            }).then(response => {
                response.data.data.event === 'added'
                    ? app.icons.showGreen(tab.tabId)
                    : app.icons.showBlack(tab.tabId);
            }).catch(function(error){
                console.log(error);
            });

        }
    });
});
