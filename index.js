let modal = document.getElementById("myModal");
let btn = document.getElementById("openModalButton");
let postBtn = document.getElementsByClassName("close")[0];
let surname = document.getElementById("surname");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
let listItems = document.querySelectorAll("li");

listItems.forEach(function (item) {
  item.addEventListener("click", function () {
    listItems.forEach(function (li) {
      li.classList.remove("yellow");
    });
    item.classList.add("yellow");
  });
});

const postData = () => {
  fetch("https://api for post data", {        // своего апи у меня нет


    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      surname: surname.value,
      name: name.value,
      phone: phone.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
};

btn.onclick = function () {
  modal.style.display = "block";
};
postBtn.onclick = function () {
  postData();
  console.log("postBtn clicked");
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
