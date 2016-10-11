/**
 * Created by raychen on 2016/10/11.
 */
document.addEventListener('DOMContentLoaded', function () {
    $.ajax({
        url: "http://gitmining.net:40004/api/plugin/newtab",
        cache: false,
        type: "GET",
        dataType: "json"
    }).done(function (msg) {
        console.log(msg);
        var repo_data = msg;
        console.log(repo_data);
        $('#repo-item-tmpl').tmpl({data: repo_data}).prependTo('#repo-item-group');
        Materialize.showStaggeredList('#repo-item-group');
    }).fail(function (jqXHR, textStatus) {
        console.log('fail');
    });

});
