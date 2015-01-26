chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
       	case "region-send":
       		setBadge(request.region);
       		break;
    }
    return true;
});

var setBadge = function(region) {
	chrome.tabs.getSelected(null, function(tab){
		chrome.browserAction.setBadgeText({text: region});
	});
}