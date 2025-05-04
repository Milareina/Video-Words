window.addEventListener('DOMContentLoaded', () => {
  function updateMask() {
    const svg = document.getElementById('video-mask-svg');
    const rects = document.querySelectorAll('.video-rect');
    svg.innerHTML = '';
    svg.setAttribute('width', window.innerWidth);
    svg.setAttribute('height', window.innerHeight);

    
    const mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
    mask.setAttribute('id', 'mask-rects');

    
    const white = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    white.setAttribute('x', 0);
    white.setAttribute('y', 0);
    white.setAttribute('width', window.innerWidth);
    white.setAttribute('height', window.innerHeight);
    white.setAttribute('fill', 'black'); 
    mask.appendChild(white);

    
    rects.forEach(rect => {
      const r = rect.getBoundingClientRect();
      const svgRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      
      svgRect.setAttribute('x', r.left);
      svgRect.setAttribute('y', r.top);
      svgRect.setAttribute('width', r.width);
      svgRect.setAttribute('height', r.height);
      svgRect.setAttribute('rx', 6);
      svgRect.setAttribute('fill', 'white'); 
      mask.appendChild(svgRect);
    });

    svg.appendChild(mask);
  }

  updateMask();
  window.addEventListener('resize', updateMask);
  window.addEventListener('scroll', updateMask);
});
 
   