const helpers = {
  dateToAge: function(date){
    if (date === "Unknown" || date.isNaN)
      return date;
    
    var ageDifMs = Date.now() - new Date(date.replace(/-/g, "/"));
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

export default helpers;

