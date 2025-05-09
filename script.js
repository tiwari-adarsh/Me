const scriptURL = 'https://script.google.com/macros/s/AKfycby1KR6lzpox-qnR8Jw9-Eg7NUFt5CZXmMUL1lroabNdjMa_NqjOIkcTB4MChUb80oMl/exec';


fnSubmit = () => {
    var name = document.getElementById('Name').value;
    var email = document.getElementById('EmailId').value;
    var comment = document.getElementById('Comment').value;

    if(name != "" && email != "" && comment != "" ){
    const formdata = new FormData();
    formdata.append("name",name);
    formdata.append("email",email);
    formdata.append("comments",comment);

    fetch(scriptURL, {
          method: 'POST',
          body: formdata
          }).then(() => {alert("✅ Thank you! I have received your response.");})
          .catch(() => {alert("⚠️ Something went wrong. Please try again later.");});
     }  
}

