
function logout() {
    // Invalidate the user's session or token on the server-side
    // ...
  
    // Remove user-related data from the browser
    localStorage.removeItem('data');
    localStorage.removeItem('details');
    // Redirect the user to the login page
    window.location.href = '/frontend/HTML/login.html';

    
  }
   reloadHandler = false;
  fetch('http://localhost:4000/api/school/details/get').then(res => res.json()).then(data=>{
      
      localStorage.setItem('details',JSON.stringify(data));
      Pandiya();
      
    });
  
   
    function Pandiya() {
if(localStorage.getItem('details') ) {
   data = JSON.parse(localStorage.getItem('details'));



 
data.map((i)=>{
  //console.log(i.name)
  const div1=document.querySelector(".div1");
  const span=document.createElement("a");
  span.innerText=i.name;
  const id = i._id;
    span.href =`/frontend/HTML/list.html?id=${id}`;
  span.addEventListener('click',function() {
    console.log("gh");
    fetch(`http://localhost:4000/api/school/search/${i._id}`,{
      method:"GET",
    }).then(res => res.json()).then( res => console.log(res));
  })
  const div=document.createElement("div");
  div.setAttribute("class","details");
 const icon = document.createElement("i");
  icon.setAttribute("class","glyphicon glyphicon-trash");
  icon.addEventListener('click', function() {
    // Code to be executed when the button is clicked
    fetch(`http://localhost:4000/api/school/delete/${i._id}`, {
    method:"DELETE",
  }).then(res => console.log(res));

  });
  //div.appendChild(span)
  div.appendChild(span)
  
  div.appendChild(icon)
  div1.appendChild(div)
  
//  <div>
//     <span>{i.name}</span>
//  </div>

//const del=document.querySelectorAll("#delete")
// del.forEach(element => {
//   //console.log(element.children[1]);
//   })
// });
})
}
    }


//location.reload(localStorage.getItem('details'));

// const row = tbody.insertRow();
// const nameCell = row.insertCell();
// nameCell.textContent = i.name;
// const ageCell = row.insertCell();
// ageCell.textContent = i.mobile;
// const emailCell = row.insertCell();
// emailCell.textContent = i.email;
// const genderCell=row.insertCell();
// genderCell.textContent=i.gender;