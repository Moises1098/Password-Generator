// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  var passwordLength;
  var characterChoices = "";

  //Prompt for the length of the password
   passwordLength = prompt("How long do you want your password to be? \r\nMust be between 8-128 characters only!"); 
        if (passwordLength < 8 || passwordLength === null){

        alert("Sorry, Not enough characters. Please try again");
        return;

    }else if (passwordLength > 128) { 
        alert("Sorry, Too many enough characters. Please try again");
        return;

    }
    else{

      //Prompt for types of character included in password
      alert("In the following prompts select OK for what you want in your password or cancel for them to not be included.");
      var lowercase = confirm("Do you want lowercase letters?");
      var uppercase =  confirm("Do you want uppercase letters?");
      var number = confirm("Do you want numbers?");
      var specialcharacter = confirm("Do you want Special Characters?");

      if (lowercase === false && uppercase === false && number === false && specialcharacter === false) {
        alert("Sorry, no critera was sekected for your password and cannot be generated, Please, Try again");

      } else {

            var choices = "";

            if (lowercase != false){
                characterChoices += "abcdefghijklmnopqrstuvwxyz";
                choices += "lowercase \n";
            }

            if (uppercase != false){
               characterChoices += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
               choices += "uppercase \n";
            }

            if (number != false){
                characterChoices += "0123456789";
                choices += "number \n";

            }

            if (specialcharacter != false){
                characterChoices += /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
                choices += "special characters";
            }
            

            //Choices from users
            alert("You have selceted: \n" + choices)

        };
    };

    //Password creation
    for (var i = 0; i <= passwordLength; i++) {

       
        var randomNumber = Math.floor(Math.random() *  characterChoices.length);
        password +=  characterChoices.substring(randomNumber, randomNumber +1);
    }






  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
