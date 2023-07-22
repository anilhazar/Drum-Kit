
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function() {
        playAudio(this.textContent);
        animationButton(this.textContent);
    })
}
    document.addEventListener("keydown", function(event) {
        playAudio(event.key);
        animationButton(event.key);
    })
    



function playAudio(key) {
    switch (key) {
            case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
            break;
            
            case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            case "j":
            var snaree = new Audio("sounds/snare.mp3");
            snaree.play();
            break;
            case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break; 
            case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;   
        default:
            alert("Lütfen geçerli bir tuşa basınız.");
    }
    
}

function animationButton(pressedK) {
    document.querySelector("." + pressedK).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(".pressed" ).classList.remove("pressed");
    }, 100)

    }
