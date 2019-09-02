function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Please fill out your first name");
      return false;
    }
    var x = document.forms["myForm"]["lname"].value;
    if (x == "") {
      alert("Please fill out your last name");
      return false;
    }
    var x = document.forms["myForm"]["business"].value;
    if (x == "x") {
      alert("Please select which Business you work for");
      return false;
    }
    var x = document.forms["myForm"]["suggestion"].value;
    if (x == "") {
      alert("Please add your suggestion");
      return false;
    }
  }