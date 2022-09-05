//Let's talk about debugging
console.log(`Let's talk about debugging`);

//Sometimes our code will have errors.
//It's not "if" there are errors, it's "when". You will make errors.

//In programming we can "debug" our code and step through it line by line as it runs.
//Helps us see exactly where something is going wrong.



//Below I have some console logs that test the function further down.

console.log(hasStringAtEnd('hello', 'llo')); //true
console.log(hasStringAtEnd('llo', 'hello')); //true
console.log(hasStringAtEnd('llod', 'hello')); //false
console.log(hasStringAtEnd('ll', 'hello')); //false
console.log(hasStringAtEnd('llo', 'hellod')); //false

//What this function does is takes two strings and returns true if the first string is at the end of the other string.

function hasStringAtEnd(a, b) {
    let shortest = '';
    let longest = '';
    if (a.length < b.length) {
        shortest = a;
        longest = b;
    } else {
        shortest = b;
        longest = a;
    }

    const indexStart = longest.length - shortest.length;
    const endOfLongest = longest.substring(indexStart + 1);
    return shortest === endOfLongest;
}

//If we load this now, all five of the logs will be false, so something is wrong.
//If you can't figure it out just by looking, we need to debug it.

//If we open the dev tools and look at the sources we can see our javascript file and code.
//After opening our JS file under the sources tab we can see our code.
//Useful because we can add a breakpoint.

//A "Breakpoint" will stop our code from executing where we put the breakpoint. (The line).
//Alows us to step through the code line by line and see the values of what everything is at that point in time.
//Click on the line number in the sources tab after selecting the file with your code to add a breakpoint.

//Using the "stepover" button, we can step through our code line by line and see the values
//By doing this we can see that on line 34 we have an unneeded "+ 1" that is starting us in the wrong position.
//By removing the "+ 1" we get our expected results.