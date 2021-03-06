const container = document.querySelector('.container');
const side = container.getBoundingClientRect();
let viewHeight = side.height;

const scroll = (duration, targetPage) => {
  const currentPosition = window.pageYOffset - viewHeight;
  const targetPosition = viewHeight * targetPage;
  const startPosition = viewHeight + currentPosition;
  const distance = targetPosition - startPosition;
  let startTime = null;

  animation = currentTime => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeOut(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  easeOut = (t, b, c, d) => {
    t /= d;
    return -c * t * (t - 2) + b;
  };
  requestAnimationFrame(animation);
};

const scrollDown = (selector, targetPage) => {
  const querySelector = document.querySelector(selector);
  querySelector.addEventListener("click", () => {
    scroll(1000, targetPage);
  });
};

scrollDown("#scroll-to-about-me", 1);
scrollDown("#scroll-to-works", 2);
scrollDown("#scroll-to-skills", 3);
scrollDown("#scroll-to-contact", 4);

scrollDown("#btn-to-works", 2);
scrollDown("#btn-to-skills", 3);
scrollDown("#btn-to-contact", 4);

const navigationFromHeader = (selector, targetPage) => {
  const querySelector = document.querySelector(selector);
  querySelector.addEventListener('click', () => {
    toggleMenu();
    scroll(1000, targetPage);
  });
};

navigationFromHeader("#nav-to-about-me", 1);
navigationFromHeader("#nav-to-works", 2);
navigationFromHeader("#nav-to-skills", 3);
navigationFromHeader("#nav-to-contact", 4);
