/**
 * Created by raychen on 2016/10/11.
 */
document.addEventListener('DOMContentLoaded', function () {
    $.ajax({
        url: "http://localhost:3001/api/plugin/newtab",
        cache: false,
        type: "GET",
        dataType: "json"
    }).done(function (msg) {
        var repos = msg;
        $("#message").hide();
        $("#content-title").text(repos.length);
        $("#content-author").text(repos[0].full_name);
        $("#content-date").text(repos[1].full_name);
        $("#content-first-access").text(repos[2].full_name);
    }).fail(function (jqXHR, textStatus) {
        console.log('fail');
    });
});