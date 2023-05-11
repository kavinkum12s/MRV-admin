
const params = new URLSearchParams(window.location.search);
const value = params.get('id');
console.log(value);
var details;
fetch(`http://localhost:4000/api/school/search/${value}`,{
    method:"GET",
  }).then(res => res.json()).then(res => {
    details = res;
    console.log(details);
    console.log(details.name)
    const div1=document.querySelector(".div1");
    const div=document.createElement("div");
    div.setAttribute("class","details");
    const name = document.createElement("span");
    name.innerText = "Name  :   " + details.name;
    const fathername = document.createElement("span");
    fathername.innerText ="FatherName  :   " +  details.fathername;
    const mothername = document.createElement("span");
    mothername.innerText ="Mothername  :   " +  details.mothername; 
    const email = document.createElement("span");
    email.innerText = "Email :   " + details.email;
    const dob = document.createElement("span");
    dob.innerText = "Date of Brith  :   " + details.dob +"  :  "+details.datemonth +"  :  "+details.dob_year;
    const gender = document.createElement("span");
    gender.innerText = "gender  :   " + details.gender;
    const mobile = document.createElement("span");
    mobile.innerText = "mobile :   " + details.mobile;
    const bloodgroup = document.createElement("span");
    bloodgroup.innerText = "Blood Group :   " + details.bloodgroup; 
    const nationalid = document.createElement("span");
    nationalid.innerText = "AadharNumber :   " + details.nationalid;
    const permanentaddress = document.createElement("span");
    permanentaddress.innerText = "permanentaddress :   " + details.permanentaddress;
    const presentaddress = document.createElement("span");
    presentaddress.innerText = "presentAddress :   " + details.presentaddress;
    div.appendChild(name);
    div.appendChild(fathername);
    div.appendChild(mothername);
    div.appendChild(email);
    div.appendChild(dob);
    div.appendChild(gender);
    div.appendChild(mobile);
    div.appendChild(bloodgroup);
    div.appendChild(nationalid);
    div.appendChild(presentaddress);
    div.appendChild(permanentaddress);
    div1.appendChild(div);
    
  });