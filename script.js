const scriptURL = 'https://script.google.com/macros/s/AKfycby1KR6lzpox-qnR8Jw9-Eg7NUFt5CZXmMUL1lroabNdjMa_NqjOIkcTB4MChUb80oMl/exec';


fnSubmit = () => {
    var name = document.getElementById('Name').value;
    var email = document.getElementById('EmailId').value;
    var comment = document.getElementById('Comment').value;

   
    
    if(name != "" && email != "" && comment != "" ){
         if (!isValidEmail(email)) {     
             alert("❌ Please enter a valid email address.");
              return;
         }

    document.querySelector("#submitBtn").disabled = true;
    document.querySelector("#submitBtn").value = "Sending...";
        
    const formdata = new FormData();
    formdata.append("name",name);
    formdata.append("email",email);
    formdata.append("comments",comment);

    sendFormData(formdata)
    .then(() => { showSuccessModal(); })
    .catch(error => {    console.error("Form submission error:", error);   
                         alert("⚠️ Something went wrong. Please try again later.");  
                         closeModal(); });      
    }  
}


sendFormData = (formdata) =>{
    return new Promise((resolve, reject) => {
   fetch('https://script.google.com/macros/s/AKfycby1KR6lzpox-qnR8Jw9-Eg7NUFt5CZXmMUL1lroabNdjMa_NqjOIkcTB4MChUb80oMl/exec', {
      method: 'POST',
      body: formdata,
      mode: 'no-cors'
    })
    .then(() => resolve())
    .catch(error => reject(error));
  });
}


function isValidEmail(email) {
  const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return strictEmailRegex.test(email);
}

function showSuccessModal() {
  document.getElementById('successModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('successModal').style.display = 'none';
  location.reload();
}


