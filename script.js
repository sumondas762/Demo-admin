function spin() {
  const mainWheel = document.getElementById("main-wheel");
  const subWheel = document.getElementById("sub-wheel");

  // Add a random rotation between 2000 and 6000 degrees
  const subRandomSpin = Math.floor(Math.random() * 4000) + 2000;
  const mainRandomSpin = Math.floor(Math.random() * 4000) + 2000;

  mainWheel.style.transform = `rotate(${mainRandomSpin}deg)`;
  subWheel.style.transform = `rotate(${subRandomSpin}deg)`;
}

function showName() {
    let name = document.getElementById("nameInput").value;

    document.getElementById
}
