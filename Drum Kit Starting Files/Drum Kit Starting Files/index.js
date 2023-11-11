// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick() {
//     alert("i got click");
// }

// event listern 1st what event next what should it do.
var noOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        buttonanimi(buttonInnerHtml);
        makesound(buttonInnerHtml);
    });

}

document.addEventListener("keydown", function (event) {
    makesound(event.key);
    buttonanimi(event.key);
});

function makesound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('/Drum Kit Starting Files/Drum Kit Starting Files/sounds/crash.mp3');
            audio.play();
            break;

        case "a":
            var audio = new Audio('/Drum Kit Starting Files/Drum Kit Starting Files/sounds/kick-bass.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('/Drum Kit Starting Files/Drum Kit Starting Files/sounds/snare.mp3');
            audio.play();
            break;

        case "d":
            var audio = new Audio('/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-1.mp3');
            audio.play();
            break;

        case "j":
            var audio = new Audio('/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-2.mp3');
            audio.play();
            break;

        case "k":
            var audio = new Audio('/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-3.mp3');
            audio.play();
            break;

        case "l":
            var audio = new Audio('/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-4.mp3');
            audio.play();
            break;

        // default:
        //     console.log(buttonInnerHtml);
    }
}


function buttonanimi(currentkey) {
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function () {
        activebutton.classList.remove("pressed");
    }, 100);
}
