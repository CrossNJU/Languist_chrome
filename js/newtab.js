/**
 * Created by raychen on 2016/10/11.
 */
document.addEventListener('DOMContentLoaded', function () {
  var data = chrome.extension.getBackgroundPage().ret_data;
  var repo_data = data.repos.slice(0, 6) ;
  if(data.error){

  }else{
    $('#repo-item-tmpl').tmpl({data: repo_data}).appendTo('#repo-item-group');

    Materialize.showStaggeredList('#repo-item-group');
  }


});
