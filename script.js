let api = "https://www.breakingbadapi.com/api/characters/";

async function getData() {
  try {
    let response = await fetch(api);
    let data = await response.json();
    printData(data);
  } catch (e) {
    console.log("Error:", e.massege);
  }
}

function printData(data) {
  let header = document.querySelector("#header");
  let content = document.querySelector("#content");
  header.innerHTML += `
    <select class="form-control" style="margin-top: 50px;" onchange="getCharachter(this.value)">
    <option>Please select the actor</option>
    ${data.map((charachter) => `<option>${charachter.name}</option>`)}
    </select>
    `;
}

async function getCharachter(selection) {
  if (selection != "Please select the actor") {
    let response = await fetch(`${api}?name=${selection}`);
    let data = await response.json();
    content.innerHTML = `
    <h3
    style="
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-size: 30px;
      padding-top: 30px;
    "
  > The name of actor is :
  <p class="text-justify"
  style="color: rgb(108, 104, 104); font-size: 20px; padding-top: 20px;">${data[0].name}</p>
  </h3>
  <h3
  style="
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 30px;
    padding-top: 30px;
  "
> The nickname of actor is :
<p class="text-justify"
style="color: rgb(108, 104, 104); font-size: 20px; padding-top: 20px;">${data[0].nickname}</p>
</h3>
<h3
style="
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 30px;
  padding-top: 30px;
"
> The birthday of actor is :
<p class="text-justify"
style="color: rgb(108, 104, 104); font-size: 20px; padding-top: 20px;">${data[0].birthday}</p>
</h3>
<img src="${data[0].img}" width="350">
        `;
  }
}

getData();
