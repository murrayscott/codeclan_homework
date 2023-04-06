function createPhoneNumber(numbers) {

// Setup variable that holds the required number format
    var numberformat = "(xxx) xxx-xxxx"
    
    // Loop each number in the array and replaces the first occurence of x in number format with each of the numbers in the array in turn. Dont use the global /g modifier as only the first occurence is replaced.
    for (var i = 0; i < numbers.length; i++) {
        numberformat = numberformat.replace('x', numbers[i]);     
        }
    // Return the variable numberformat that has been modified by the for loop 
    return numberformat;
}    


module.exports = createPhoneNumber;