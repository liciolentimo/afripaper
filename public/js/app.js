  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCeEjZzg2aS0asB0KgAyP4Hl2EjpRPC5C8",
    authDomain: "wallpaperke.firebaseapp.com",
    databaseURL: "https://wallpaperke.firebaseio.com",
    projectId: "wallpaperke",
    storageBucket: "wallpaperke.appspot.com",
    messagingSenderId: "1019607022359"
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