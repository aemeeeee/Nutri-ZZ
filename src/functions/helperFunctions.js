

const formatDate = (date) => {
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = date.getFullYear();
  date = dd + '-' + mm + '-' + yyyy;
  return date;
}

// TODO: Make function that updates the firestore data
//    For Example, if added food in one, updates all the macros and nutrients and stuff to match
//    Updates firestore
//    Does 'update' to date

export {formatDate}