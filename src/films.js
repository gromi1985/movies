/**Funcion para redondear a dos decimales un numero */
function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

// Exercise 1: Get the array of all directors.
//Esta funcion devuelve un ==array (String)== con la lista de los directores
function getAllDirectors(myArray) {
  /**Estas dos lineas hacen lo mismo */
  let result = myArray.map(item => item.director );
  // let result = myArray.map(item => { return item.director });
  return result;
}

// Exercise 2: Get the films of a certain director
//Esta funcion devuelve un ==array== de objetos de las pelicculas del director indicado.
function getMoviesFromDirector(array, director) {
  let result = array.filter(item => item.director === director).map(item => item);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let sum = 0 ;
  let averageScore = 0;
  let result = array.filter(item => item.director === director).map(item => item.score);
  
  /**Valido si hay peliculas del director indicado */
  if(result.length > 0)
    averageScore = roundToTwo((result.reduce((sum, item) => sum + item))/result.length);
  return averageScore;
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let arrayCopy = [...array];
  let result = arrayCopy.sort((x, y) => x.title.localeCompare(y.title)).map(item => item.title);

  return [...result.slice(0,20)];
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arrayCopy = [...array];
  let result = arrayCopy.sort(function(x, y) {
    let aux = ((x.year).toString()).localeCompare((y.year).toString());
    if (aux == 0)
       return (((x.title).toString()).localeCompare((y.title).toString())) 
    else
    return aux;  
  });
  
  //Tambien puedo retornar result en vez de arrayCopy
  return arrayCopy;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let sum = 0;
  let averageScore = 0;
  let result = (array.filter(item => (item.genre).includes(category))).
    map(item => item.score).filter(item => item > 0);
  if(result.length > 0){
    result.forEach(item => sum += item);
    averageScore = roundToTwo(sum / result.length);
  }
  return averageScore;
}

function moviesAverageByCategory_1(array, category) {
  let sum = 0;
  let result = ((array.filter(item => (item.genre).includes(category))).
    map(item => item.score));
  let total = result.reduce(((sum, item) => sum + item),0);
  averageScore = roundToTwo(total / result.length);
  //console.log(averageScore);
  return averageScore;
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  //  arrayCopy = [...array];
  //arrayCopy = array.slice(0);
  let arrayCopy = JSON.parse(JSON.stringify(array));

  for(let i in arrayCopy)
  {
          let minutesH=0;
          let minutesM=0;

      let [horas,minutes] = (arrayCopy[i].duration + '').split(' ');

      if(horas !== undefined)
          minutesH = horas.replace('h','');
     
      if(minutes !== undefined)
          minutesM = minutes.replace('min','');
      
      let total = parseInt(minutesH)*60 + parseInt(minutesM);


      arrayCopy[i].duration = total;
  }

  return arrayCopy;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array) {
  //Ordeno el arreglo
  let resultTemp = array.sort((x, y) => x.score - y.score);
  //Obtengo el arreglo de los mejores films con el mismo score
  let resultFina = array.filter(item => item.score == resultTemp[resultTemp.length - 1].score);
  return resultFina;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
