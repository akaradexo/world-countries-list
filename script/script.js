'use strict'
const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombi","Comoros","Congo (Brazzaville)","Congo","Costa Rica","Cote d","Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor (Timor Timur)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia, The","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, North","Korea, South","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];


//declare
const output = document.getElementById("output");
const wordSearch = document.getElementById("wordSearch");
const anySearch = document.getElementById("anySearch");
const filter = document.getElementById("filter");
const search = document.getElementById("search");

const ZtoA = document.getElementById("ZtoA");
const AtoZ = document.getElementById("AtoZ");

//to populate the data
let text = "";
countries.forEach(myFunction);

output.innerHTML = text;
 
function myFunction(item, index) {
  text += `<div class="defaultOutput" id="AtoZ"><h2>${item}</h2></div>` ; 

}

//function


const searchByWord  = function(e){
  const word = search.value;


}
const wordSearchName  = function(e){
  e.preventDefault();
console.log("sds")


}
const anySearchName  = function(e){
  e.preventDefault();

  
}
const filterName  = function(){
  let result = [...countries].reverse()
  let text = ""; 
  result.forEach(myFunction);
  output.innerHTML = text;
  function myFunction(item, index) {
  text += `<div class="output" id="ZtoA"><h2>${item}</h2></div>` ; 
}
}


// add event listeners

//1
wordSearch.addEventListener("click",wordSearchName );
anySearch.addEventListener("click",anySearchName );
filter.addEventListener("click",filterName);
search.addEventListener("input",searchByWord);





