$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 250);
});

document.getElementById('myButton').onclick = function() {
    // Replace 'your-page.html' with the URL or HTML page you want to open
    window.location.href = '../Articles.html';
}
