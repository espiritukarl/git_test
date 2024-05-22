let count = 0;
const images = document.querySelectorAll("img");
const dot = document.querySelectorAll(".dot");

function prevSlide() {
    images[count].classList.toggle("current-photo")
    dot[count].classList.toggle("current-dot")
    if (count === 0) {
        count += images.length;
    }
    count -= 1;
    images[count].classList.toggle("current-photo")
    dot[count].classList.toggle("current-dot")
}

function nextSlide() {
    images[count].classList.toggle("current-photo")
    dot[count].classList.toggle("current-dot")
    if (count === 3) {
        count -= images.length;
    }
    count += 1;
    images[count].classList.toggle("current-photo")
    dot[count].classList.toggle("current-dot")
}

function currentSlide(num) {
    images.forEach((val, index) => {
        if (index === num) {
            if (!images[index].classList.contains("current-photo")) {
                images[index].classList.add("current-photo")
                dot[index].classList.add("current-dot")
            }
        }
        else {
            images[index].classList.remove("current-photo");
            dot[index].classList.remove("current-dot")
        }
    })
    count = num
}

setInterval(nextSlide, 5000)