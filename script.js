// Menu
document.querySelector(".menu").addEventListener("click", () => [
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  })  
]);
// End of menu

// Common section
document.querySelectorAll(".wrapper").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((item) => {
      item.classList.remove("change");
    });  
  });
});
// End of common section