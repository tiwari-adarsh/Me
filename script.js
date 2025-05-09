const scriptURL = 'https://script.google.com/macros/s/AKfycby1KR6lzpox-qnR8Jw9-Eg7NUFt5CZXmMUL1lroabNdjMa_NqjOIkcTB4MChUb80oMl/exec';


fnSubmit = () => {
    var name = document.getElementById('Name').value;
    var email = document.getElementById('EmailId').value;
    var comment = document.getElementById('Comment').value;

    const formdata = new FormData();
    formdata.append("name",name);
    formdata.append("email",email);
    formdata.append("comments",comment);

    fetch(scriptURL,{method:"POST",body:formdata}).then(async (response) => {
  if (!response.ok) {
    throw new Error("HTTP status " + response.status);
  }
  const result = await response.text();
  alert("Success: " + result);
})
.catch(error => {
  alert("Error: " + error.message);
  console.error("Detailed error:", error);
});
       
}

 //.then(async (response) => { if (response.ok) {alert("Thank You for Reaching Out "+ name + " ji !");
//                                                      const result = await response.text();
//                                                     console.log(result);
//                                                     }
//                                  })
//        .catch(error => { alert("currently unable to send your message please try later.");
//                        console.error("Detailed error:", error);});
