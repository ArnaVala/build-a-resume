module.exports = {
  
  missingSection(sectionName) {
    const app = document.getElementById("app");
    const missingClass = "missing--";
    app.classList.toggle(missingClass + sectionName);
  }
};
