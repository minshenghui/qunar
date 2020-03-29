
let defaultCity;
try {
  localStorage.city ? defaultCity = localStorage.city : defaultCity = '长沙';
} catch (e) {
  console.log(e)
}

export default {
  city: defaultCity
}