let captchaBtn = document.getElementById('captcha-btn');
let verfifybtn = document.getElementById('verfifybtn');
let InputEle = document.getElementsByTagName('input');
let small = document.getElementById('small');
let num=60
InputEle[0].disabled = true;

captchaBtn.onclick = () => {
    let chars = '0123456789abcdefghi!@#$%^&*';
    let hexcode = "";
    for (let i = 0; i < 5; i++) {
        let r_num = Math.floor(Math.random() * chars.length);
        hexcode += chars[r_num];
    }
    console.log(hexcode);
    InputEle[0].value = hexcode;
    InputEle[1].value='';

    let x=setInterval(()=>{
    num-=1
    document.getElementById('count').innerHTML="The count Down start "+num
},1000)
}



verfifybtn.onclick = () => {
    if (InputEle[0].value == InputEle[1].value) {
        if(InputEle[0].value =='' || InputEle[1].value=='' ) {
        small.innerText = "Please enter the captcha";;
    }
    else{
        small.innerText = "verified✅";
    } 
    } 
    else{
        small.innerText = "Not verified❌";
    }
}