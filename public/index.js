document.addEventListener('DOMContentLoaded', function() {
    const slides = [
        'imgs/app/app_home.png',
        'imgs/app/app_list.png',
        'imgs/app/app_meal.png',
        'imgs/app/app_meal_reviews.png',
    ];
    const mainImg = document.querySelector('.app-highlights .highlights-image img');
    const thumbs = document.querySelectorAll('.app-highlights .thumbnails img');
    const boxes = document.querySelectorAll('.app-highlights .feature-box');

    function setSlide(idx) {
        mainImg.src = slides[idx];
        thumbs.forEach((t, i) => t.classList.toggle('active', i === idx));
        boxes.forEach((b, i) => b.classList.toggle('active', i === idx));
    }

    thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => setSlide(i)));
    boxes.forEach((box, i)  => box.addEventListener('click',  () => setSlide(i)));

    // initialize to first slide
    setSlide(0);
});