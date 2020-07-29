
// Click event function
    document.querySelector('.btn-roll').addEventListener('click', function() {
        var call = numArray();
        
        if (call.length > 0) {
            document.querySelector('.display').textContent = call[call.length -1];
            document.querySelector('._' + call[call.length - 1]).classList.add('called');
        }
    });
    

// Method to collect the previous 5 values and display them.....


// The code to check whether the call is repeated or not and automatic recalling if repeated
function norepeat(arr, check) {
    var unique;
        if (!(arr.length - 1)){
            for(i = 0; i < arr.length - 1; i++) {
                if(arr[i] === check) {
                    unique = Math.ceil(Math.random() * 90);
                    norepeat(arr, unique);
                }else {
                    unique = check;
                }

            }
        return unique;
        }
    return check;
}
// For calling and storing the random records in the array
function numArray() {
    var number = Math.ceil(Math.random() * 90);
    number = norepeat(array, number);
    var array = [];
    array.push(number);
    return array;
}

// For displaying the calls













/*****************************************************/
/*To do list*/
/*****************************************************/

/*
1. Get random number and modify the UI for the same.
2. Collect all the random numbers in an array.
3. Check whether the number does not gets repeated.
4. If repeated then automatically repeat step 1, but do not display any repeated numbers, so that the each time, the UI gets a new number at just one click.
5. Show the previous 3-5 calls.
6. Write a method to give a window, where on clicking we get all the numbes previously called and in order. If the game did not start then print game is about to start.
7. Write a method to add new rules to the game along with the check boxes.
8. Add another section where you will add the distribution and holder of the price as per the rules.

*/



/*


function reciever(call) {
    var PrevFive = [0, 0 ,0 ,0 ,0];
    for(var i = 0; i < 5; i ++) {
        if (PrevFive[i] === call){
            
            //Call again
            var newCall = callNumber();
            reciever(newCall);
    
        }else{
            
            //Display
            
            document.querySelector('.display').textContent = call;
            document.querySelector('._' + call).classList.add('called');
            
            //Add to the array
            
            PrevFive.push(call);
        }
    }
}



*/