//selset Elemnts

let allspans = document.querySelectorAll(".button span");
let results = document.querySelector(".result > span");
let theinput = document.getElementById("the-input");
let inputval = theinput.value;
allspans.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkitem();
    }
    if (e.target.classList.contains("add-item")) {
      additem();
    }
    if (e.target.classList.contains("delete-item")) {
      deleteitem();
    }
    if (e.target.classList.contains("show-item")) {
      showitem();
    }
  });
});

function checkinput() {
  results.innerHTML = "please right a item";
}

function checkitem() {
  if (theinput.value !== "") {
    if (localStorage.getItem(theinput.value)) {
      results.innerHTML = `Found Local Storage Item Called <span>${theinput.value}</span>`;
    } else {
      results.innerHTML = `not Found Local Storage Item Called <span>${theinput.value}</span>`;
    }
  } else {
    checkinput();
  }
}

function additem() {
  if (theinput.value !== "") {
    localStorage.setItem(theinput.value, "this is a value");

    results.innerHTML = `Item add to local storge <span>${theinput.value}</span> `;

    theinput.value = "";
  } else {
    checkinput();
  }
}
function deleteitem() {
  if (theinput.value !== "") {
    if (localStorage.getItem(theinput.value)) {
      localStorage.removeItem(theinput.value);
      results.innerHTML = `the <span>${theinput.value} </span> have been delted`;
    } else {
      results.innerHTML = `no value rematch <span>${theinput.value}</span>`;
    }
  } else {
    checkinput();
  }
}
function showitem() {
  results.innerHTML = "";
  if (localStorage.length) {
    for ([key, value] of Object.entries(localStorage)) {
      results.innerHTML += `this is the key  <span>${value}</span>`;
    }
  }
}
// let myobj = {
//   the1: "first",
//   the2: "secend",
// };

// for (let [num, value] of Object.entries(myobj)) {
//   console.log(value);
// }
