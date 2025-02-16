
const firebaseConfig = {
  apiKey: "AIzaSyBq_PyPgxIiVeeDfpbbzDhmp_deIf9uAe4",
  authDomain: "equinox-gym.firebaseapp.com",
  databaseURL: "https://equinox-gym-default-rtdb.firebaseio.com",
  projectId: "equinox-gym",
  storageBucket: "equinox-gym.firebasestorage.app",
  messagingSenderId: "415549063164",
  appId: "1:415549063164:web:d7451b5b810a1583db3c79",
  measurementId: "G-YXN3BJ2KM8"
};
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    
    var password = getElementVal("password");

    saveMessages(name, emailid, password);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, password) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      password: password,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };


