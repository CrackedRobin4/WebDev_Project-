// Loader //
window.addEventListener('load', function(event)
{
	setTimeout(function functionName() {
		document.getElementsByClassName('loader-wrapper')[0].style.visibilaty = 'hidden';
		document.getElementsByClassName('loader-wrapper')[0].style.opacity = '0';
		document.getElementsByClassName('loader-wrapper')[0].style.zIndex = '-1';
	}, 2000);
})
function registrationShow() {
	document.querySelector('.login-page').classList.remove('active');
	document.querySelector('#form').classList.add('active');
}
var users = JSON.parse(localStorage.getItem("user")) || [];
function checkLogin(){
	let log = document.getElementById('login').value;
	let pass = document.getElementById('Password').value;
	if (log == "CrackedRobin4" && pass == "123456789"){
		let choice = prompt("1.Admin panel \n 2.Website");
			if (choice == "1"){
				document.location.href = "Admin.html";
			}
			if (choice == "2"){
				document.location.href = "Home.html";
			}
			return false;
	}
	for (var i = 0; i < users.length; i++){
		if (log == users[i].Username){
			if (pass == users[i].Password){
				if (users[i].IsEnable == false){
					alert("Sorry, you are banned");
					return false;
				}
				localStorage.setItem("name", users[i].Name);
				localStorage.setItem("surname", users[i].Surname);
				localStorage.setItem("username", users[i].Username);
				localStorage.setItem("email", users[i].Email);
				localStorage.setItem("phone", users[i].Phone);
				localStorage.setItem("country", users[i].Country);
				localStorage.setItem("city", users[i].City);
				localStorage.setItem("address", users[i].Address);
				document.location.href = "Home.html";
				return false;
			}
			else {
				document.getElementById('Password').style.border = "2px solid red";
				return false;
			}
		}
	}
	document.getElementById('login').style.border = "2px solid red";
}
function registrationPage(){
	var a = document.getElementById("email").value;
  document.getElementById('email').style.border = "";
	var b = document.getElementById("name").value;
  document.getElementById('name').style.border = "";
  var e = document.getElementById("surname").value;
  document.getElementById('surname').style.border = "";
  var j = document.getElementById("username").value;
  document.getElementById('username').style.border = "";
  var f = document.getElementById("phone").value;
  document.getElementById('phone').style.border = "";
	var country = document.getElementById('country').value;
  var g = document.getElementById("city").value;
  document.getElementById('city').style.border = "";
  var h = document.getElementById("address").value;
  document.getElementById('address').style.border = "";
	var c = document.getElementById("password").value;
  document.getElementById('password').style.border = "";
	var d = document.getElementById("repassword").value;
  document.getElementById('repassword').style.border = "";
	var aproverka = false;
	var bproverka = true;
	var bproverkaUpper = b[0].toUpperCase();
  var eproverkaUpper = e[0].toUpperCase();
  var gproverkaUpper = g[0].toUpperCase();
  var hproverkaUpper = h[0].toUpperCase();
	var cproverka = true;
	var dproverka = true;
  var eproverka = true
  var jproverka = true;
  var fproverka = true;
  var gproverka = true;
  var hproverka = true;
	var bukvi = 0;
	var chisla = 0;
	for (var i = 0; i < a.length; i++){
		if (a[i] == "@"){
			aproverka = true;
			break;
		}
	}
	if (b[0] == "" || b[0] != bproverkaUpper || b == null)
		bproverka = false;
	if (c.length < 8 || c == null)
		cproverka = false;
	else
		for (var i = 0; i < c.length; i++){
			if (isNaN(parseInt(c[i])))
				bukvi = bukvi + 1;
			else
				chisla = chisla + 1;
		}
	if (c != d || d == null)
		dproverka = false;
  if (j == "" || j == null)
    jproverka = false;
  if (e == "" || e[0] != eproverkaUpper || e == null)
    eproverka = false;
  for (var i = 0; i < f.length; i++) {
		if(f[i] == "+" || f[i] == "(" || f[i] == ")" || f[i] == " ")
			continue;
    if (isNaN(parseInt(f[i]))){
      fproverka = false;
      break;
    }
  }
  if (g == "" || g[0] != gproverkaUpper || g == null)
    gproverka = false;
  if (h == "" || h[0] != hproverkaUpper || h == null)
    hproverka = false;
	if (aproverka == false){
		document.getElementById('email').style.border = "2px solid red";
	}
	if (bproverka == false){
		document.getElementById('name').style.border = "2px solid red";
	}
	if (cproverka == false){
		document.getElementById('password').style.border = "2px solid red";
	}
	if (dproverka == false){
		document.getElementById('repassword').style.border = "2px solid red";
	}
  if (eproverka == false){
		document.getElementById('surname').style.border = "2px solid red";
	}
  if (fproverka == false){
		document.getElementById('phone').style.border = "2px solid red";
	}
  if (gproverka == false){
		document.getElementById('city').style.border = "2px solid red";
	}
  if (hproverka == false){
		document.getElementById('address').style.border = "2px solid red";
	}
  if (jproverka == false){
		document.getElementById('username').style.border = "2px solid red";
	}
	if (aproverka == true && bproverka == true && cproverka == true && dproverka == true && eproverka == true && fproverka == true && gproverka == true && hproverka == true && jproverka == true){
		users.push({Name: b, Surname: e, Username: j, Email: a, Phone: f, Country: country, City: g, Address: h, Password: c, IsEnable: true})
		localStorage.setItem('user', JSON.stringify(users));
		document.querySelector('.login-page').classList.add('active');
		document.querySelector('#form').classList.remove('active');
	}
}
function resetForm(){
		document.getElementById("email").style.border = "";
		document.getElementById("username").style.border = "";
		document.getElementById("password").style.border = "";
		document.getElementById("repassword").style.border = "";
    document.getElementById("name").style.border = "";
		document.getElementById("surname").style.border = "";
		document.getElementById("phone").style.border = "";
		document.getElementById("city").style.border = "";
    document.getElementById("address").style.border = "";
    document.getElementById("email").value = "";
		document.getElementById("username").value = "";
		document.getElementById("password").value = "";
		document.getElementById("repassword").value = "";
    document.getElementById("name").value = "";
		document.getElementById("surname").value = "";
		document.getElementById("phone").value = "";
		document.getElementById("city").value = "";
    document.getElementById("address").value = "";
}
