let userTexts = document.querySelectorAll(".user-text");
let userPics = document.querySelectorAll(".user-pic");

userPics.forEach((userPic) => {
    userPic.addEventListener('click', showReview);
})

function showReview() {

    userPics.forEach((userPic) => {
        userPic.classList.remove("active-pic")
    })
    userTexts.forEach((userText) => {
        userText.classList.remove("active-text")
    })

    let i = Array.from(userPics).indexOf(event.target);

    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}