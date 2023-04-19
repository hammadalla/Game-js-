let landing1 = document.getElementById("landing1");

$(document).ready(function () {
  $(".landing").fadeOut(2000);
});

async function getgames(type) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "63abab8e8amshc44d7060505dc35p135d20jsnf03e2d3f49b1",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  gamelist = [];
  let api = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type}`,
    options
  );
  let res = await api.json();
  gamelist = res;
  display();
}
getgames("mmorpg");
function display() {
  temp = "";
  gamelist.forEach((el) => {
    temp += `<div recipeid=${el.id} data-bs-toggle="modal" data-bs-target="#exampleModal"  class="col-lg-3 col-sm-6 item wow fadeInRightBig">
    <div class="card" >
        <img class="card-img-top rounded-4 p-2 w-100" src="${el.thumbnail}">
        <div class="card-body d-flex justify-content-between">
            <h5 class="card-title">${el.title}</h5>
            <button type="button" class="btn btnn py-1  px-2">Free</button>
        </div>
        <p class="text-center prg">${el.short_description}</p>
        <div class="footer d-flex justify-content-between pt-3  px-3">
            <p class="back">${el.genre}</p>
            <p class="back">${el.platform}</p>
        </div>
    </div>
</div>`;
  });
  document.getElementById("myrow").innerHTML = temp;
  getitems();
}

let navlink = document.querySelectorAll(".nav-link");
for (i = 0; i < navlink.length; i++) {
  navlink[i].addEventListener("click", function (e) {
    let type = this.getAttribute("categ");
    getgames(type);
  });
}

let details = {};
async function getdetils(id) {
  // landing1.classList.remove("d-none")
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "63abab8e8amshc44d7060505dc35p135d20jsnf03e2d3f49b1",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  $("#landing1").css("display","block")
  let api = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
    options
  );
  let res = await api.json();
  details = res;
  console.log(details);
  $(".det1,.det2").addClass("animated")
  $("#landing1").fadeOut(2000);
  displaydetils(details);
}
function displaydetils() {
  document.getElementById("imagegame").setAttribute("src", details.thumbnail);
  document.getElementById("Title").innerHTML = details.title;
  document.getElementById("description").innerHTML = details.description;
  document.getElementById("Category").innerHTML = details.genre;
  document.getElementById("Platform").innerHTML = details.platform;
  document.getElementById("Status").innerHTML = details.status;
  $("#bttn").click(function(){
    location.href= details.game_url
  })
  
}

document.getElementById("closeEl").addEventListener("click", function () {
  $(".item").removeClass("wow");
  $(".item").removeClass("fadeInRightBig");
});
function getitems() {
  let items = document.querySelectorAll(".item");
  for (i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      let id = this.getAttribute("item");
      let recid = this.getAttribute("recipeid");
      getdetils(recid);
    });
  }
}

$(".nav-link").click(function () {
  $(this).addClass("active");
  $(".nav-link").not(this).removeClass("active");
});

new WOW().init();
