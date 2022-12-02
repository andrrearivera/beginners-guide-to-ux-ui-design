
// read more links
let moreLink = document.querySelectorAll('.moreLink');
let moreText = document.querySelectorAll('.bottom');

moreText.forEach(function(el) {
    el.style.display = 'none';
});

moreLink.forEach(function(el) {
    el.onclick = (e) => {
        const text = e.target;

        if (text.textContent === "Read more") {
            text.previousSibling.previousSibling.style.display = 'inline';
            text.textContent = "Read less";
        } else {
            text.previousSibling.previousSibling.style.display = 'none';
            text.textContent = "Read more";
        }
    }
});
