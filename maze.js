window.onload = function() {
  const firstBound = document.getElementById('boundary1');
  const start = document.querySelector('#start');
  const end = document.querySelector('#end');


  // firstBound.addEventListener('mouseover', function (e) {
  //   console.log(e.target);
  //   console.log(firstBound);
  //   firstBound.classList.toggle('youlose');
  // });

  

  

  firstBound.addEventListener('mouseover', handleMouseOver);

 

  function handleMouseOver(e) {
    e.target.classList.toggle('youlose');
  }
};
