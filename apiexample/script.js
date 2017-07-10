$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    data: {"zip":"02908,us", "appid":"a806a6b5e2943ee6f6d7e4a1d752ffbb"},
    success: function(response) {
        console.log(response);
    }
})

$.ajax({
    type: "POST",
    url: "https://rails-api-test-crcnum4.c9users.io/tasks/index_post",
    data: {"token":"f1f8f0c0e75039a915b6500bcf6bf977", "name":"call mom", "description":"watch the animals"},
    success: function(response) {
        console.log(response);
    }
})