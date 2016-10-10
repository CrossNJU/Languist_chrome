var ret_data = {};
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
			chrome.pageAction.show(tabId);
			$.ajax({
				url: "http://localhost:3001/api/plugin/related?fullName="+now_repo[3]+"/"+now_repo[4],
				cache: false,
				type: "GET",
				//data: JSON.stringify({fullName: "facebook/react"}),
				dataType: "json"
			}).done(function(msg) {
				ret_data = {};
				ret_data.title = msg.length;
				ret_data.author = msg[0].full_name;
				ret_data.postDate = msg[1].full_name;
				ret_data.firstAccess = msg[2].full_name;
			}).fail(function(jqXHR, textStatus) {
				ret_data.error = 2;
			});
		}else
			ret_data.error = 3;
	}
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);