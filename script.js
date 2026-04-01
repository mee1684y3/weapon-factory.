const weapon = document.getElementById("weapon");
const colorPicker = document.getElementById("colorPicker");
const sizeSlider = document.getElementById("sizeSlider");

const scope = document.getElementById("scope");
const barrel = document.getElementById("barrel");

const toggleScope = document.getElementById("toggleScope");
const toggleBarrel = document.getElementById("toggleBarrel");

// Kleur veranderen
colorPicker.addEventListener("input", () => {
  weapon.style.background = colorPicker.value;
});

// Grootte veranderen
sizeSlider.addEventListener("input", () => {
  weapon.style.width = sizeSlider.value + "px";
});

// Attachments aan/uit
toggleScope.addEventListener("change", () => {
  scope.style.display = toggleScope.checked ? "block" : "none";
});

toggleBarrel.addEventListener("change", () => {
  barrel.style.display = toggleBarrel.checked ? "block" : "none";
});
