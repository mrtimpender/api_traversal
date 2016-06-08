$( document ).ready(function() {

$("#submit").on('click', function(event){

  $("#output").html("");
  event.preventDefault();

  $.ajax({
    url: 'http://www.omdbapi.com/?s='+ $("#inputField").val(),
    success: function (data) {
      var results = data.Search;
      results.forEach(function(movie){

        if (movie.Poster === "N/A") {
          $("#output").append("<p>" + movie.Title + "</p><img src='mockups/images/no_image.png'/>" );
        } else {
          $("#output").append("<p>" + movie.Title + "</p><img src=" + movie.Poster + "/>" );
        };

      })
    }
  })

});




// Document Ready Closing tags
});
