document.addEventListener('DOMContentLoaded', function () {
	var data = chrome.extension.getBackgroundPage().ret_data;
	var repo_data = data.repos;
	if(data.error){

	}else{
		console.log(repo_data[0]);
		$('#repo-item-tmpl').tmpl({data: repo_data}).appendTo('#repo-item-group');

		$('.repo-link').click(function() {
			var url = $(this).attr('href');
			console.log(url);
			chrome.tabs.create({url: url});
		});
	}


});
