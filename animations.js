
// Pulse animation
const pulseButton = document.querySelector('.btn-pulse');
pulseButton.addEventListener('mouseover', () => {
    pulseButton.style.animation = 'pulse 0.5s infinite';
});
pulseButton.addEventListener('mouseout', () => {
    pulseButton.style.animation = 'none';
});

// Shake animation
const shakeButton = document.querySelector('.btn-shake');
shakeButton.addEventListener('mouseover', () => {
    shakeButton.style.animation = 'shake 0.5s infinite';
});
shakeButton.addEventListener('mouseout', () => {
    shakeButton.style.animation = 'none';
});

// Glow animation
const glowButton = document.querySelector('.btn-glow');
glowButton.addEventListener('mouseover', () => {
    glowButton.style.boxShadow = '0 0 10px #007bff';
});
glowButton.addEventListener('mouseout', () => {
    glowButton.style.boxShadow = 'none';
});

// Rotate animation
const rotateButton = document.querySelector('.btn-rotate');
rotateButton.addEventListener('mouseover', () => {
    rotateButton.style.animation = 'rotate 0.5s linear';
});
rotateButton.addEventListener('mouseout', () => {
    rotateButton.style.animation = 'none';
});

// Ripple animation
const rippleButton = document.querySelector('.btn-ripple');
rippleButton.addEventListener('click', function(e) {
    let ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    setTimeout(() => {
        ripple.remove();
    }, 300);
});

// Neon animation
const neonButton = document.querySelector('.btn-neon');
neonButton.addEventListener('mouseover', () => {
    neonButton.style.animation = 'neon 1s ease-in-out infinite';
});
neonButton.addEventListener('mouseout', () => {
    neonButton.style.animation = 'none';
});

// 3D Push animation
const pushButton = document.querySelector('.btn-3d');
pushButton.addEventListener('mousedown', () => {
    pushButton.style.transform = 'translateY(5px)';
    pushButton.style.boxShadow = 'none';
});
pushButton.addEventListener('mouseup', () => {
    pushButton.style.transform = 'translateY(0)';
    pushButton.style.boxShadow = '0 5px 0 #0056b3';
});

// Morph animation
const morphButton = document.querySelector('.btn-morph');
morphButton.addEventListener('mouseover', () => {
    morphButton.style.animation = 'morph 0.5s ease infinite';
});
morphButton.addEventListener('mouseout', () => {
    morphButton.style.animation = 'none';
});

// Add these keyframe animations to your CSS file
const style = document.createElement('style');
style.textContent = `
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes ripple {
    to { transform: scale(4); opacity: 0; }
}

@keyframes neon {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.5); }
}

@keyframes morph {
    0% { border-radius: 0; }
    50% { border-radius: 50%; }
    100% { border-radius: 0; }
}
`;
document.head.appendChild(style);

// Add these additional styles to your CSS
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
.ripple {
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s linear;
}
`;
document.head.appendChild(additionalStyles);
