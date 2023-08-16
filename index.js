// https://dog.ceo/api/breeds/list/all
// https://dog.ceo/api/breed/hound/images
async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createlist(data.message)
}
async function imagesrc(type) {
    const getback = await fetch("https://dog.ceo/api/breed/"+type+"/images/random")
    const rcvd_data = await getback.json()
    document.getElementById("dog_img").src = (rcvd_data.message)
}

function createlist(elements) {
        document.getElementById("breedSelect").innerHTML = Object.keys(elements).map(function(breed) {
            return '<option value="'+breed+'">'+ breed +'</option>'
        }).join('') 
        imagesrc(breed);
} 
    // Add event listener for the breed select dropdown
    breedSelect.addEventListener("change", function() {
        imagesrc(this.value);
    }); 


start();




