document.addEventListener('DOMContentLoaded', function () {
	var data = chrome.extension.getBackgroundPage().ret_data.repos;
	if(data.error){
		$("#message").text(data.error);
		$("#content").hide();
	}else{
		$("#message").hide();
		$("#content-title").text(data.length);
		$("#content-author").text(data[0].full_name);
		$("#content-date").text(data[1].full_name);
		$("#content-first-access").text(data[2].full_name);
	}
});
