document.getElementById('password').addEventListener('keyup',changeBorders);
document.getElementById('confirmPassword').addEventListener('keyup',changeBorders);
function changeBorders() {
var password = document.getElementById('password').value;
var confirmPassword = document.getElementById('confirmPassword').value;
if (password == confirmPassword) {
  document.getElementById('password').style.borderColor="green";
    document.getElementById('confirmPassword').style.borderColor="green";
}
else {
    document.getElementById('confirmPassword').style.borderColor="red";
}
}
