window.onload = function() {
  // const firstBound = document.getElementById('boundary1');
  const start = document.querySelector('#start');
  const end = document.querySelector('#end');
  const boundaries = document.querySelectorAll('div.boundary');
  const status = document.querySelector('h2#status');
  const maze = document.getElementById('maze');

  
  start.addEventListener('mouseover', startGame);  

  start.addEventListener('click', e => {
    boundaries.forEach(b => {
      if (b.classList.contains('youlose'))
        b.classList.remove('youlose');
      status.textContent = "Let's go!";
      startGame();
    });
  });

  function startGame(e) {
    loadBoundaries();
    maze.addEventListener('mouseleave', dontCheat);
    end.addEventListener('mouseover', didWin);
  }

  function endGame(e) {
    unloadBoundaries();
    maze.removeEventListener('mouseleave', dontCheat);
    start.removeEventListener('mouseover', startGame);
    document.querySelector('#start').style.cursor = 'pointer';
  }

  function handleMouseOver(e) {
    if (e.target.classList.contains('example')) {

    } else {
      e.target.classList.add('youlose');
      status.innerHTML = '<p><span style="color:red;">You Lose.</span> Click "S" to start again.</p>';
      endGame();
    } 
  }

  function dontCheat (e) {
    makeRed();
    status.innerHTML = 'NO CHEATING! Click "S" to start again.';
    endGame();
  }

  function didWin(e) {
    let count = 0;
    boundaries.forEach( b => {
      if (b.classList.contains('youlose'))
        count += 1;
    });
    
    if (count == 0) {
      status.innerHTML = '<p><span style="color:green;">You Win!</span> Click "S" to start again.</p>';
    } 
    endGame();

  }

  function loadBoundaries () {
    boundaries.forEach(b =>{
      if (b.classList.contains('example')) {

      } else {
        b.addEventListener('mouseover', handleMouseOver);
      }
    });
  }

  function unloadBoundaries() {
    boundaries.forEach(b => {
      if (b.classList.contains('example')) {

      } else {
        b.removeEventListener('mouseover', handleMouseOver);
      }
    });
  }

  function makeRed() {
    boundaries.forEach( b => {
      if (b.classList.contains('example')) {

      } else {
        b.classList.add('youlose');
      }
    });
  }
};
