// Loader //
window.addEventListener('load', function(event)
{
	setTimeout(function functionName() {
		document.getElementsByClassName('loader-wrapper')[0].style.visibilaty = 'hidden';
		document.getElementsByClassName('loader-wrapper')[0].style.opacity = '0';
		document.getElementsByClassName('loader-wrapper')[0].style.zIndex = '-1';
	}, 2000);
})
var A = [
["Hello", "How are you?", "Thank you", "Good Afternoon","Sorry", "GoodBye","I Love You"],
["Hallo", "Wie geht es Ihnen?","Danke", "guten Tag", "Entschuldigung","Auf Wiedersehen","Ich liebe Dich"],
["안녕","어떻게 지내?","고마워","좋은 오후","미안","안녕", "사랑해"],
["Hola","Como estas?","gracias","Buenas tardes","Lo siento","Adios","Te amo"],
["你好","你好吗?","谢谢你","下午好","对不起","再见","我爱你"],
["Oi","Como vai?","obrigada","Boa tarde","Desculpe","Tchau","eu te amo"],
["Ciao","Come stai?","grazie","Buon pomeriggio","scusa","addio","Ti amo"],
["こんにちは","元気ですか？","ありがとう","こんにちは","ごめんなさい","さようなら","愛してる"],
["Salut","Comment allez vous","merci","Bon après-midi","Désolé","Au revoir","Je t’aime"]
];
function showLove(index)
{
    let a = document.getElementById('nav-top');
    let array = a.getElementsByTagName('span');
    for (let i = 0; i < array.length; i++)
    {
        array[i].textContent = A[i][index];
    }
}
var index = 0;
setInterval(function () {
  showLove(index);
  if (index == 6){
    index = 0;
  }
  else
    index++;

}, 5000);
$(document).ready(function(){
	$('#myprofile').text(localStorage.getItem("username") + "'s" + " " + "profile");
	$('#name').text(localStorage.getItem("name"));
	$('#surname').text(localStorage.getItem("surname"));
	$('#username').text(localStorage.getItem("username"));
	$('#email').text(localStorage.getItem("email"));
	$('#phone').text(localStorage.getItem("phone"));
	$('#country').text(localStorage.getItem("country"));
	$('#city').text(localStorage.getItem("city"));
	$('#address').text(localStorage.getItem("address"));
});
