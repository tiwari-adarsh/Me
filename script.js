const scriptURL = 'https://script.google.com/macros/s/AKfycby1KR6lzpox-qnR8Jw9-Eg7NUFt5CZXmMUL1lroabNdjMa_NqjOIkcTB4MChUb80oMl/exec';

fnSubmit = () => {
    var name = document.getElementById('Name').value;
    var email = document.getElementById('EmailId').value;
    var comment = document.getElementById('Comment').value;

    const formdata = new FormData();
    formdata.append("name",name);
    formdata.append("email",email);
    formdata.append("comments",comment);

    fetch(scriptURL,{method:"POST",body:formdata})
    .then(result => alert("Thank You for Reaching Out "+ name + " ji !"))
    .catch(alert("Currently unable to send you massege,Plese try letter."), erroremail(email,error.message));
}

erroremail = (email,msg) => {
    MailApp.sendEmail("adarshtiwari1296@gmail.com","Profile- Error - "+ email, "ERROR -\n"+msg);
}