import "./css/styles.css";

document.addEventListener("DOMContentLoaded", async () => {

    let index = document.getElementById("index") as HTMLDivElement;

    index.insertAdjacentHTML("afterbegin", `<h1>Hello, Secure Node App Skeleton!</h1>`);

    let response = await fetch('/api');
    let json = await response.json();
    console.log(json.msg);

});
