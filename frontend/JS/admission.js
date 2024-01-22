var form = document.getElementById("formsubmit");

form.addEventListener('submit',function(e){
  e.preventDefault();
  const  name = document.getElementById("student_name").value;
  document.getElementById("student_name").value="";
   const fathername = document.getElementById("father_name").value;
   document.getElementById("father_name").value="";
   const mothername = document.getElementById("mother_name").value;
   document.getElementById("mother_name").value="";
   const dob = document.getElementById("date_of_birth").value;
   document.getElementById("date_of_birth").value="";
  //  const datemonth = document.getElementById("date_month").value;
  //  const  dob_year= document.getElementById("dob_year").value;
   const mobile = document.getElementById("mobile").value;
   document.getElementById("mobile").value="";
   const male = document.getElementById("male").value;
   document.getElementById("male").value="";
   const female = document.getElementById("female").value;
   document.getElementById("female").value="";
   const bloodgroup = document.getElementById("blood_group").value;
   document.getElementById("blood_group").value="";
   const nationalid = document.getElementById("national_id").value;
   document.getElementById("national_id").value="";
   const email = document.getElementById("email").value;
   document.getElementById("email").value="";
   const presentaddress = document.getElementById("present_address").value;
   document.getElementById("present_address").value="";
   const permanentaddress = document.getElementById("permanent_address").value;
   document.getElementById("permanent_address").value="";
   let gender;
   if(male) {
    gender = male;
   }
   if(female) {
    gender=female;
   }
   console.log(gender);
   
   const newDate = {
    name:name,
    fathername:fathername,
    mothername:mothername,
    dob:dob,
    // datemonth :datemonth,
    //  dob_year :dob_year,
    mobile :mobile,
    gender :gender,
    bloodgroup :bloodgroup,
    nationalid :nationalid,
    email:email,
    presentaddress:presentaddress, 
    permanentaddress :permanentaddress
   }
   console.log(newDate);
   fetch("http://localhost:3000/school", {
    method: "POST",
    body: JSON.stringify({
      name:name,
      fathername:fathername,
      mothername:mothername,
      dob:dob,
      // datemonth :datemonth,
      //  dob_year :dob_year,
      mobile :mobile,
      gender :gender,
      bloodgroup :bloodgroup,
      nationalid :nationalid,
      email:email,
      presentaddress:presentaddress, 
      permanentaddress :permanentaddress
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  
});

// function submitForm() {
//   console.log(form);
//   alert("one");
//    const  name = document.getElementById("student_name").value;
//    const fathername = document.getElementById("father_name").value;
//    const mothername = document.getElementById("mother_name").value;
//    const dob = document.getElementById("date_of_birth").value;
//    const datemonth = document.getElementById("datemonth").value;
//    const  dob_year= document.getElementById("dob_year").value;
//    const mobile = document.getElementById("mobile").value;
//    const gender = document.getElementById("gender").value;
//    const bloodgroup = document.getElementById("blood_group").value;
//    const nationalid = document.getElementById("national_id").value;
//    const email = document.getElementById("email").value;
//    const presentaddress = document.getElementById("present_address").value;
//    const permanentaddress = document.getElementById("permanent_address").value;
//    console.log(name);
// }
// console.log(name);
