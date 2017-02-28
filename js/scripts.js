function Movie(title, time, age) {
  this.movieTitle = title;
  this.movieTime = time;
  this.userAge = age;
  this.moviePrice = 10;
}

// function Discounts() {
//   this.price = 10;
//   this.ageChild = .2;
//   this.ageStudent = .1;
//   this.ageSenior = .15;
//   this.ageMilitary = .1;
//   this.ageAdult = 0;
//   this.morning = .18;
//   this.noon = 0;
//   this.midnight = .15;
// }
//var finalDest = new Movie ("Final Des")

Movie.prototype.discountPrice = function() {
  if ((this.userAge === "Under 12") && (this.movieTime === "Noon")) {
    return (this.moviePrice * 0);
  } else if (this.userAge === "Student") {
    return (this.moviePrice * .9);
  }else if (this.userAge === "Senior Citizen") {
    return (this.moviePrice * .85);
  }else if (this.userAge === "Military") {
    return (this.moviePrice * .9);
  }else if (this.userAge === "Adult") {
    return (this.moviePrice);
  };
};


$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    var inputMovie = $("#movie").val();
    var inputTime = $("#times").val();
    var inputAge = $("#age").val();
    var newMovie = new Movie(inputMovie, inputTime, inputAge);

    var finalTicketPrice = newMovie.discountPrice();
    console.log(newMovie.movieTitle + "   " + finalTicketPrice);
    $("#movieName").text(newMovie.movieTitle);
    $("#result").text("$" + finalTicketPrice);
  });
});
