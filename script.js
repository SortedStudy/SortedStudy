
// fetch('https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050', options)

let url = 'https://script.google.com/macros/s/AKfycbxCkwGk8UBMAZo1Av1tpIm3cYNazTZHDqNQ4iVLcw-wcjnIgiCqm4HTywhetiJiow62rw/exec';
let res = fetch(url);
res.then((res) => {
  return res.json()
}).then((contests) => {
  console.log(contests);
  ihtml = ""
  for (let i = 0; i < contests.data.length ; i+=2) {

    ihtml += `
      <ul li="results ">
      <div class="row">

        <div class="cardspace column col-lg-6 col-md-12 my-2">

        <a href="${contests.data[i].YtUrl}" style="text-decoration:none;" target="_blank">

        <div class="card cards ">

            <div class="card-body left-align">



              <h5 class="card_title">${contests.data[i].Subject}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${contests.data[i].Chapter}</h6>

              <div class="card__arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                      <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                  </svg>
              </div>

            </div>

        </div>


        </a>




        </div>




        <div class="cardspace column col-lg-6 col-md-12 my-2">

        <a href="${contests.data[i+1].YtUrl}" style="text-decoration:none;" target="_blank">

        <div class="card cards ">

            <div class="card-body left-align">



              <h5 class="card_title">${contests.data[i+1].Subject}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${contests.data[i+1].Chapter}</h6>

              <div class="card__arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                      <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                  </svg>
              </div>

            </div>

        </div>


        </a>



      </div>
      </ul>



















        `
    cardContainer.innerHTML = ihtml;


  }
});

function search() {
  let filter = document.getElementById('searchInput').value.toUpperCase();
  let item = document.querySelectorAll('.cards');
  console.log(item)
  let l = document.getElementsByTagName('h6');
  for (var i = 0; i <= l.length; i++) {
    let a = item[i].getElementsByTagName('h6')[0];
    let value = a.innerHTML || a.innerText || a.textContent;
    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}



