function unlock(){
  let p = document.getElementById("pass").value;
  if(p === "NEELKAMAL"){
    window.location="home.html";
  } else {
    document.getElementById("msg").innerText =
    "Wrong password Ask your baby for the password 💕";
  }
}

function go(page){
  window.location.href = page;
}

function goBack(){
  window.history.back();
}
