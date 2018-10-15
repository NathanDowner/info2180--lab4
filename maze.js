window.onload = function() {

  //added jQuery to be able to add a url to the cursor property.
  const script = document.createElement('script');
  script.src = "https://code.jquery.com/jquery-3.3.1.min.js";
  script.integrity = "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=";
  script.crossOrigin = "anonymous";

  document.getElementsByTagName('head')[0].appendChild(script);


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
    cursorToDot();
  }

  function endGame(e) {
    unloadBoundaries();
    maze.removeEventListener('mouseleave', dontCheat);
    start.removeEventListener('mouseover', startGame);
    document.querySelector('#start').style.cursor = 'pointer';
    maze.removeEventListener('mouseenter',cursorToDot);
    document.body.style.cursor = 'context-menu';

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

  function cursorToDot() {
    $('body').css({'cursor': 'url(cursor.cur), default'});
  }
};