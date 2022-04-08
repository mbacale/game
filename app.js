let userNum = document.getElementById("getnumber");
userNum.addEventListener("keydown", function (e) {
    if (e.KeyCode == 1){
    run(e);
    }
});

userNum.focus ();

let counter = 0;

function run() {
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    return ran;
}

function userNumber() {
    let user = document.getElementById("getnumber").value;
    return user;
}

function compareNumbers ( ) {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare");
    let c = document.getElementById("counter");

    if (a != b) {
        z.innerHTML = `numbers are not the same the computer got ${b} you got ${a}`
        z.style.color = "blue";
        z.style.backgroundColor = "black";
        z.style.padding = "30px";
        z.style.textAlign = "center";
        counter++;
        c.innerHTML = "you tried" + counter + "times";
        c.style.color = "green";
        c.style.backgroundColor = "Darkgreen";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        document.querySelector("body").style.backgroundColor = "black";

    } else if (a == b) {
        z.innerHTML = `numbers are  the same the computer got ${b} you got ${a}`;
        z.style.color = "red";
        z.style.backgroundColor = "darkRed";
        z.style.padding = "30px";
        z.style.textAlign = "center";
        counter++;
        c.innerHTML = "you tried" + counter + "times";
        c.style.color = "green";
        c.style.backgroundColor = "Darkgreen";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        document.querySelector("body").style.backgroundColor = "black";

    }

    resetInput();
}

function resetInput () {
    document.getElementById("getNumber").value = "";
}