window.onload = function() {
  // const firstBound = document.getElementById('boundary1');
  const start = document.querySelector('#start');
  const end = document.querySelector('#end');
  const boundaries = document.querySelectorAll('div.boundary');

  
  // firstBound.addEventListener('mouseover', handleMouseOver);
  boundaries.forEach(b => b.addEventListener('mouseover', handleMouseOver));
  end.addEventListener('mouseover', didWin);
 
  document.get

  function handleMouseOver(e) {
    if (e.target.classList.contains('example')) {

    } else {
        e.target.classList.add('youlose');
    }
      
  }

  function didWin(e) {
    let count = 0;
    boundaries.forEach( b => {
      if (b.classList.contains('youlose'))
        count += 1;
    });
    
    if (count == 0)
      alert('You Win!');
  }

};
