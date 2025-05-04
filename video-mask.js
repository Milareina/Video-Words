window.addEventListener('DOMContentLoaded', () => {
  function updateMask() {
    const svg = document.getElementById('video-mask-svg');
    const container = document.querySelector('.container');
    const rects = document.querySelectorAll('.video-rect');
    svg.innerHTML = '';
    svg.setAttribute('width', window.innerWidth);
    svg.setAttribute('height', container.offsetHeight);

    const mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
    mask.setAttribute('id', 'mask-rects');

    const black = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    black.setAttribute('x', 0);
    black.setAttribute('y', 0);
    black.setAttribute('width', window.innerWidth);
    black.setAttribute('height', container.offsetHeight);
    black.setAttribute('fill', 'black');
    mask.appendChild(black);

    rects.forEach(rect => {
      const r = rect.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const svgRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      
      svgRect.setAttribute('x', r.left - containerRect.left);
      svgRect.setAttribute('y', r.top - containerRect.top);
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