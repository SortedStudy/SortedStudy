// const appendcard  = document.getElementsByClassName('appendcard')
// console.log(appendcard)
// let url = "https://kontests.net/api/v1/all"
// fetch(url).then((res) => {return res.json()}).then((val)=>{
//   console.log(val)
//   ihtml=""
//   for(i in val) {
//     ihtml += `
//     <div class="card mx-2 my-2 py-4 shadow" style="width: 20rem;">
//           <div class="card-body">
//             <h5 class="card-title" id="firstC">${val[i].name}</h5>
//             <p class="card-text">
//             <p><b>Site: ${val[i].site}</b><span id="SiteName1"></span></p>
//             <p><b>Start At: ${val[i].start_time}</b><span id="Start1"></span></p>
//             <p><b>End At: ${val[i].end_time} </b><span id="End1"></span></p>
//             <p><b>Status:  ${val[i].status}</b><span id="Status1"></span></p>
//             </p>
//             <a href=" ${val[i].url}" id="url1" target="_blank" rel="noopener noreferrer" class="btn btn-warning">Visit
//               Now</a>
//           </div>
//         </div>
//       `
//       appendcard.inner=ihtml
//     }


// })
const cardContainer = document.getElementById('cardContainer')
let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests)
    let ihtml = ""
    for (i in contests) {
        console.log(contests[i])
        ihtml += `
    <div class="card mx-4 my-4 py-4 shadow" style="width: 20rem;height:20rem;">
    <a class="WholeCardLink" href="${contests[i].url}"  style="text-decoration:none; color:black;" target="_blank">
        <div class="card-body">
          <h5 class="card-title text-dark" id="firstC">${contests[i].name}</h5>
          <p class="card-text">
          <p><b>Site: ${contests[i].site}</b><span id="SiteName1"></span></p>
          <p><b>Start At: ${contests[i].start_time}</b><span id="Start1"></span></p>
          <p><b>End At: ${contests[i].end_time} </b><span id="End1"></span></p>
          <p><b>Status:  ${contests[i].status}</b><span id="Status1"></span></p>
       </p>
       <div class="card__arrow">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
           <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
       </svg>
    </div>
       </div>
       </a>
</div>
                `
    }
    setTimeout(()=>{
        cardContainer.innerHTML = ihtml
    },1000)
})
