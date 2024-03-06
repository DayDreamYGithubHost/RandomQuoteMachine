refresh = document.querySelector("#refresh");
sentence = document.querySelector("#sentence");
author = document.querySelector("#author");

const colors = ["#FFD700", "#FF6347", "#00CED1", "#FF69B4", "#32CD32"];

function changecolor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}
refresh.addEventListener(`click`, changecolor);
//API

apiurl = `https://type.fit/api/quotes`;
let apidata;

fetch(apiurl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0]);
    refresh.addEventListener("click", function () {
      output(data);
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

function output(data) {
  let randomIndex = Math.floor(Math.random() * data.length);
  sentence.innerText = data[randomIndex].text;
  authortext = data[randomIndex].author.split(",")[0].trim();
  if (authortext === "type.fit") {
    author.innerText = "Anonymous";
  } else {
    author.innerText = authortext;
  }
}
