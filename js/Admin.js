var users = JSON.parse(localStorage.getItem("user")) || [];
function tableRow(index){
  let target = users[index];
  let tr = document.createElement("tr");
  let number = document.createElement("td");
  number.textContent = index + 1;
  let name = document.createElement("td");
  name.textContent = target.Name;
  let surname = document.createElement("td");
  surname.textContent = target.Surname;
  let username = document.createElement("td");
  username.textContent = target.Username;
  let email = document.createElement("td");
  email.textContent = target.Email;
  let phone = document.createElement("td");
  phone.textContent = target.Phone;
  let country = document.createElement("td");
  country.textContent = target.Country;
  let city = document.createElement("td");
  city.textContent = target.City;
  let address = document.createElement("td");
  address.textContent = target.Address;
  let disEna = document.createElement("td");
  disEna.textContent = "Enabled";
  disEna.onclick = function(){
    if (target.IsEnable){
      disEna.textContent = "Disabled";
      disEna.style.backgroundColor = "red";
      target.IsEnable = false;
      localStorage.setItem("user", JSON.stringify(users));
    }
    else{
      disEna.textContent = "Enabled";
      disEna.style.backgroundColor = "green";
      target.IsEnable = true;
      localStorage.setItem("user", JSON.stringify(users));
    }
  }
  if (target.IsEnable){
    disEna.textContent = "Enabled";
    disEna.style.backgroundColor = "green";
  }
  else {
    disEna.textContent = "Disabled";
    disEna.style.backgroundColor = "red";
  }
  let remove = document.createElement("td");
  remove.textContent = "Remove";
  remove.style.backgroundColor = "darkred";
  remove.onclick = function(){
    tr.remove();
    users.splice(users.indexOf(target), 1);
    localStorage.setItem("user", JSON.stringify(users));
    let cnt = 0;
    for (const item of document.getElementById('admin').children)
    {
      if(cnt != 0)
      {
        item.firstChild.textContent = cnt;
      }
      cnt++;
    }
  }
  let update = document.createElement("td");
  update.textContent = "Update";
  update.style.backgroundColor = "blue";
  update.onclick = function(){
    document.querySelector('#button').classList.add('hide');
    document.querySelector('.panel').classList.remove('active');
    document.querySelector('#form').classList.add('active');
    document.getElementById('name').value = target.Name;
    document.getElementById('surname').value = target.Surname;
    document.getElementById('username').value = target.Username;
    document.getElementById('email').value = target.Email;
    document.getElementById('phone').value = target.Phone;
    document.getElementById('country').value = target.Country;
    document.getElementById('city').value = target.City;
    document.getElementById('address').value = target.Address;
    document.getElementById('update').onclick = function()
    {
      let pos = users.indexOf(target);//save index of this user in the array
      let row = document.getElementsByTagName('tr')[pos + 1];
      row.children[1].textContent = target.Name = document.getElementById('name').value;
      row.children[2].textContent = target.Surname =document.getElementById('surname').value;
      row.children[3].textContent = target.Username = document.getElementById('username').value;
      row.children[4].textContent = target.Email = document.getElementById('email').value;
      row.children[5].textContent = target.Phone = document.getElementById('phone').value;
      row.children[6].textContent = target.Country = document.getElementById('country').value;
      row.children[7].textContent = target.City = document.getElementById('city').value;
      row.children[8].textContent = target.Address = document.getElementById('address').value;
      localStorage.setItem("user", JSON.stringify(users));
      document.querySelector('.panel').classList.add('active');
      document.querySelector('#form').classList.remove('active');
      document.querySelector('#button').classList.remove('hide');
    }
  }
  tr.append(number, name, surname, username, email, phone, country, city,
    address, disEna, remove, update);
  document.querySelector('table').appendChild(tr);
}
for (let i = 0; i < users.length; i++) {
  tableRow(i);
}
function cancel(){
  document.querySelector('.panel').classList.add('active');
  document.querySelector('#form').classList.remove('active');
  document.querySelector('#button').classList.remove('hide');
}
function createNew(){
  document.querySelector('#button').classList.add('hide');
  document.querySelector('.panel').classList.remove('active');
  document.querySelector('#form').classList.add('active');
  document.querySelector('.password').classList.remove('hide');
  document.querySelector('.repassword').classList.remove('hide');
  document.querySelector('#submit').classList.remove('hide');
  document.querySelector('#reset').classList.remove('hide');
  document.querySelector('#update').classList.add('hide');
  document.querySelector('#cancel').classList.add('hide');
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
    document.querySelector('#button').classList.remove('hide');
    document.querySelector('.panel').classList.add('active');
    document.querySelector('#form').classList.remove('active');
    document.querySelector('.password').classList.add('hide');
    document.querySelector('.repassword').classList.add('hide');
    document.querySelector('#submit').classList.add('hide');
    document.querySelector('#reset').classList.add('hide');
    document.querySelector('#update').classList.remove('hide');
    document.querySelector('#cancel').classList.remove('hide');
    tableRow(users.length - 1);
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
