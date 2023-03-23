
// let questions = [
//   {
//     id: 1,
//     question: "What is the full form of RAM ?",
//     answer: "Random Access Memory",
//     options: [
//       "Random Access Memory",
//       "Randomely Access Memory",
//       "Run Aceapt Memory",
//       "None of these"
//     ]
//   },
//   {
//     id: 2,
//     question: "What is the full form of CPU?",
//     answer: "Central Processing Unit",
//     options: [
//       "Central Program Unit",
//       "Central Processing Unit",
//       "Central Preload Unit",
//       "None of these"
//     ]
//   },
//   {
//     id: 3,
//     question: "What is the full form of E-mail",
//     answer: "Electronic Mail",
//     options: [
//       "Electronic Mail",
//       "Electric Mail",
//       "Engine Mail",
//       "None of these"
//     ]
//   }
// ];

fetch('https://script.google.com/macros/s/AKfycbx0rjw4FT-aZ_frceLPUV8qJuhOhdvLgCCQcNMetBWJD2Odg90f8faXFwiv3MdfhjRI/exec').then(res => res.json()).then(res => {
  console.log(res)

  let dt = new Date(new Date().setTime(0));
  let ctime = dt.getTime();
  let seconds = Math.floor((ctime % (1000 * 60)) / 1000);
  let minutes = Math.floor((ctime % (1000 * 60 * 60)) / (1000 * 60));
  console.log(seconds, minutes);
  let time = 0;
  let mytime = setInterval(function () {
    time++;

    if (seconds < 59) {
      seconds++;
    } else {
      seconds = 0;
      minutes++;
    }
    let formatted_sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let formatted_min = minutes < 10 ? `0${minutes}` : `${minutes}`
    document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
  }, 1000);
  let question_count = 0;
  let points = 0;


  if (question_count == 0) {
    show(question_count)
  }

  const nextbtn = document.getElementById('next')
  nextbtn.addEventListener('click', () => {
    next()
  })
  function next() {

    // if the question is last then redirect to final page
    if (question_count == res.data.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);

    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    const ans = res.data[question_count].answer
    if (user_answer == ans) {
      points = points + 10
      console.log('correct')
      sessionStorage.setItem("points", points);
    }
    else {
      console.log('Incorrect')
    }
    console.log(points);

    question_count++;
    show(question_count);
  }



  function show(count) {
    let question = document.getElementById("questions");

    question.innerHTML = `
    <h2>Q${count + 1}. ${res.data[count].Question}</h2>
     <ul class="option_group" style="padding : 0;">
    <li class="option">${res.data[count].option1}</li>
    <li class="option">${res.data[count].option2}</li>
    <li class="option">${res.data[count].option3}</li>
    <li class="option">${res.data[count].option4}</li>
  </ul> 
    `;
    toggleActive();
  }

  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function () {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
})







