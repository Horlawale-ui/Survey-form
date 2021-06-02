
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

document.getElementById("btn-1").addEventListener('click', checkFirstValues, false);
document.getElementById("btn-2").addEventListener('click', checkSecondValues, false);

function checkFirstValues() {
    var age = document.querySelectorAll('input[data-name="age"]'),
    education = document.querySelectorAll('input[data-name="files"]'),
    occupation = document.querySelectorAll('input[data-name="occupation"]'),
    gender = document.getElementById('option-values'),
    genderValue = gender.options[gender.selectedIndex].value.length;
    selectOption = document.getElementById('select'),
    selectOptionValue = selectOption.options[selectOption.selectedIndex].value;
    if (genderValue < 7) {
        for (var i =0; i < arr.length; i++) {
            if (selectOptionValue === arr[i]) {
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
}}

function checkSecondValues() {
    var satisfied = document.querySelectorAll('input[data-name="satisfied"]'),
        textField = document.getElementById('neccessitate').value,
        recommend = document.querySelectorAll('input[data-name="yes"]');
       satisfied.forEach(function(e) {
           if (e.checked) {
               if (textField.length > 10) {
                       recommend.forEach(function (e) {
                           if (e.checked) {
                               var form = document.querySelector('form');
                               form.classList.add('reveal-2');
                       }})
                }
            } 
    })
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
    var checkbox = document.querySelector('input[name="known-product"]:checked');
    var product = document.querySelector('input[name="answer-1"]:checked');
    var customer = document.querySelector('input[name="answer-2"]:checked');
    var premium = document.querySelector('input[name="answer-3"]:checked');
    var claim = document.querySelector('input[name="answer-4"]:checked');
    var social = document.querySelector('input[name="answer-5"]:checked');
    var issues = document.querySelector('input[name="answer-6"]:checked');
    var help = getInputVal('help');
    var rating = document.querySelector('input[name="number"]:checked');
    var channels = document.querySelector('input[name="choice"]:checked');
    var improve = getInputVal('improve');
    var assistance = getInputVal('assistance');
    var advice = getInputVal('advice');
    var ideal = document.querySelector('input[name="ideal_options"]:checked');


    //save message
    saveMessage(select, select2, employed,age, degree, satisfied, necessitate, yes, checkbox, product, customer, premium, claim, social, issues, help, rating, channels, improve, assistance, advice, ideal);

    //Show alert
    document.querySelector('.submitpopup-container').style.display = 'flex';

    //Hide Alert After reset
    setTimeout(function(){
     document.querySelector('.submitpopup-container').style.display = 'none'
    },8000);

    //Clear Form
    document.getElementById('contact-form').reset();
    location.reload();

    
}

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}
// Save message to firebase
function saveMessage(select, select2, employed,age, degree, satisfied, necessitate, yes, checkbox, product, customer, premium, claim, social, issues, help, rating, channels,  improve, assistance, advice, ideal){
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
        knownProduct: checkbox.value,
        productRating: product.value,
        customerServiceRating: customer.value,
        premiumRating: premium.value,
        claimRating: claim.value,
        socialRating: social.value,
        issuesrating: issues.value,
        experience: help,
        lasacoRating: rating.value,
        channelMethod: channels.value,
        waystoImprove: improve,
        waystoImproveTwo: assistance,
        waystoImproveThree: advice,
        ideal: ideal.value
    });
}
