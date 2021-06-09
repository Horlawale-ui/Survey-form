var select = document.getElementById("select"),
  arr = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

for (var i = 0; i < arr.length; i++) {
  var option = document.createElement("OPTION"),
    txt = document.createTextNode(arr[i]);
  option.appendChild(txt);
  option.setAttribute("value", arr[i]);
  select.insertBefore(option, select.lastChild);
}

document
  .getElementById("btn-1")
  .addEventListener("click", checkFirstValues, false);
document
  .getElementById("btn-2")
  .addEventListener("click", checkSecondValues, false);
document
  .getElementById("btn-3")
  .addEventListener("click", checkPreviousValues, false);
document
  .getElementById("btn-4 btn")
  .addEventListener("click", checkPreviousValues, false);



function checkFirstValues() {
  var form = document.querySelector("form");
  form.classList.add("reveal");
}

function checkSecondValues() {
  var form = document.querySelector("form");
  form.classList.add("reveal-2");
}

function checkPreviousValues() {
  var form = document.querySelector("form");

  if (form.classList.contains("reveal")) {
    form.classList.remove("reveal");
  }

  if (form.classList.contains("reveal-2")) {
    form.classList.add("reveal");
    form.classList.remove("reveal-2");
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
  measurementId: "G-3XD83KWLTC",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Reference message collection
var messageRef = firebase.database().ref("messages");

//listen for submit form
document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //Get values

  var select = document.getElementById("option-values");
  var select2 = document.getElementById("select");
  let employed = document.querySelector('input[name="employed"]:checked');
  if(employed != null) {   
    employedValue = employed.value;  
  }else{
    employedValue = "null";
  };
  let age = document.querySelector('input[name="age"]:checked');
  if(age != null) {   
    ageValue = age.value;  
  }else{
    ageValue = "null";
  };
  let degree = document.querySelector('input[name="degree"]:checked');
  if(degree != null) {   
    degreeValue = degree.value;  
  }else{
    degreeValue = "null";
  };
  let satisfied = document.querySelector('input[name="satisfied"]:checked');
  if(satisfied != null) {   
    satisfiedValue = satisfied.value;  
  }else{
    satisfiedValue = "null";
  };
  var necessitate = getInputVal("neccessitate");
  let yes = document.querySelector('input[name="y/n"]:checked');
  if(yes != null) {   
    yesValue = yes.value;  
  }else{
    yesValue = "null";
  };
  var checkbox = document.querySelector('input[name="known-product"]:checked');
  if(checkbox != null) {   
    checkboxValue = checkbox.value;  
  }else{
    checkboxValue = "null";
  }
  var product = document.querySelector('input[name="answer-1"]:checked');
  if(product != null) {   
    productValue = product.value;  
  }else{
    productValue = "null";
  };
  var customer = document.querySelector('input[name="answer-2"]:checked');
  if(customer != null) {   
    customerValue = customer.value;  
  }else{
    customerValue = "null";
  };
  var premium = document.querySelector('input[name="answer-3"]:checked');
  if(premium != null) {   
    premiumValue = premium.value;  
  }else{
    premiumValue = "null";
  };
  var claim = document.querySelector('input[name="answer-4"]:checked');
  if(claim != null) {   
    claimValue = claim.value;  
  }else{
    claimValue = "null";
  };
  var social = document.querySelector('input[name="answer-5"]:checked');
  if(social != null) {   
    socialValue = social.value;  
  }else{
    socialValue = "null";
  };
  var issues = document.querySelector('input[name="answer-6"]:checked');
  if(issues != null) {   
    issuesValue = issues.value;  
  }else{
    issuesValue = "null";
  };
  var pricing = document.querySelector('input[name="answer-7"]:checked');
  if(pricing != null) {   
    pricingValue = pricing.value;  
  }else{
    pricingValue = "null";
  };
  var help = getInputVal("help");
  var rating = document.querySelector('input[name="number"]:checked');
  if(rating != null) {   
    ratingValue = rating.value;  
  }else{
    ratingValue = "null";
  };
  var channels = document.querySelector('input[name="choice"]:checked');
  if(channels != null) {   
    channelsValue = channels.value;  
  }else{
    channelsValue = "null";
  };
  var improve = getInputVal("improve");
  var assistance = getInputVal("assistance");
  var advice = getInputVal("advice");
  var ideal = document.querySelector('input[name="ideal_options"]:checked');
  if(ideal != null) {   
    idealValue = ideal.value;  
  }else{
    idealValue = "null";
  };

  //save message
  saveMessage(
    select,
    select2,
    employedValue,
    ageValue,
    degreeValue,
    satisfiedValue,
    necessitate,
    yesValue,
    checkboxValue,
    productValue,
    customerValue,
    premiumValue,
    claimValue,
    socialValue,
    issuesValue,
	  pricingValue,
    help,
    ratingValue,
    channelsValue,
    improve,
    assistance,
    advice,
    idealValue
  );

  //Show alert
  window.location = "../submit/submitform.html";

  //Clear Form
  document.getElementById("contact-form").reset();
}

//function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}
// Save message to firebase
function saveMessage(
  select,
  select2,
  employedValue,
  ageValue,
  degreeValue,
  satisfiedValue,
  necessitate,
  yesValue,
  checkboxValue,
  productValue,
  customerValue,
  premiumValue,
  claimValue,
  socialValue,
  issuesValue,
  pricingValue,
  help,
  ratingValue,
  channelsValue,
  improve,
  assistance,
  advice,
  idealValue
) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    gender: select.options[select.selectedIndex].value,
    state: select2.options[select2.selectedIndex].value,
    occuption: employedValue,
    age: ageValue,
    education: degreeValue,
    satisfication: satisfiedValue,
    necessitate: necessitate,
    recommendation: yesValue,
    knownProduct: checkboxValue,
    productRating: productValue,
    customerServiceRating: customerValue,
    premiumRating: premiumValue,
    claimRating: claimValue,
    socialRating: socialValue,
    issuesrating: issuesValue,
	  pricingrating: pricingValue,
    experience: help,
    lasacoRating: ratingValue,
    channelMethod: channelsValue,
    waystoImprove: improve,
    waystoImproveTwo: assistance,
    waystoImproveThree: advice,
    ideal: idealValue,
  });
}
