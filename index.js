// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick() {
//     alert(`I got Clicked`)
// }


// ========== NGOBAR =========

// document.querySelectorAll(".drum")[0].addEventListener("Click", function() {
//     alert('I got Clicked')
// });

let drumTotal = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumTotal; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let buttonInnerHTML = this.innerHTML;

        makeAudio(buttonInnerHTML)

        animatedButton(buttonInnerHTML)
        // console.log(this.textContent)
        // console.log(this.innerHTML)
        // this.style.color = "white"

        // alert('I got Clicked')
        // var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();

    // ++++++++++++ OnClick ++++++++++++
//         switch (buttonInnerHTML) {
//             case "w":
//                 var audio = new Audio('sounds/tom-1.mp3');
//                 audio.play();
//                 break;
//             case "a":
//                 var audio = new Audio('sounds/tom-2.mp3');
//                 audio.play();
//                 break;
//             case "s":
//                 var audio = new Audio('sounds/tom-3.mp3');
//                 audio.play();
//                 break;
//             case "d":
//                 var audio = new Audio('sounds/tom-4.mp3');
//                 audio.play();
//                 break;
//             case "j":
//                 var audio = new Audio('sounds/snare.mp3');
//                 audio.play();
//                 break;
//             case "k":
//                 var audio = new Audio('sounds/crash.mp3');
//                 audio.play();
//                 break;
//             case "k":
//                 var audio = new Audio('sounds/crash.mp3');
//                 audio.play();
//                 break;
//             case "l":
//                 var audio = new Audio('sounds/kick-bass.mp3');
//                 audio.play();
//                 break;
//             default:
//                 console("tidak ada suara")
//                 break;
//         }

    });
}

// +++++++++ OnPress +++++++++
// deteksi saat ada keyboard yang diaetekan / dipress
document.addEventListener("keypress", function(event) {
    // untuk mengetahui event mana yang sedang di press
    // console.log(event.key)
    makeAudio(event.key)

    // alert("ada keyboard yang di press");
})

function makeAudio(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console("tidak ada suara")
            break;
    }
}

function animatedButton(currentKey) {
    document.querySelector(`.${currentKey}`).classList.add("pressed");

    setTimeout(() => {
        document.querySelector(`.${currentKey}`).classList.remove("pressed")
    }, 500);
}