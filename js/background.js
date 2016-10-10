var ret_data = {};
var newtab = {};
newtab.error = 1;
ret_data.error = 1;

function getDomainFromUrl(url){
	var host = "null";
	if(typeof url == "undefined" || null == url)
		url = window.location.href;
	var regex = /.*\:\/\/([^\/]*).*/;
	var match = url.match(regex);
	if(typeof match != "undefined" && null != match)
		host = match[1];
	return host;
}

function checkForValidUrl(tabId, changeInfo, tab) {
	if(getDomainFromUrl(tab.url).toLowerCase()=="github.com"){
		var now_repo = tab.url.split('/');
		if (now_repo.length >= 5){
			ret_data.error = "wait for a moment...";
			chrome.pageAction.show(tabId);
			$.ajax({
				url: "http://localhost:3001/api/plugin/related?fullName="+now_repo[3]+"/"+now_repo[4],
				cache: false,
				type: "GET",
				dataType: "json"
			}).done(function(msg) {
				ret_data = {};
				ret_data.repos = msg;
			}).fail(function(jqXHR, textStatus) {
				ret_data.error = 2;
			});
		}
	}
}

function newTabEvent(){
	newtab.error = "please wait...";
	$.ajax({
		url: "http://localhost:3001/api/plugin/newtab",
		cache: false,
		type: "GET",
		dataType: "json"
	}).done(function(msg) {
		console.log(msg);
		newtab = {};
		newtab.rets = msg;
	}).fail(function(jqXHR, textStatus) {
		newtab.error = 2;
	});
}

chrome.tabs.onCreated.addListener(newTabEvent);
chrome.tabs.onUpdated.addListener(checkForValidUrl);