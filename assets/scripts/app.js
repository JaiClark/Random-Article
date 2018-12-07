$(document).ready(function() {
  $(".btn").click(function() {
    event.preventDefault();
    var term = $("#term").val();
    console.log(term);

    var apiParams = {action: 'opensearch', search: term , limit: 10, namespace: 0, formatversion: 1, format: 'json'};
    var api = "https://en.wikipedia.org/w/api.php?" + $.param(apiParams);

    $.ajax({
      url: api,
      dataType: 'jsonp',
      success: function(data){
        console.log(data);
        console.log(data);
        for(i = 0; i < data.length; i++) {
          if(data.length > 0) {
          $("#result").html("<br>" + "<div class='card' id='data'>" + data[2][0]+ "</div>");
        }
        }
        

      }
    });
  });
});
