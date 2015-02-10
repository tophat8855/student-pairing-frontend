var studentArray = ["Kevin Litchfield", "Erika Lim", "Zubair Desai",
  "Nina Bachvarova", "Julien Mayer", "Denise Shephard", "Oscar Linares",
  "Max Gordon", "Dana Mulder", "Rory Grant", "Tina Hweicheng Loh",
  "Kristian Ziel", "Ngan Pham", "Brady Stilwell", "Michael Dean",
  "Alex Sell", "Michael Smykowski", "Luis Manzo", "Heather Farley",
  "Irina Tagintseva", "Lauren Richie", "Edozie Izegbu", "David Dang",
  "Bradley Johnson", "Helen Lam", "Cameron Irmas", "Victoria Billingsley",
  "Rosa Choi",];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  var evenArray = [];
  var oddArray = [];

  for (var i = 0; i < array.length; i++) {
    if(array.indexOf(array[i]) % 2 === 0){
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }
  }

  pairOfArrays = [evenArray, oddArray];
  return pairOfArrays;
}


$(document).ready(function() {
  var pairing = shuffle(studentArray);

  var button = '<div class="ui button">Start Over</div>';


  $('body').append(button);
  $('#first').append(pairing[0]);
  $('#second').append(pairing[1]);


  // <div id="again" class="ui button">Start Over</div>\
  console.log(pairing);

  $('body').on('click', '.button', function(event) {
    shuffle(studentArray);

    console.log('clickety');
  });

});
