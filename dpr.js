//1
let text =document.getElementById("text");
//2
let t = document.getElementsByTagName('h1');
//3

let Class = document.getElementsByClassName("box");
//4
t[0].innerText ="Hello World";
//5
function changeDirection(){
    let cards = document.getElementsByClassName("cards");

    cards[0].style.flexDirection = "column";
}

//6
document.getElementById("diff").innerText ="document,which is represents webpage's element and window is browser's frame that loads document to represends the website.";
//7
t[0].setAttribute("id","heading");
t[0].style.color ="red";
console.log(t);
//8

function replaceBtn(){
    t[0].innerText = "Welcome to Elevation Academy";
}

//9
function time(){
    let hr =new Date().getHours();
    let min = new Date().getMinutes();
    let secs= new Date().getSeconds();

    let ampm ="AM";
    if(hr ==0){
        hr = 12;
    }

    if(hr >12){
        hr =hr-12;
        ampm ="PM";
    }
    if (hr < 10) {

        hr = "0" + hr
    }
    if (min < 10) {

        min = "0" + min
    }

    if (secs < 10) {

        secs = "0" + secs
    }

  let time =  document.getElementById("time");
  time.innerText = hr+": "+min+": "+secs+" "+ampm;
  time.style.backgroundColor ="azure";
  time.style.padding ="15px";
  time.style.width ="fit-content";

  //10 select input
let selecteddate =document.getElementById("date");
let sel = selecteddate.options[selecteddate.selectedIndex].text;

document.getElementById("selecteddate").innerText = sel;
}

setInterval(time,1000);

function validate(){

  
    let name =document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email =document.getElementById("email").value;

    

    if(name ==""){
      let lname = document.getElementById("lname");
      lname.style.color ="red";
      lname.innerText ="Name must be filled up";
    }else{
        lname.innerText ="";
    }


     if(phone.toString().length !==13 && !phone.includes(+91)){
       let lphone = document.getElementById("lphone");
       lphone.style.color ="red";
       lphone.innerText ="phone number should be 10 digits with country code +91";
    }else{
        lphone.innerText ="";
    }
     if(!email.includes("@prepbytes.com")){
      let lemail = document.getElementById("lemail");
      lemail.style.color ="red";
      lemail.innerText = "email should have Domain @prepbytes.com";
    }else{
        lemail.innerText = "";
    }
}

