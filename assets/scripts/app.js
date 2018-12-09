$(document).ready(function() {
  $(".btn").click(function() {
    event.preventDefault();
    var term = $("#term").val();
    console.log(term);

    var apiParams = {
      action: "opensearch",
      search: term,
      limit: 10,
      namespace: 0,
      formatversion: 1,
      format: "json"
    };
    var api = "https://en.wikipedia.org/w/api.php?" + $.param(apiParams);

    $.ajax({
      url: api,
      dataType: "jsonp",
      success: function(data) {
        let header = data[1];
        let desc = data[2];
        let link= data[3];
        

        var com=header.map(function(itm,i){
          return ["<div class='card'><div class='card-body'>" +"<a style='text-decoration: none' href=" + link + ">" + "<h5>" + itm + "</h5>" + desc[i] + "</a></div></div>"];
        }).join('<br>');


        $('#result').append("<div class='card-body'>" + com + '</div></div>');

        console.log(header);
        console.log(desc);
        console.log(link);


      }
    });
  });
});
