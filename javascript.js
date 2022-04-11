function isValidEmail() {
    //alert("Valid");
    em = $.trim($("input[name='email']").val());
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //const emailPattern = /^[a-z]$/;
    if (emailPattern.test(em)) {
        return true;
    }
    else {
       // Add your code here to handle the errror. 
       return false;  
    }
 }
 $(document).ready(function () {
    // Listen to submit event on the <form> itself!
    $('#new-account-form').submit(function (e) {
  
      e.preventDefault();
    })
});
function validateForm()
{
    if (isValidEmail()) {
        //alert("the email is valid");
    }
    else{
        //alert("the email is not valid");
        document.getElementById("output").innerHTML = "<br><br>The email is not valid";
        return false;
    };

    em = $.trim($("input[name='email']").val());
    pw1 = $.trim($("input[name='password1']").val());
    pw2 = $.trim($("input[name='password2']").val());
    
    msgHtml = "<br><br>" + em + "<br><br>";
    if (pw1 == pw2){
        msgHtml = msgHtml + "passwords match";

    }
    else{
        msgHtml = msgHtml + "passwords do not match";
    }
    document.getElementById("output").innerHTML = msgHtml;
  return false;
}