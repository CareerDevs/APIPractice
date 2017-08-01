/*global youtubeApiKey $*/
$(document).ready(function() {
    
    $("#searchYouTube").submit(function(event) {
        event.preventDefault();
        var query = $('#query').val();
        var url = "https://www.googleapis.com/youtube/v3/search";
        var data = {key: youtubeApiKey, part: "snippet", q: query};
        $.ajax({
            url: url,
            data: data,
            type: "GET",
            success: function(response) {
                // console.log(response);
                var items = response.items
                var html = "<ul class='list-group'>";
                $.each(items, function(index, item) {
                    // var item = items[index]
                    console.log(item.snippet.title)
                    html += "<li class='list-group-item'>" + item.snippet.title + "</li>";
                })
                html += "</ul>";
                $("#results").html(html);
            }
        })
    })
})