function askName(){
  alert("We have 10 new kittens ready for adoption!");
  let usersName = prompt("What is your name?");
  console.log(usersName);
  return usersName;
}

function adoptOrNo(){
  let usersAnswer = prompt("Do you want to adopt our cats? Type Yes or No.");
  console.log("User typed: " + usersAnswer);
  return usersAnswer;
}

function usersAnswerHeader(){
  if (usersAnswer.toLowerCase == "Yes") {
    document.write(
      "Welcome " +
        userName +
        "! Then please scroll down to check out some of our longest residents or click Adopt Now!"
    );
  } else if (usersAnswer.toLowerCase == "No") {
    usersAnswer.toLowerCase = prompt(
      "Are you sure? Let's try again. Do you want to adopt our cats? Type Yes or No."
    );

    if (usersAnswer.toLowerCase == "Yes") {
      document.write(
        "Welcome " +
          userName +
          "! Then please scroll down to check out some of our longest residents or click Adopt Now!"
      );

      if (usersAnswer.toLowerCase == "No") {
        document.write(
          "Well " +
            userName +
            "... maybe you should google some dog adoption sites..."
        );
      } else {
        document.write(
          "Well " +
            userName +
            "... maybe cats are not suitable for you if you can't follow directions"
        );
        return usersAnswerHeader;
      }
    }
  }
}

function belowHeader(){
  if (usersAnswerHeader == 'Yes') {
      document.write("Glad you're here!")
  if (usersAnswerHeader == 'No')
        document.write("You're welcome to stay I guess...")
}

function footer (){
  if (usersAnswerHeader == 'Yes') {
      document.write("Go meet Truck!")
  if (usersAnswerHeader == 'No')
        document.write("Go still meet Truck anyways")
}

// if (usersAnswer.toLowerCase == 'Yes') {
//   document.write("Glad you're here!")
// }

// if (usersAnswer == 'Yes') {
//   document.write("Go meet Truck")
// }

// function adoptOrNo(){
//   let usersAnswer = prompt(
//     "Do you want to adopt our cats? Type Yes or No."
//   );
//   console.log("User typed: " + usersAnswer);
//   return usersAnswer;

//   function usersAnswer (){
//   if (usersAnswer.toLowerCase == 'Yes') {
//     document.write("Welcome " + userName +
//       "! Then please scroll down to check out some of our longest residents or click Adopt Now!"
//   );
// } else if (usersAnswer.toLowerCase == "No") {
//   document.write(
//     "Well " +
//       userName +
//       "... maybe you should google some dog adoption sites..."
//   );
// } else {
//   document.write(
//     "Well " +
//       userName +
//       "... maybe cats are not suitable for you if you can't follow directions"