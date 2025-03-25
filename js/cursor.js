document.addEventListener('mousemove', function(e) {
    var cursorDot = document.querySelector('.cursor-dot');
    var cursorCircle = document.querySelector('.cursor-circle');
    
    // Get the current mouse position
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    // Position the red dot (smaller dot)
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';

    // Position the light blue circle (larger circle)
    cursorCircle.style.left = mouseX + 'px';
    cursorCircle.style.top = mouseY + 'px';
  });

