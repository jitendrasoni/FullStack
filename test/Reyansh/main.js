function Login(){
    //alert('test');

   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value;

    alert(username);
    alert(password);

    if (username =="radhey" && password == "12345")
    {
      alert('Success');
      window.location.href = "Success.html";
    }
    else
    {
      alert('Failure');
      window.location.href = "UnSuccessfull.html";
    }

  }