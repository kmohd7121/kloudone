const form = document.getElementById('form');
const username =document.getElementById('text');
const password =document.getElementById('pass');
form.addEventListener('submit',e=>{
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
    const userValue = username.value.trim();
    const passValue = password.value.trim();
    if(userValue ===''){
        setErrorFor(username,'user name can not be blank');
        //alert("enter user name");

    }
    else{
        setSuccessFor(username);
    }
    if(passValue ===''){
      setErrorFor(password,'password can not be blank');  
    }
    else{
        setSuccessFor(password);  
    }

}
function setErrorFor(input,message){
    const formcontrol=input.parentElement;
    const small = formcontrol.querySelector('small');
    formControl.className = 'input_field error';
	small.innerText = message;
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'input_field success';
}
var x;
if( userValue ==='' )
{
    alert("enter username");
}
else if(passValue ===''){
    alert("enter user name and password");
}
else{
   x=my(); 
}
function my(){
    alert("you have successfully login");
    document.location.href="git3.html";
}

