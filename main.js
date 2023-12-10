var webSiteName = document.getElementById("siteName");
var webSiteUrl = document.getElementById("siteUrl");

var allUrls = [];

if (localStorage.getItem("allUrls") != null) {
  allUrls = JSON.parse(localStorage.getItem("allUrls"));
  displayWebSite();
}

function submit() {
  // 3mlt object 3shan msh kol mara h3od 23ml 2 variables
  var webDetails = {
    name: webSiteName.value,
    url: webSiteUrl.value,
  };
  // bd5l el data bt3ty gwa el array
  allUrls.push(webDetails);
  // bwzd 3l el local storage bt3ty w kol mara bzwd 2le 3ayez 2wd 3leh
  localStorage.setItem("allUrls", JSON.stringify(allUrls));

  //   function 2le 3mltha 3shan tms7
  clear();
  console.log(allUrls);
  displayWebSite();
}

function clear() {
  (webSiteName.value = ""), (webSiteUrl.value = "");
}

function displayWebSite() {
  var cartona = "";
  //   3mlt for loop 3shan yd5ol 3la kol element gwa el array w tt3rd lw7dha
  for (let i = 0; i < allUrls.length; i++) {
    cartona +=
      `
  
    <div
    class=
    "container p-3 m-2 m-auto
    bg-body-tertiary
    d-flex w-75
    align-items-center"
    >
    <h2 class = "p-5">` +
      allUrls[i].name +
      `</h2>
    <a class="btn btn-primary p-3 m-3 href=" ${allUrls[i].url} " target="_blank">visit</a>
    <button class="btn btn-danger btndelete p-3 m-3" onclick="delte(${i})">Delete</button>
    </div>
    `;
  }
  document.getElementById("yourUrls").innerHTML = cartona;
}

function delte(index) {
  allUrls.splice(index, 1);
  displayWebSite();
  localStorage.setItem("allUrls", JSON.stringify(allUrls));
} 

/*

function validateName() {
  var validateName = /^\w{3,}(\s\w+)*$/gm;
  if (validateName.test(webSiteName)) {
    webSiteName.classList.add(is - valid);
    webSiteName.classList.remove(is - invalid);
  } else {
    webSiteName.classList.add(is - invalid);
    webSiteName.classList.remove(is - valid);
  }
}

webSiteName.addEventListener("input", validateName);

*/

function visit() {}
