function hello(callback) {
        console.log("Hello!");
        callback();
}

function goodbye() {
    console.log("Goodbye!")
}

function leave() {
    console.log("Leave!");
}

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log("The result is: " + result);
}

sum(displayConsole, 5, 10);

