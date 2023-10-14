let usersName;

function askName() {
  alert("We have 10 new kittens ready for adoption!");
  usersName = prompt("What is your name?");
  console.log(usersName);
  return usersName;
}

let usersAnswer;

function adoptOrNo() {
  usersAnswer = prompt(
    "Do you want to adopt our cats? Type Yes or No."
  ).toLowerCase();
  console.log(usersAnswer);

  if (usersAnswer == "yes") {
    console.log(usersAnswer);
    document.write(
      "Welcome " +
        usersName +
        "! Then please scroll down to check out some of our longest residents or click Adopt Now!"
    );
  } else if (usersAnswer == "no") {
    console.log(usersAnswer);
    usersAnswer = prompt(
      "Are you sure? Let's try again. Do you want to adopt our cats? Type Yes or No."
    );

    if (usersAnswer == "yes") {
      document.write(
        "Welcome " +
          usersName +
          "! Then please scroll down to check out some of our longest residents or click Adopt Now!"
      );
    } else if (usersAnswer == "no") {
      document.write(
        "Well " +
          usersName +
          "... maybe you should google some dog adoption sites..."
      );
    } else {
      document.write(
        "Well " +
          usersName +
          "... maybe cats are not suitable for you if you can't follow directions"
      );
      return usersAnswer;
    }
  }
}

function belowHeader() {
  if (usersAnswer == "yes") {
    document.write("Glad you're here!");
  } else if (usersAnswer == "no") {
    document.write("You're welcome to stay I guess...");
  }
}

function footer() {
  if (usersAnswer == "yes") {
    document.write("Go meet Truck!");
  } else if (usersAnswer == "no") {
    document.write("Go meet Truck anyways");
  }
}

function guessCatNumber() {
  let userGuess = prompt("Guess how many cats are on this page!");
  while (userGuess != 4) {
    userGuess = prompt("Try again! Hint: there's less than 5");
  }
  alert("You are correct!");
}


function giveUserACat (){
  let theCatAmount = prompt('How many cats do you want?')
  for (let i = 1; i <= theCatAmount; i++ ) {
    document.write ('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpFeLQOVcNN-ISh8J7xFomAtEwAYss1_jBQ&usqp=CAU" alt="simple small cat icon">');
  }
}