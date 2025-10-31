// Selecting the Element
const allcontact = document.querySelector(".contacts-list");
const personDetail = document.querySelector(".persondetail-list");
const callDisplay = document.querySelector(".persondetail-list");

//adding the function
async function getAllcontact() {
  const res = await fetch("https://68fb0edd94ec960660246f41.mockapi.io/details");
  const data = await res.json();
  allcontact.innerHTML = "";

  data.forEach((contact) => {
    const div = document.createElement("div");
    div.innerHTML = `
     <div style="display: flex;justify-content: space-between; align-items: center;padding: 10px; cursor: pointer; margin-block:2px; border-block:.5px solid gray">
           <div style="display: flex; align-items: center; column-gap: 2%;">
             <img src=${contact.image} alt="profile image" width="50px" height="50px" style="border-radius: 50%;object-fit: cover;">
             <div style="display: flex; flex-direction: column;align-items: start; margin-inline:10px;">
               <b style="font-size: 16px; font-weight: bolder;">${contact.username}</b>
               <p style="font-size: 15px; color: gray;">${contact.contactno}</p>
             </div>
           </div>
           <button onclick="deleteContact('${contact.id}')" style="background-color: red;color: white;font-weight: bold; border: none;padding: 5px; border-radius: 5px;cursor: pointer;">Delete</button>
         </div>
    `;
    // 👇 when clicked, show full details
    div.addEventListener("click", () => showingDetail(contact));
    allcontact.appendChild(div);
  });
}
function showingDetail(contact) {
    // personDetail.style.backgroundcolor ="while";
    // personDetail.style.border ="1px solid while"
  personDetail.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `
    <div style = "margin-top:20px;">
           <div style="display: flex;justify-content: center;">
               <img src=${contact.image} alt="profile image" width="90px" height="90px" style="border-radius: 50%;">
           </div>
           <b style ="display:flex;justify-content:center;">${contact.username}</b>
           <div>
               <div style="display: flex;align-items: center;margin-block:10px;">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYT3exZabjNNYv5MxMC3keJeyNFeXrLpERLQ&s" alt="mail" width="50px" height="50px" style="border-radius: 50%;">
                   <div style="display: flex;flex-direction: column;">
                       <b style="font-size: 15px;">${contact.email}</b>
                       <span style="font-size: 14px; color: gray;">Email</span>
                   </div>
               </div>
               <div style="display: flex; align-items: center; column-gap: 10px;margin-left:12px; margin-block:10px;">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fFuJkXbXqxLc02fGfb3ShZvFNT09YFGmiw&s" alt="call" width="25px" height="25px" style="border-radius: 50%;">
                   <div style="display: flex;flex-direction: column;">
                       <b style="font-size: 15px;">${contact.contactno}</b>
                       <span style="font-size: 14px; color: gray;">Mobile</span>
                   </div>
               </div>
               <div style="display: flex; align-items: center; column-gap: 10px;margin-left:12px;margin-block:10px;">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fFuJkXbXqxLc02fGfb3ShZvFNT09YFGmiw&s" alt="call" width="25px" height="25px" style="border-radius: 50%;">
                   <div style="display: flex;flex-direction: column;">
                       <b style="font-size: 15px;">${contact.contactno}</b>
                       <span style="font-size: 14px; color: gray;">Mobile2</span>
                   </div>
               </div>
               <div style="display: flex;justify-content: center; margin-top:50px;">
                   <button id="call-btn">call</button>
               </div>
           </div>
       </div>
  `;

  personDetail.appendChild(div);

  // 👇 Attach event listener to the call button
  const callBtn = div.querySelector("#call-btn");
  callBtn.addEventListener("click", () => calling(contact));
}
function calling(contact) {
  callDisplay.innerHTML = `
    <div style="text-align:center; padding:30px;">
      <img src="${contact.image}" width="100" height="100" style="border-radius:50%;">
      <h3>Calling ${contact.username}...</h3>
      <p>${contact.contactno}</p>
      <button id="end-btn" style="background-color:red;color:white;border:none;padding:10px 20px;border-radius:20px;cursor:pointer;">End Call</button>
    </div>
  `;

  const endBtn = callDisplay.querySelector("#end-btn");
  endBtn.addEventListener("click", () => {
    callDisplay.innerHTML = `<p style="text-align:center;">📞 Call ended with ${contact.username}</p>`;
  });
}
getAllcontact()