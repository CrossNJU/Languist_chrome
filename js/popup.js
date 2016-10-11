document.addEventListener('DOMContentLoaded', function() {
  var data = chrome.extension.getBackgroundPage().ret_data;
  var repo_data = data.repos;

  var timer = setInterval(()=> {
    console.log('wait');
    if(repo_data) {
      console.log(repo_data[0]);
      $('#repo-item-tmpl').tmpl({
        data: repo_data
      }).appendTo('#repo-item-group');
      clearInterval(timer);
    }
  }, 500);

});
