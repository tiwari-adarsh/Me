const scriptURL = 'https://script.google.com/macros/s/AKfycby1KR6lzpox-qnR8Jw9-Eg7NUFt5CZXmMUL1lroabNdjMa_NqjOIkcTB4MChUb80oMl/exec';


fnSubmit = () => {
    var name = document.getElementById('Name').value;
    var email = document.getElementById('EmailId').value;
    var comment = document.getElementById('Comment').value;

    if (!isValidEmail(email)) {     alert("❌ Please enter a valid email address.");
     return;
    }
    if(name != "" && email != "" && comment != "" ){
    const formdata = new FormData();
    formdata.append("name",name);
    formdata.append("email",email);
    formdata.append("comments",comment);

    fetch(scriptURL, {
          method: 'POST',
          body: formdata,
          mode: 'no-cors'
          }).then(() => {    alert("✅ Your message has been received!\n\nThanks for taking the time to connect. We’ll get back to you soon — hopefully at the right email 😊");  })
            .catch(error => { console.error("Fetch error:", error);
                              alert("⚠️ Something went wrong. Please try again later.");});
     }  
}

function isValidEmail(email) {
  const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

