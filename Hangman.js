  let mistakes = 5;

  function hide() {
    let div = document.getElementById('inputCard');
    div.style.display = 'none';
  }

  document.addEventListener('DOMContentLoaded', onReset);

  function onReset() {
    photo.querySelectorAll('[id]')
         .forEach(x => x.style.display = "none");
  }

  function alphabetLetters() {
    let resetButon = document.createElement('button');
    resetButon.innerHTML = '<button onclick="return reload()"type="button" class="btn btn-dark">Reset</button>';
    document.getElementById('forReset').appendChild(resetButon);
    let wordForgame = document.getElementById('wordForgame').value;
    let numberOfletter = wordForgame.length;
    for (let i = 0; i < numberOfletter; ++i) {
      let btn = document.createElement('button');
      btn.id = i;
      btn.innerHTML = '<button type="button" class="btn btn-dark"></button>';
      document.getElementById('list').appendChild(btn);
    }
    let letter;
    for (let i = 97; i <= 122; i++) {
      letter = String.fromCharCode(i);
      let alphabetBtn = document.createElement('button');
      alphabetBtn.id = i;
      alphabetBtn.innerHTML = '<button class="btn btn-warning" onclick="apparitionOfletters(\'' + letter + '\');">' + letter + '</button>';
      document.getElementById('box').appendChild(alphabetBtn);
    }
    hide();
  }

  let toWin = 0;

  let apparitionOfletters = function(x) {
    let wordForgame = document.getElementById('wordForgame').value;
    let apparition = 0;
    for (let i = 0; i < wordForgame.length; i++) {
      if (wordForgame.charAt(i) == x) {
        document.getElementById(i).innerHTML = x;
        ++apparition;
        ++toWin;
      }
    }
    let number = x.charCodeAt();
    document.getElementById(number).remove();
    if (apparition == 0) {
      let id = 'id' + mistakes;
      photo.getElementById(id).style.display="inherit";
      --mistakes;
    }
    if (mistakes == 0) {
      gameOver();
    }
    if (toWin == wordForgame.length) {
      youWon();
    }
  }

  function gameOver() {
    finishHide();
    document.getElementById('outputtext').innerHTML = "Game Over";
  }

  function youWon() {
    finishHide();
    document.getElementById('outputtext').innerHTML = "Congrats!";
  }

  function reload() {
    window.location.reload();
  }

  function finishHide() {
    let div1 = document.getElementById('list');
    div1.style.display = 'none';
    let div2 = document.getElementById('box');
    div2.style.display = 'none';
  }
