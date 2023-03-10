let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("imgCarousel");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


//form code starts
const userName = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const messageField = document.getElementById('messageField');
const sendButton = document.getElementById('sendButton');
const errorField = document.getElementById('errorField');


document.getElementById('messageForm').addEventListener('submit', (e) => {
  let errMessages = [];
  
  let nameRegex = /^[a-zA-Z\-]+$/;
  if (userName.value.match(nameRegex)) {
    userName.style.border = '2px solid yellowgreen'
  } else {
    errMessages.push("Invalid name format!")
    userName.style.border = '2px solid red'
    userName.focus();
    errorField.innerText = errMessages.join(', ');
  }

  let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (phone.value.match(phoneRegex)) {
    phone.style.border = '2px solid black'
  } else {
    errMessages.push("Invalid phone format!")
    phone.style.border = '2px solid red'
    phone.focus();
    errorField.innerText = errMessages.join(', ');
  }

  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(validRegex)) {
    email.style.border = '2px solid yellowgreen'
  } else {
    errMessages.push("Invalid email address!")
    email.style.border = '2px solid red'
    email.focus();
    errorField.innerText = errMessages.join(', ');
  }

  if ((messageField.value === '') || (messageField.value == null)) {
    messageField.style.border = '2px solid red'
  } else {
    messageField.style.border = '2px solid yellowgreen'
  }

  if (errMessages.length > 0) {
    e.preventDefault()
    errorField.innerText = errMessages.join(', ');
    document.getElementById('sB').style.width = '237px'
  } 
  else {
    userName.value = ''
    phone.value = ''
    email.value = ''
    messageField.value = ''
    errorField.innerText = ''
    document.getElementById('sB').style.width = '234px'
  }
})
//form code ends


function Baner (clickButtonId, clickButtonId2, clickButtonId3, articleId, article2Id, article3Id) {
    let barnsArticle = document.getElementById(articleId);

document.getElementById(clickButtonId).addEventListener('click', e => {
  if (barnsArticle.className == 'hidden') {
    barnsArticle.className = 'wisible'
    //document.getElementById(divId).style.backgroundColor = 'rgb(45, 118, 48)'
    document.getElementById(article2Id).className = 'hidden'
    document.getElementById(article3Id).className = 'hidden'
    document.getElementById(clickButtonId).style.height = '35px'
    document.getElementById(clickButtonId).style.marginBottom = '0px'
    document.getElementById(clickButtonId2).style.height = '30px'
    document.getElementById(clickButtonId2).style.marginBottom = '5px'
    document.getElementById(clickButtonId3).style.height = '30px'
    document.getElementById(clickButtonId3).style.marginBottom = '5px'

    } else {
    barnsArticle.className = 'hidden'
    document.getElementById(clickButtonId).style.height = '30px'
    document.getElementById(clickButtonId).style.marginBottom = '5px'
        
  }
})
}

Baner ('breadingInfo', 'barnsInfo', 'historyInfo', 'breading', 'barns', 'history');
Baner ('barnsInfo', 'breadingInfo', 'historyInfo', 'barns', 'breading', 'history');
Baner ('historyInfo', 'barnsInfo', 'breadingInfo', 'history', 'barns', 'breading');

//window size adjusting

let windowWidth = window.innerWidth;


window.addEventListener('load', e => {
  if (windowWidth <= 700) {
    document.getElementById('messageForm').style.width = '70vw';
    // document.querySelectorAll('.wisible').forEach(element =>{
    //   element.style.width = '250px';
    // })
    

  } else {
    document.getElementById('messageForm').style.width = '250px';
    
  }
})