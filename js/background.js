﻿var ret_data = {};
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
		ret_data = {};
		ret_data.error = 1;
		var now_repo = tab.url.split('/');
		if (now_repo.length >= 5){
			ret_data.error = "wait for a moment...";
			chrome.pageAction.show(tabId);
			$.ajax({
				url: "http://gitmining.net:40004/api/plugin/related?fullName="+now_repo[3]+"/"+now_repo[4],
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

chrome.tabs.onUpdated.addListener(checkForValidUrl);