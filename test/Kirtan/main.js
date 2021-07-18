function Login(){
    //alert('test');

   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value;

    alert(username);
    alert(password);

    if (username =="kirtan" && password == "12345")
    {
      alert('success');
      window.location = "success.html";
      
    }
    else
    {
      alert('Fail');
      window.location = "Fail.html";
      
    }

  }
