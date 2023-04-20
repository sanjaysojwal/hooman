const fname =document.getElementById('fname');
// const lname =document.getElementById('lname');
const email =document.getElementById('email');
const phone =document.getElementById('phone');
const submit =document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked");

    let ebody=`
    <b>Name :</b>${fname.value}
    <br>
    <b>Email :</b>${email.value}
    <br>
    <b>Phone No :</b>${phone.value}
    <br>
    `


    Email.send({
        SecureToken : "1fe3e596-e7ee-4a8d-b8c8-5a68865d0e88",
        To : 'karanchavana2z@gmail.com',
        From : "karanchavana2z@gmail.com",
        Subject : "Testing Email"+ email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
})