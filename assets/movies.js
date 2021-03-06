$(document).ready(function(){

  $("#mailHomeClick").on("click", function(){
      $("#mailModal").modal();
  });
  $("#phoneHomeClick").on("click", function(){
      $("#phoneModal").modal();
  });

  //
  // $('#busModal').on('shown.bs.modal', function () {
  //   $("#newBtn").on("click",function(){
  //   console.log("working")
  //   })
  // });


  $(function () {
    $('[data-toggle="popover"]').popover({
          placement: 'top',
          html: 'true',
          title : '<span class="text-info"><strong>title</strong></span>'+
                  '<button type="button" id="close" class="close" onclick="$(&quot;#example&quot;).popover(&quot;hide&quot;);">&times;</button>',
          content : 'test'
      })
  })

//click Submit, button click

$("#inputValid").on("click", function(event) {
    event.preventDefault()
    var movie = $(".movieinput").val()
    console.log(movie)
    movieInput(movie);
})
//connect with ajax OMDB server
function movieInput(movie) {
    var queryURL = "https://www.omdbapi.com/?apikey=trilogy&t=" + movie
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
        console.log(response)

        var title = "Movie Title: "
        var plot = "Movie Plot: "
        var year = "Movie Released in: "
        var actors = "Starring: "
        var awards = "Awards: "
        var boxOffice = "Box Office: "
        var website = "Movie's Official Website: "

        var movieTitle = $("#Title").html(title.bold() + response.Title)
        var moviePlot = $("#Plot").html(plot.bold() + response.Plot)
        var movieYear = $("#Year").html(year.bold() + response.Year)
        var movieActors = $("#Actors").html(actors.bold() + response.Actors)
        var movieAwards = $("#Awards").html(awards.bold() + response.Awards)
        var movieBoxOffice = $("#BoxOffice").html(boxOffice.bold() + response.BoxOffice)
        var movieImg = $("<img style='height: 400px; width: 100%; display: block;'>").attr("src", response.Poster)
        var movieWebsite = $("#Website").html(website.bold() + response.Website)

        $(".img").empty(movieImg)
        $(".img").append(movieImg)
    })
}
})
