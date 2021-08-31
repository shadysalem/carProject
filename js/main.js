const search = document.getElementById("text");
const resList = document.getElementById("result-list");

//filters the json
//using async/await to deal with promises and wait until we fetch the data
const searchResults = async search =>{
    resList.innerHTML= "";
    const res = await fetch('../data/cars.json');
    //saves the data in a variable
    const cars = await res.json();
  
    // now we need to filter the data
let matchingCars = cars.filter(car=>{
    //stores the car that begins with 'search' hence the "^" and 'gi' in order to accept capital/small letter results as well
    const exp = new RegExp(`^${search}`,'gi');
    return car.Name.match(exp)  
    
});
//clears the array in case the user is not searching for anything
if(search.length==0){
    matchingCars= [];
}
//sends data to be printed on the screen
manipulateScreen(matchingCars);
};
function manipulateScreen(cars){
    if(cars.length>0){
        const resArr = cars.map(car=>{
          const newLi=document.createElement('li')
          newLi.innerHTML= `${car.Name}`;
          resList.appendChild(newLi);   
        })
    }    
}
//works everytime we press a key
search.addEventListener('input', ()=> searchResults(search.value));