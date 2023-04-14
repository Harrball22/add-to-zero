// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

for (i = 0; i < array.length; i++){
    for (ii = 0; ii < array.length; ii++){
        if (i !== ii){ // Don't let the same number add to it's self
            if (array[i] + array[ii] === 0){
                console.log(true + `: ${array[i]} and ${array[ii]} add to 0`)
                return
            }
        }
    }
    if (i === array.length - 1){ // Will only be true at the last index of the array.
        console.log(false + ": No two numbers in the array add to 0")
    }
}