/*this is to declare the golbal variables*/
var counter = 0;
var oldGuess = 0;
var numberToBeGuessed = randomNumber(1, 100); //The randomNuber function will be stored in the numberToBeGuessed variable.
$('#count').text(counter); // sets the # of guesses
/*this part is to declare the functions*/
//function to validate.
function validate(guessedNumber) {
    if (isNaN(guessedNumber)) {
        alert("You must enter a number!");
        $('#userGuess').val(''); //this clears the input to zero
        return false; // this means, stop the loop and don't do anything else
    } else if (guessedNumber % 1 !== 0) { //makes sure the number is an integer
        alert('You must enter an integer!');
        $('#userGuess').val(''); //this clears the input to zero
        return false; // this means, stop the loop and don't do anything else
    } else if ((guessedNumber < 1) || (guessedNumber > 100)) {
        alert('Choose a number between 1 and 100!');
        $('#userGuess').val(''); //this clears the input to zero
        return false;
    } else {
        feedback(guessedNumber, numberToBeGuessed);
        counter++;
        guesses(counter);
        history(guessedNumber);
        $('#userGuess').val('');
        /* if (counter <= 0) {
            $('#feedback').text('Game Over!');
            alert('The Secret number was ' + numberToBeGuessed + ' ! Better luck next time !!');
        }*/
    }
}
//function to show feedback.
function feedback(guessedNumber, numberToBeGuessed) {
    var difference = Math.abs(numberToBeGuessed - guessedNumber); // defines whether it's a neg number or a pos number its stays positive(absolute value).
    if (difference >= 50) {
        $('#feedback').text('Ice Cold!');

    } else if (difference >= 30 && difference <= 49) {
        $('#feedback').text('Cold!');
    } else if (difference >= 20 && difference <= 29) {
        $('#feedback').text('Warm!');
    } else if (difference >= 10 && difference <= 19) {
        $('#feedback').text('Hot!');
    } else if (difference >= 1 && difference <= 9) {
        $('#feedback').text('Very Hot!!');
    } else {
        $('#feedback').text('You got it. Well done!');
    }
}
//function to show the guesses.
function guesses(counter) {
    $('#count').text(counter);
}
//functions to show the history.
function history(guessedNumber) {
    $('#guessList').append('<li>' + guessedNumber + '</li>');
}
/*function randum number*/
function randomNumber(min, max) {
    //Returns a random integer between min (included) and max (included); Math.floor() will give you a non-uniform distribution!
    //random number generator details can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
/*this part is to use the functions*/
$(document).ready(function () {
    //when you click on the guessButton start doing stuff.
    $('#guessButton').on('click', function () {
        var guessedNumber = $('#userGuess').val(); //takes input from the user
        validate(guessedNumber);
    });
    $(document).on('keypress', function (event) {
        //on enter
        if (event.which === 13) { //which is the equivilate of keycode.


            var guessedNumber = $('#userGuess').val(); //takes input from the user
            validate(guessedNumber);



        }
    });
    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });

});
