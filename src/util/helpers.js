module.exports = {
  tryParseJSON(querystring) {
    let o;
    try {
      o = JSON.parse(decodeURIComponent(querystring.split("?data=")[1]));
      if (o && typeof o === "object" && o !== null) {
        return o;
      }
    } catch (e) {
      return false;
    }
    return false;
  },

  numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  
  missingSection(sectionName) {
    const app = document.getElementById("app");
    const missingClass = "missing--";
    app.classList.toggle(missingClass + sectionName);
  }
};
