function validateEmail(input) {
    if (!input) {
        return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(input)) {
        return true;
    } else {
        return validateEmail(input.slice(0, -1));
    }
}

function submit(){
    var email=document.getElementById('emailinput').value;
    console.log(email);

    if (validateEmail(email)) {
        console.log('Valid email');
        document.getElementById('emailinput').classList.remove('error');
        document.getElementById('errmsg').style.display="none";
        document.getElementById('myModal').style.display="block";
        document.getElementsByClassName('dismissbtn')[0].onclick = function(){
            document.getElementById('myModal').style.display="none";
        };
    } else {
        console.log('Invalid email');
        document.getElementById('emailinput').classList.add('error');
        document.getElementById('errmsg').style.display = 'block';
    }
}
