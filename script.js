
var  res = fetch("https://api.openbrewerydb.org/v1/breweries");
res.then((data)=>data.json()).then((data1)=>{

  
async function foo(){
  try {
   var res = await fetch("https://api.openbrewerydb.org/v1/breweries");
   var result = await res.json();
   console.log(result);
  
  } catch (error) {
   console.log(error);
  }
 }
 
 foo();
 for (var i = 0; i < data1.length; i++) {
   var div = document.createElement("div");
   div.innerHTML=  `<div class="card" style="width: 18rem;">
    <div class="card-body">
  
      <h2 class="card-title">${data1[i].country}</h2>
      <h5 class="card-subtitle mb-2 text-muted">State:  ${data1[i].state}</h5>
      <h5 class="card-subtitle mb-2 text-muted">City:  ${data1[i].city}</h5>
      <h5 class="card-subtitle mb-2 text-muted">Phone:  ${data1[i].phone}</h5>
      <h5 class="card-subtitle mb-2 text-muted">Postale code:  ${data1[i].postal_code}</h5>
    
    </div>
  </div> `
    document.body.append(div);
 }
});