var UserLetter = 27;
var counter = 0;
var Maxtries = 10;
var RandomLetter = Math.floor(Math.random() * UserLetter) +1;



while(Attempts != RandomLetter){
    var Attempts = prompt("Please pick a random  between a and" + UserLetter);
    counter += 1 ;

    if(counter > MaxTries){
        break
        document.write("You have no more tries left");

    }


}