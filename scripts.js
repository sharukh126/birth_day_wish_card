// This script adds balloons, threads, twinkles, and sparkles to their respective containers

const balloons = document.querySelectorAll('.balloon');
const threadsContainer = document.querySelector('.card');
const twinklesContainer = document.querySelector('.confetti');
const sparklesContainer = document.querySelector('.sparkles');

// Balloon animation
balloons.forEach((balloon, index) => {
    balloon.style.animationDuration = `${3 + index * 0.5}s`;
    balloon.style.animationIterationCount = 'infinite';
    balloon.style.animationTimingFunction = 'cubic-bezier(0.3, 0.7, 0.4, 1)';
});

// Thread and twinkle animations
balloons.forEach((balloon) => {
    const thread = document.createElement('div');
    thread.classList.add('thread');
    balloon.appendChild(thread);

    const twinkle = document.createElement('div');
    twinkle.classList.add('twinkle');
    balloon.appendChild(twinkle);
});

// Sparkles animation
for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkles');
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.animationDelay = `${Math.random()}s`;
    sparklesContainer.appendChild(sparkle);
}

// Falling twinkle animation
for (let i = 0; i < 30; i++) {
    const twinkle = document.createElement('div');
    twinkle.classList.add('twinkle');
    twinkle.style.left = `${Math.random() * 100}vw`;
    twinkle.style.animationDelay = `${Math.random()}s`;
    twinklesContainer.appendChild(twinkle);
}
