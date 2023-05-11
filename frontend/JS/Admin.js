var form = document.getElementById("formsubmit");
  form.addEventListener('submit',function(e){
    //console.log("xcvbn");
  e.preventDefault();
  const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;
 fetch("http://localhost:4000/school/get").then(response => response.json())
 .then(data => {
  // const a= JSON.stringify(data);
  console.log('---',data);
   // Store data in local storage
   console.log(data[0].email);
   if(data[0].email == email) {
    if(data[0].password ==password) {
      localStorage.setItem('data', JSON.stringify(data));
      console.log('sucess');
      setTimeout(function() {
        location.reload();
      }, 1000);
    }
   }
 });
})

if(localStorage.getItem('data')) {
  window.location.href = '/frontend/HTML/dashboard.html'; 
}



