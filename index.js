function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log("HELLO");
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log("hello")
    console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
    switch(true) {
        case string===string.toLowerCase():
            return "I can't hear you!";
            break;
        case string===string.toUpperCase():
            return 'YES INDEED!';
            break;
        case string==="I love you, Grandma.":
            return "I love you, too.";
            break
    }
}

