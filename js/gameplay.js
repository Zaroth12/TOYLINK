const bg = document.getElementById('background');
    let isDragging = false;
    let startX, startY, initialX, initialY;
    let offsetX = 0, offsetY = 0;
const bgWidth = bg.clientWidth;
const bgHeight = bg.clientHeight;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

offsetX = (windowWidth - bgWidth) / 2;
offsetY = (windowHeight - bgHeight) / 2;
bg.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    bg.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialX = offsetX;
      initialY = offsetY;
      bg.style.cursor = "grabbing";
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      bg.style.cursor = "grab";
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();

      let deltaX = e.clientX - startX;
      let deltaY = e.clientY - startY;

      offsetX = Math.min(0, Math.max(window.innerWidth - bg.clientWidth, initialX + deltaX));
      offsetY = Math.min(0, Math.max(window.innerHeight - bg.clientHeight, initialY + deltaY));

      bg.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
    function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    }
    
    function openSection(section) {
        const content = document.getElementById('content');

        toggleMenu();
    }
  