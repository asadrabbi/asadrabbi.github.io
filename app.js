// Initialize Firebase
var config = {
    apiKey: "AIzaSyAymdiJh7gyYaA04nGY-f8tDLpx1Xnfg2M",
    authDomain: "tourist-e68cf.firebaseapp.com",
    databaseURL: "https://tourist-e68cf.firebaseio.com",
    projectId: "tourist-e68cf",
    storageBucket: "tourist-e68cf.appspot.com",
    messagingSenderId: "1087169211115"
};
firebase.initializeApp(config);

//Get a reference to the databse service
const rootRef = firebase.database();
var dbRef = rootRef.ref().child('home_page_post');

//Create Elements
const placeName = document.getElementById('placeName');
const lat = document.getElementById('lat');
const lang = document.getElementById('lang');
const description = document.getElementById('description');
const image = document.getElementById('image');
const addData = document.getElementById('addData');


var Id = rootRef.ref().child('home_page_post');

Id.on('child_added', function(snap){
	const userId = parseInt(snap.key);

	document.getElementById("addData").onclick = function(){
		writeUserData(userId+1, placeName.value, parseFloat(lat.value,), parseFloat(lang.value), description.value, image.value);
		alert('Inserted Data Successfully');
	};

	function writeUserData(userId, placeName, lat, lang, description, image) {
	  firebase.database().ref('home_page_post/' + userId).set({
	    name: placeName,
	    lat: lang,
	    lang: lat, 
	    description: description,
	    image: image
	  });
	}

});