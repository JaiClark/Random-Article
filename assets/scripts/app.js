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
      success: function(response){
        console.log(response);
      }
    });
  });
});
