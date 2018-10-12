window.onload = function() {
  // const firstBound = document.getElementById('boundary1');
  const start = document.querySelector('#start');
  const end = document.querySelector('#end');
  const boundaries = document.querySelectorAll('div.boundary');

  
  // firstBound.addEventListener('mouseover', handleMouseOver);
  boundaries.forEach(b => b.addEventListener('mouseover', handleMouseOver));
 
  document.get

  function handleMouseOver(e) {
    e.target.classList.toggle('youlose');
  }
};
