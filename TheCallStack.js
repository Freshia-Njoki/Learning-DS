function takeShower(){
    return "Showering!";
}

function eatBreakFast(){
    let meal = cookFood();
    return `Eating ${meal}`;
}

function cookFood() {
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    return items[Math.floor(Math.random() * items.length)];
}

function wakeup () {
    takeShower();
    eatBreakFast();
    console.log(("Ok ready to go work!"))
}

wakeup()