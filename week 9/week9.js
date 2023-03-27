var firstname = document.getElementById('first_name');
var firstnameError = document.getElementById('firstname-error');

firstname.addEventListener('input', function (e) {
    // console.log(e.target.value);
    var pattern = /^[\w]{4,8}$/;
    var currentValue = e.target.value;
    var valid = pattern.test(currentValue);
    //console.log(pattern.text(currentValue))

    if (valid) {
        firstnameError.style.display = 'none'
    } else {
        firstnameError.style.display = 'block'
    }
})