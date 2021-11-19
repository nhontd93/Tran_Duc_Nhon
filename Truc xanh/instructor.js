    
    const images = ["agasa.jpg","ayumi.jpg","conan.jpg","genta.jpg","haibara.jpg","heiji.jpg","mitsuhiko.jpg","mori.jpg","ran.jpg","yusaku.jpg"];
    const duplicateImages = images.concat(images);
    let imgRandom = [...duplicateImages];
    for(let i=1 ; i<=20; i++){
        var card = document.createElement("div");
        document.getElementById("card-container").appendChild(card);
        card.classList.add("card");
    
        var number = document.createElement("div");
            card.appendChild(number);
            number.classList.add("number");
    
       
        let ramdom = Math.floor(Math.random()*imgRandom.length);

        var img = document.createElement("img");
        card.appendChild(img);
        img.classList.add("img");
        img.hidden = true;
        img.src = "./images/" + imgRandom[ramdom];
        number.innerHTML= i;

        imgRandom.splice(ramdom,1);
       
    }

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let scoreDOM = document.getElementById('score');
let score = 10000;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
  
    this.firstChild.hidden = true;
    this.lastChild.hidden = false;
    this.classList.add('flip');
  
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
  
      return;
    }
  
    secondCard = this;
    checkForMatch();
  }
  function checkForMatch() {
    let isMatch = firstCard.lastChild.src === secondCard.lastChild.src;
  
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    score += 1000;
    scoreDOM.value = score;

    resetBoard();
  }

  function unflipCards() {
    lockBoard = true;
    score -= 1000;
    if(score == 0) {
        alert("game over");
        window.location = '/index.html';

    } else {
        scoreDOM.value = score;

    }

    
   setTimeout(() => {

      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      firstCard.firstChild.hidden = false;
      firstCard.lastChild.hidden = true;
      
      secondCard.firstChild.hidden = false;
      secondCard.lastChild.hidden = true;
      resetBoard();
    }, 800);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  cards.forEach(card => card.addEventListener('click', flipCard));
