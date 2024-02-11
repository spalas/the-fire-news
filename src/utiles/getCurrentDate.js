 export function getCurrentDate() {
   
    const currentDate = new Date();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
  
    
    var day = days[currentDate.getDay()];
    var month = months[currentDate.getMonth()];
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();
  
   
    return ` ${day} ,${month}, ${date}, ${year}`
    
  }
  
 
  
  