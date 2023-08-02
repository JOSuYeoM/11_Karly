import { getNode, insertAfter, insertLast, refError } from "../lib/index.js";

const user = {
  id:'asd@naver.com',
  pw:'11teamzzang!@'
}


function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}



const email = getNode('.email__input');
const pw = getNode('.pw__input');
const button = getNode('.login__button');
const loginFail = getNode('.loginFail');
const modalButton = getNode('.modalButton');


let emailValue = email.value;
let pwValue = pw.value;
let emailPass = false;
let pwPass = false;

email.addEventListener('input', function(){
  emailValue = email.value;
  console.log(emailValue);
  if(emailReg(emailValue)){
    emailPass = true;
  }else{
    emailPass = false;
  }
  return emailPass;
})

pw.addEventListener('input', function(){
  pwValue = pw.value
  if(pwReg(pwValue)){
    pwPass = true;
  }else{
    pwPass = false
  }
  return pwPass;
})

button.addEventListener('click', (e) =>{
  e.preventDefault();

  let switchOn = false;

  if(emailPass && pwPass){
    if(user.id === emailValue && user.pw === pwValue){
      window.location.href = 'loginSuccess.html';
    }
  }else{
    loginFail.style.display = 'block';
    modalButton.addEventListener('click', ()=>{
      loginFail.style.display = 'none';
    })
  }
})
