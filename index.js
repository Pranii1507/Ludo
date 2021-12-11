var score1=0, score2=0;


function logic(){

  var num1= Math.floor(Math.random() * 6) + 1;
  var num2= Math.floor(Math.random() * 6) + 1;

  changeImage('img1', num1);
  changeImage('img2', num2);

  score1= score1+num1;
  score2= score2+num2;

  document.getElementById('name1').innerHTML = 'Pranali score ' + score1;
  document.getElementById('name2').innerHTML = 'Sneha score ' + score2;

if (score1>50) {
    document.getElementById('name1').innerHTML = 'Pranali Wins';
    document.getElementById('name2').innerHTML = '';
}
 if (score2>50) {
  document.getElementById('name1').innerHTML = 'Sneha Wins';
  document.getElementById('name2').innerHTML = '';

}

}




function changeImage(img, number) {
  var song1 = new Audio('sound/tom-2.mp3');
  song1.play();

  if (number==1) {
    document.getElementById(img).src ='images/dice1.png';
  }

  if (number==2) {
    document.getElementById(img).src ='images/dice2.png';
  }

  if (number==3) {
    document.getElementById(img).src ='images/dice3.png';
  }

  if (number==4) {
    document.getElementById(img).src ='images/dice4.png';
  }

  if (number==5) {
    document.getElementById(img).src ='images/dice5.png';
  }

  if (number==6) {
    document.getElementById(img).src ='images/dice6.png';
  }
}
