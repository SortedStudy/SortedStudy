// fetch('https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050', options)
let url = 'https://script.google.com/macros/s/AKfycbxCkwGk8UBMAZo1Av1tpIm3cYNazTZHDqNQ4iVLcw-wcjnIgiCqm4HTywhetiJiow62rw/exec';
let res = fetch(url);
res.then((res) => {
  return res.json()
}).then((contests) => {
  console.log(contests);
  ihtml = ""
  for (let i = 0; i < contests.data.length; i++) {

    ihtml += `
        <ul li="results ">
      <div class="card cards" style="max-width: 100%;">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-dark">${contests.data[i].Chapter}</h5>
              <a href="${contests.data[i].YtUrl
}" id="yturl" target="_blank" rel="noopener noreferrer" class="btn btn-warning">Visit
                Now</a>
            </div>
          </div>
        </div>
      </ul>   
        `
    cardContainer.innerHTML = ihtml;
  }
});

function search() {
  let filter = document.getElementById('searchInput').value.toUpperCase();
  let item = document.querySelectorAll('.cards');
  let l = document.getElementsByTagName('h5');
  for (var i = 0; i <= l.length; i++) {
    let a = item[i].getElementsByTagName('h5')[0];
    let value = a.innerHTML || a.innerText || a.textContent;
    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    }
    else {
      item[i].style.display = "none";
    }
  }
}










