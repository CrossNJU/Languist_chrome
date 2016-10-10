/**
 * Created by raychen on 2016/10/11.
 */
document.addEventListener('DOMContentLoaded', function () {
    var data = chrome.extension.getBackgroundPage().newtab;
    var repos = data.rets;
    if(data.error){
        $("#message").text(data.error);
        $("#content").hide();
    }else{
        $("#message").hide();
        $("#content-title").text(repos.length);
        $("#content-author").text(repos[0].full_name);
        $("#content-date").text(repos[1].full_name);
        $("#content-first-access").text(repos[2].full_name);
    }
});