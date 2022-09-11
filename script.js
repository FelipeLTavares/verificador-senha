let numbers, uppercase, lowercase, specials, min;

addEventListener('change', e=>{
    checkPassword(e.target.value)
})

const checkPassword = (pw)=>{
    numbers = /[0-9]/g.test(pw)? true : false;
    uppercase = /[A-Z]/g.test(pw)? true : false;
    lowercase = /[a-z]/g.test(pw)? true : false;
    specials = /[^a-zA-Z0-9]/i.test(pw)? true : false;
    min = pw.length > 8? true : false;
}

const checkPw = () =>{
    let checkNum = document.getElementById('numbers');
    let checkUpper = document.getElementById('upper');
    let checkLower = document.getElementById('lower')
    let checkEsp = document.getElementById('specials');
    let checkMin = document.getElementById('min');

    numbers? checkNum.style.color = 'green' : checkNum.style.color = 'red';
    uppercase? checkUpper.style.color = 'green' : checkUpper.style.color = 'red';
    lowercase? checkLower.style.color = 'green' : checkLower.style.color = 'red';
    specials? checkEsp.style.color = 'green' : checkEsp.style.color = 'red';
    min? checkMin.style.color = 'green' : checkMin.style.color = 'red';
}