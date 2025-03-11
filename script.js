document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const message = document.getElementById('message');
    const flowerContainer = document.getElementById('flowerContainer');
    
    let yesBtnSize = 1;
    
    yesBtn.addEventListener('click', function() {
        // Show the message
        message.style.opacity = '1';
        
        // Show the flower
        flowerContainer.style.display = 'flex';
        
        // Hide the buttons
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        
        // Set a timeout to hide the message after 5 seconds
        setTimeout(() => {
            message.style.opacity = '0';
        }, 5000);

        // Add extra flowers
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                createRandomFlower();
            }, i * 300);
        }
    });
    
    noBtn.addEventListener('click', function() {
        // Increase the yes button size
        yesBtnSize += 0.4;
        
        // Apply the new size
        yesBtn.style.transform = `scale(${yesBtnSize})`;
        
        // Make the yes button more noticeable
        yesBtn.style.boxShadow = '0 0 20px rgba(255, 105, 180, 0.8)';
        yesBtn.style.zIndex = '10';
        
        // If the yes button gets too big, make the no button smaller
        if (yesBtnSize > 2) {
            noBtn.style.transform = 'scale(0.8)';
        }
        
        // If the yes button gets even bigger, make the no button even smaller
        if (yesBtnSize > 3) {
            noBtn.style.transform = 'scale(0.6)';
        }
        
        // If the yes button gets extremely big, almost hide the no button
        if (yesBtnSize > 4) {
            noBtn.style.transform = 'scale(0.3)';
            noBtn.style.opacity = '0.5';
        }
        
        // Add some animation to make it playful
        yesBtn.animate([
            { transform: `scale(${yesBtnSize - 0.2})` },
            { transform: `scale(${yesBtnSize})` }
        ], {
            duration: 300,
            easing: 'ease-out'
        });
    });
    
    function createRandomFlower() {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.position = 'absolute';
        flower.style.left = Math.random() * 90 + 'vw';
        flower.style.top = Math.random() * 90 + 'vh';
        flower.style.transform = 'scale(' + (Math.random() * 0.5 + 0.5) + ')';
        
        // Create flower parts
        const colors = ['#ff69b4', '#ff9ed2', '#ffb6c1', '#ffc0cb'];
        
        for (let i = 0; i < 8; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            const angle = i * 45;
            const radius = 35;
            const x = Math.cos(angle * Math.PI / 180) * radius + 35;
            const y = Math.sin(angle * Math.PI / 180) * radius + 35;
            
            petal.style.left = x + 'px';
            petal.style.top = y + 'px';
            petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            flower.appendChild(petal);
        }
        
        const center = document.createElement('div');
        center.className = 'center';
        flower.appendChild(center);
        
        flowerContainer.appendChild(flower);
        
        // Add animation
        flower.animate([
            { opacity: 0, transform: 'scale(0.2)' },
            { opacity: 1, transform: 'scale(' + (Math.random() * 0.5 + 0.5) + ')' }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
    }
});