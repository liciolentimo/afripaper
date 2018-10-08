   // Initialize Firebase
   var config = {
    apiKey: "AIzaSyC5v64_kv2BFy6AJax18KKiqnR7ZL1lemY",
    authDomain: "afripaper-337d4.firebaseapp.com",
    databaseURL: "https://afripaper-337d4.firebaseio.com",
    projectId: "afripaper-337d4",
    storageBucket: "afripaper-337d4.appspot.com",
    messagingSenderId: "323963704110"
  };
  firebase.initializeApp(config);

  //retain logged in user in browser
  firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function(){
    var email = $("#email").val();
    var password = $("#password").val();

    var result = firebase.auth().signInWithEmailAndPassword(email,password);
    result.catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
    });
});

function switchView(view) {
    $.get({
        url:view,
        cache:false,
    }).then(function(data){
        $("#container").html(data);
    });
}