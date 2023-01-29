let bar = document.getElementById('bar');
let nav = document.getElementById('navbar');
let close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}
// let sub = document.getElementsByClassName('signupbtn')[0];
// function chk(e){
//     let input1 = document.getElementById('email')
//     let input2 = document.getElementById('password')
//     let input3 = document.getElementById('rpt-password')
//     if(input1==='' && input2==='' && input3===''){
//         return false
//     }
//     else{
//         e.location.href='/home.html'
//     }
// }
// sub.addEventListener('click',chk)