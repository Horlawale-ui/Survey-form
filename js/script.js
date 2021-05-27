
var select = document.getElementById("select"),
arr = [
    "Abia", "Adamawa", "Akwa Ibom","Anambra", "Bauchi","Bayelsa", "Benue", "Borno", "Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT - Abuja","Gombe","Imo",
    "Jigawa","Kaduna", "Kano","Katsina",  "Kebbi","Kogi",
    "Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto", "Taraba","Yobe", "Zamfara"
  ]

for (var i =0; i < arr.length; i++)
{
    var option =document.createElement("OPTION"),
        txt = document.createTextNode(arr[i]);
    option.appendChild(txt);
    option.setAttribute("value",arr[i]);
    select.insertBefore(option, select.lastChild);
}

function checkValues() {
    var age = document.querySelectorAll('input[data-name="age"]'),
    education = document.querySelectorAll('input[data-name="files"]'),
    occupation = document.querySelectorAll('input[data-name="occupation"]'),
    gender = document.getElementById('option-values'),
    genderValue = gender.options[gender.selectedIndex].value.length;
    if (genderValue < 7) {
            occupation.forEach(function (e) {
                if (e.checked) {
                    age.forEach(function (e) {
                        if (e.checked) {
                            education.forEach(function (e) {
                            if (e.checked) {
                                var form = document.querySelector('form');
                                form.classList.add('reveal');
                        }})
                }})
            }})
    }
}


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCQMb52ozVK3Ky_b0JcSWwjV7UCy3c-cnM",
    authDomain: "lasaco-survey.firebaseapp.com",
    projectId: "lasaco-survey",
    storageBucket: "lasaco-survey.appspot.com",
    messagingSenderId: "77255594523",
    appId: "1:77255594523:web:ad9ce05d30c7c42b4b1ebe",
    measurementId: "G-3XD83KWLTC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Reference message collection
var messageRef = firebase.database().ref('messages');


//listen for submit form
document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    //Get values
    
    var select = document.getElementById('option-values');
    var select2 = document.getElementById('select');
    let employed = document.querySelector('input[name="employed"]:checked');
    let age = document.querySelector('input[name="age"]:checked');
    let degree = document.querySelector('input[name="degree"]:checked');
    let satisfied = document.querySelector('input[name="satisfied"]:checked');
    var necessitate = getInputVal('neccessitate');
    let yes = document.querySelector('input[name="y/n"]:checked');
    var help = getInputVal('help');

    //save message
    saveMessage(select, select2, employed,age, degree, satisfied, necessitate, yes,help);

    //Show alert
    document.querySelector('.alert-msg').style.display = 'block';

    //Hide Alert After reset
    setTimeout(function(){
     document.querySelector('.alert-msg').style.display = 'none'
    },3000);

    //Clear Form
    document.getElementById('contact-form').reset();
    
}

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}
// Save message to firebase
function saveMessage(select, select2, employed, age, degree, satisfied, necessitate, yes, help){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        gender: select.options[select.selectedIndex].value,
        state: select2.options[select2.selectedIndex].value,
        occuption: employed.value,
        age: age.value,
        education: degree.value,
        satisfication: satisfied.value,
        necessitate: necessitate,
        recommendation: yes.value,
        experience: help
    });
}
