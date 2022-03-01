// search
document.getElementById("search-btn").addEventListener("click", () => {
    const searchFeild = document.getElementById("search-box");
    getPhoneData(searchFeild.value);
})
// get phones data
const getPhoneData = input => {
    const iphone = "iphone";
    fetch(`https://openapi.programming-hero.com/api/phones?search=${input}`)
        .then(res => res.json())
        .then(data => displayPhones(data));
}
// display phones data
const displayPhones = phones => {
    const phonesContainer = document.getElementById("phone-display");
    phones.data.forEach(phone => {
        console.log(phone);
        const newPhoneContainer = document.createElement("div");
        newPhoneContainer.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="#" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;
        phonesContainer.appendChild(newPhoneContainer);
    });
};