// question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  }
};

cat.complain();

// question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// question 3

heading.style.fontSize = "2em";

// question 4

heading.classList.add("subheading");

// question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

// question 7

function catsNames(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

catsNames(cats);

// question 8

function createCats(cats) {
  let html = "";
  for (let i = 0; i < cats.length; i++) {
    let ageProperty = "Age unknown";

    if (cats[i].age) {
      ageProperty = cats[i].age;
    }

    html += `<div>
    <h5>${cats[i].name}</h5>
    <p>${ageProperty}</p>
    </div>
    `;
  }

  return html;
}

const catsHtml = createCats(cats);
const catsContainer = document.querySelector(".cat-container");
catsContainer.innerHTML = catsHtml;
