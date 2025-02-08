function getFirstDayOfWeek() {
    const date = new Date();
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

  console.log(getFirstDayOfWeek())

  const firstDateOfMonth = (date = new Date()) =>
    new Date(date.getFullYear(), date.getMonth(), 1);
  
  ; // '2015-08-01'
  console.log(firstDateOfMonth(new Date()).getDay())