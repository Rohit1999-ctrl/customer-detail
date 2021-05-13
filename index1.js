var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";/*nothing will be shown on display*/
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex-1].style.display = "inline";/*something will be displayed*/
  setTimeout(carousel, 2000);
}

button.onclick = function() {
  buy.style.display = "block";
}



function checkphone(){
    document.getElementById("mandatory1").style.visibility = "hidden";
    var num = document.getElementById("number").value;
    if (num.length>10){
    document.getElementById("checknum").style.visibility = "visible";
    }
    else{
      document.getElementById("checknum").style.visibility = "hidden";
    }
    }


  function checkname(){
    document.getElementById("mandatory").style.visibility = "hidden";
    var name = document.getElementById("name").value;
    var i;
    for (i=0; i<=name.length;i++){
      if ((name[i].charCodeAt(0)>=65 && name[i].charCodeAt(0)<=90) || (name[i].charCodeAt(0)>=97 && name[i].charCodeAt(0)<=122)){
        document.getElementById("checkname").style.visibility = "hidden";
      }
      else{
        document.getElementById("checkname").style.visibility = "visible";
      }
    }
  }


  function IsValidEmail(email) {

        if (email.length <= 2) {
            return false;
        }

        if (email.indexOf("@") == -1) {
            return false;
        }

        var parts = email.split("@");
        var dot = parts[1].indexOf(".");
        var len = parts[1].length;
        var dotSplits = parts[1].split(".");
        var dotCount = dotSplits.length - 1;



        if (dot == -1 || dot < 2 || dotCount > 2) {
            return false;
        }

        //Check whether Dot is not the last character and dots are not repeated.
        for (var i = 0; i < dotSplits.length; i++) {
            if (dotSplits[i].length == 0) {
                return false;
            }
        }

        return true;
    };

    function checkmail() {
       document.getElementById("mandatory2").style.visibility = "hidden";
       var email = document.getElementById("email").value;
       if (!IsValidEmail(email)) {
            document.getElementById("checkemail").style.visibility = "visible";
       }else{
         document.getElementById("checkemail").style.visibility = "hidden";
       }
   }
