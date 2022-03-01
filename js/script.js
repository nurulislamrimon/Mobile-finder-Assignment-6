// search
document.getElementById("search-btn").addEventListener("click", () => {
    const searchFeild = document.getElementById("search-box");
    getPhoneData(searchFeild.value);
})
// =================find phone and display section=======================
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
    phonesContainer.textContent = "";
    // no phone found debugger
    if (phones.status == false) {
        const notFound = document.createElement("div");
        notFound.innerHTML = `
        <h2 class="text-center mt-5 text-warning">No phone found !</h2>
        `
        phonesContainer.appendChild(notFound);
    }
    else {
        phones.data.forEach(phone => {
            const newPhoneContainer = document.createElement("div");
            // destructuring
            const { image, brand, phone_name, slug } = phone;
            newPhoneContainer.innerHTML = `
            <div class="card shadow" style ="width: 18rem" > 
                <img src="${phone.image}" height="250"class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone_name}</h5>
                        <h6 class="card-text">Brand: ${brand}</h6>
                        <button href="#" class="btn btn-light w-100 text-center" onclick="phoneDetails('${slug}')">More details</button>
                    </div>
                </div>`;
            phonesContainer.classList.add("phones-container");
            phonesContainer.appendChild(newPhoneContainer);
        });
    }
};
