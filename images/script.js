document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (event) => {
      cursor.style.left = `${event.pageX}px`;
      cursor.style.top = `${event.pageY}px`;
  });

  document.addEventListener('mouseleave', () => {
      cursor.style.display = 'none';
  });

  document.addEventListener('mouseenter', () => {
      cursor.style.display = 'block';
  });
});
