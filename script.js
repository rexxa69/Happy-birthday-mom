document.addEventListener('DOMContentLoaded', () => {
    // Create 44 balloons
    const balloonsContainer = document.querySelector('.balloons-container');
    const colors = ['#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C'];

    for (let i = 0; i < 44; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.setProperty('--move-x', `${(Math.random() - 0.5) * 200}px`);
        balloon.style.animationDelay = `${Math.random() * 15}s`;
        balloonsContainer.appendChild(balloon);
    }

    // Show scroll text after a delay
    const scrollText = document.querySelector('.scroll-text');
    setTimeout(() => {
        scrollText.classList.add('show');
    }, 1000);

    // Hide scroll text when scrolling
    window.addEventListener('scroll', () => {
        scrollText.classList.remove('show');
    });

    // Message button click handler
    const messageButton = document.querySelector('.message-button');
    const messagePopup = document.querySelector('.message-popup');

    messageButton.addEventListener('click', () => {
        messagePopup.style.display = 'block';
        messageButton.style.display = 'none';
    });

    // Photo gallery button handler
    const photoButton = document.querySelector('.photo-button');
    const photoGallery = document.querySelector('.photo-gallery');
    
    photoButton.addEventListener('click', () => {
        const scrollInstruction = document.querySelector('.scroll-instruction');
        
        if (photoGallery.style.display === 'none' || !photoGallery.style.display) {
            photoGallery.style.display = 'block';
            photoButton.textContent = 'Scroll kebawah bun';
            scrollInstruction.style.display = 'block';
            
            // Hide scroll instruction after 3 seconds
            setTimeout(() => {
                scrollInstruction.style.display = 'none';
            }, 3000);
        } else {
            photoGallery.style.display = 'none';
            photoButton.textContent = 'Pencet Bun';
            scrollInstruction.style.display = 'none';
        }
    });
});