let container = document.querySelector('.containter');
let bubbleCount = Math.floor(Math.random()*90)+20;

for (let i = 0; i < bubbleCount; i++) {
    let bubble = document.createElement('span');
    bubble.className = 'bubble';

    let size = Math.random()*60+20;
    let position = Math.random()*90;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${position}%`;

    const delay = Math.random()*12;
    bubble.style.animationDelay = `${delay}s`;

    container.appendChild(bubble)
    
}

// for (const i of bubbleCount) {
    //     let bubble = document.createElement('span');
    //     bubble.className = 'bubble';
    
    //     let size = Math.random()*60+20;
    //     let position = Math.random()*90;
    
    //     bubble.style.width = `${size}px`;
    //     bubble.style.height = `${size}px`;
    //     bubble.style.left = `${position}%`;
    
    //     const delay = Math.random()*12;
    //     bubble.style.animationDelay = `${delay}s`;
    
    //     container.appendChild(bubble)
    // }

// for (const i in bubbleCount) {
//     let bubble = document.createElement('span');
//     bubble.className = 'bubble';

//     let size = Math.random()*60+20;
//     let position = Math.random()*90;

//     bubble.style.width = `${size}px`;
//     bubble.style.height = `${size}px`;
//     bubble.style.left = `${position}%`;

//     const delay = Math.random()*12;
//     bubble.style.animationDelay = `${delay}s`;

//     container.appendChild(bubble)
// }