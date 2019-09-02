function validateForm() {
    var x = document.forms["suggestionForm"]["fname"].value;
    if (x == "") {
      alert("Please fill out your first name");
      return false;
    }
    var x = document.forms["suggestionForm"]["lname"].value;
    if (x == "") {
      alert("Please fill out your last name");
      return false;
    }
    var x = document.forms["suggestionForm"]["business"].value;
    if (x == "x") {
      alert("Please select which Business you work for");
      return false;
    }
    var x = document.forms["suggestionForm"]["suggestion"].value;
    if (x == "") {
      alert("Please add your suggestion");
      return false;
    }
  }