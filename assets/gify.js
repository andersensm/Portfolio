$(document).ready(function() {

  var topics = ["Audi", "BMW", "Bugatti", "Ferrari", "Ford", "Jaguar", "Lamborghini", "Maserati", "Mercedes-Benz", "Porsche"]
  function populateButtons() {
    for (var i = 0; i < topics.length; i++) {
      var topicsButton = $("<button>")
      topicsButton.addClass("btn btn-primary item gifyBtn")
      topicsButton.text(topics[i])
      $("#buttonsContainer").append(topicsButton)
    }
  }
  function topicClick() {
    $(".item").on("click", function(event){
      $("#gifyContainer").empty()
      var name = $(this).text()
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=GskWlsLDt8Qxyare1sPpFYC8ZeH0SWaC&limit=10"
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(response){
        console.log(response)
        var responseArray = response.data
        console.log(responseArray)
        for (var i = 0; i < responseArray.length; i++ ) {
            var gifyDiv = $("<div>")
            gifyDiv.addClass('card text-white bg-secondary mb-3 margin')
            var gifyRating = $("<div>")
            gifyRating.addClass('card-header')
            gifyRating.text("Rating: " + responseArray[i].rating)
            var gifyBody = $("<div>")
            gifyBody.addClass('card-body')
            var gifyImg = $("<img>")
            gifyImg.attr("src", responseArray[i].images.fixed_height_still.url)
            gifyImg.attr("src-animate", responseArray[i].images.fixed_height.url)
            gifyImg.attr("src-still", responseArray[i].images.fixed_height_still.url)
            gifyImg.attr("data", "still")
            $(gifyBody).append(gifyImg)
            $(gifyDiv).append(gifyRating)
            $(gifyDiv).append(gifyBody)
            $("#gifyContainer").append(gifyDiv)
        }
        $('img').off().on("click", function() {
          var status = $(this).attr("data")
          if (status === "still") {
            $(this).attr("src", $(this).attr("src-animate"));
            $(this).attr("data", "animated");
          } else if (status === "animated") {
            $(this).attr("src", $(this).attr("src-still"));
            $(this).attr("data", "still");
          }
        })
      })
    })
  }
  $("#Submit").on("click", function(event){
    event.preventDefault()
    if ($('#newTopic').val() === "") {
      alert("Type a name to submit")
    } else {
      $("#buttonsContainer").empty()
      var newTopic = $("#newTopic").val()
      topics.push(newTopic)
      populateButtons();
      topicClick();
      $('#newTopic').val("")
    }
  })
  $("#Clear").on("click", function(event){
    event.preventDefault()
    $("#buttonsContainer").empty()
    topics = ["Audi", "BMW", "Bugatti", "Ferrari", "Ford", "Jaguar", "Lamborghini", "Maserati", "Mercedes-Benz", "Porsche"]
    populateButtons();
    topicClick();
  })
  populateButtons();
  topicClick();
})
