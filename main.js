let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    engine(username, 0, "Name cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
  });

  /*
  let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
    } 
    
    else {
    }
  }

  let engine = (id, serial, message) => {

    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
    } 
    
    else {
      errorMsg[serial].innerHTML = "";
    }
  }
  */

  // I commented this out above because I was at first making the same function 3 times without realizing it.
  // I wanted to keep this in the code so I can come back to it later.
  // Below is the right function.

  let engine = (id, serial, message) => {

    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
      
      // icons
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    } 
    
    else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
      
      // icons
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
    }
  }
  