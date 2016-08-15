$(document).ready(function() {
  $("button").click(function() {
    var flavors = ["Chocolate", "Vanilla", "strawberry"]
    flavors.forEach(function(flavor) {
    $(".flavor").text(flavor + " is the best flavor.");

    });
  event.preventDefault();
  });
});
