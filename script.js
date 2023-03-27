const apiUrl = 'https://script.google.com/macros/s/AKfycbxCkwGk8UBMAZo1Av1tpIm3cYNazTZHDqNQ4iVLcw-wcjnIgiCqm4HTywhetiJiow62rw/exec';
const searchInput = document.getElementById('searchInput');
const searchInput2 = document.getElementById('searchInput2');
const cardcontainer = document.getElementById('cardcontainer');

let data = [];
console.log(typeof data)

// Fetch the JSON data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData
    console.log(jsonData)
    cardcontainer.classList.add('grid')
    displayResults(data);
    // Function to handle search input
    function handleSearchInput() {
      const query = searchInput.value.toLowerCase();
      const results = data.data.filter(result => {
        const title = result.Chapter.toLowerCase();
        return title.includes(query)
      });
       displayResults2(results);
      
    }
    searchInput.addEventListener('input', handleSearchInput);

    function handleSearchInput2() {
      const query = searchInput2.value.toLowerCase();
      const results = data.data.filter(result => {
        const title = result.Subject.toLowerCase();
        return title.includes(query)
      });
      console.log(results);
      displayResults2(results);
      
    }
    searchInput2.addEventListener('input', handleSearchInput2);
  })
  .catch(error => console.error(error));

// Function to display search results
function displayResults(results) {
  // Clear the previous search results
  cardcontainer.innerHTML = '';

  // Display the search results
  results.data.forEach(result => {
    const card = document.createElement('div');
    const a = document.createElement('a');
    card.classList.add('card');
    card.classList.add('cards');
    card.innerHTML = `
      <div class="card-body left-align">

              <h5 class="card_title">${result.Subject}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${result.Chapter}</h6>

              <div class="card__arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                      <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                  </svg>
              </div>

            </div>
    
    `;
    cardcontainer.classList.add('grid')
    cardcontainer.appendChild(a);
    a.style.textDecoration='none'
    a.setAttribute('target','_black')
    a.href=`${result.YtUrl}`
    a.appendChild(card);
  });
}

function displayResults2(results) {
  // Clear the previous search results
  cardcontainer.innerHTML = '';

  // Display the search results
  if(results.length>0){
  results.forEach(result => {
    const card = document.createElement('div');
    const a = document.createElement('a');
    card.classList.add('card');
    card.classList.add('cards');
    card.innerHTML = `
      <div class="card-body left-align">

              <h5 class="card_title">${result.Subject}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${result.Chapter}</h6>

              <div class="card__arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                      <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                  </svg>
              </div>

            </div>
    
    `;
    cardcontainer.classList.add('grid')
    cardcontainer.appendChild(a);
    a.style.textDecoration='none'
    a.setAttribute('id','Link')
    a.setAttribute('target','_black')
    a.href=`${result.YtUrl}`
    a.appendChild(card);
  });
}else{
  const notFound = document.createElement('p');
    notFound.classList.add('not-found');
    notFound.textContent = 'No results found.';
    cardcontainer.classList.remove('grid')
    cardcontainer.appendChild(notFound);
}
}


//*****************************FILTER***********************//
let BtnInput = document.getElementById('Maths-I')
let filterbtn = document.getElementById('filter-btn')
let crossbtn = document.getElementById('cross-btn')
let BtnInput1 = document.getElementsByClassName('btn-filter')
for(let i=0;i<BtnInput1.length;i++){
BtnInput1[i].addEventListener('click' , (e)=>{
  console.log(e.target.id)
    const query = e.target.id.toLowerCase();
    const results = data.data.filter(result => {
      const title = result.ImgUrl.toLowerCase();
      return title.includes(query)
    });
    cardcontainer.classList.remove('blur')
    document.body.style.overflow='scroll'
     displayResults2(results);
})
}
filterbtn.addEventListener('click',()=>{
  cardcontainer.classList.toggle('blur')
  if(cardcontainer.classList.contains('blur')){
    document.body.style.overflow='hidden'
  }
  else{
    document.body.style.overflow='scroll'
  }
 
})

crossbtn.addEventListener('click',()=>{
  cardcontainer.classList.remove('blur')
  document.body.style.overflow='scroll'
})

