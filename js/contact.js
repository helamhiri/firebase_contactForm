var config = {
    apiKey: "AIzaSyD-gXkZ_A2dj9SblWZSbG6E4ZBmyqDRuAg",
    authDomain: "project1-f18f8.firebaseapp.com",
    databaseURL: "https://project1-f18f8.firebaseio.com",
    projectId: "project1-f18f8",
    storageBucket: "project1-f18f8.appspot.com",
    messagingSenderId: "472695215373"
  };
  firebase.initializeApp(config);

  var messagesRef = firebase.database().ref('messages');

  function saveMessage(name, email, pass, text){
  var messagesRef = firebase.database().ref('messages');
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    pass: pass,
    text: text
  });
}
document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e) {
	e.preventDefault();
	
	var name = getInputVal('fname');
    var email = getInputVal('adress');
    var pass = getInputVal('pass');
    var text = getInputVal('subject');

    saveMessage(name, email, pass, text);
    // Show alert
document.querySelector('.alert').style.display = 'block';
// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);
    document.getElementById('contactForm').reset();
}
function getInputVal(id){
  return document.getElementById(id).value;
}