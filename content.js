var req = new XMLHttpRequest();
req.open('GET', document.location, false);
req.send(null);
var headers = req.getAllResponseHeaders().toLowerCase();

if (headers.indexOf("region:") > -1) {
	var stringPos = headers.indexOf("region:");
	var serverRegion = headers.substring(stringPos+8, stringPos+10).toUpperCase();
	
	chrome.extension.sendMessage({
		type: "region-send", region: serverRegion
	});
}
else {
	chrome.extension.sendMessage({
		type: "region-send", region: ""
	});
}
