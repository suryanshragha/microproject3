let fooddata = require('./food.json');
function allfooditems(fooditems){
    return(fooditems);
}
console.log(allfooditems(fooddata));
    let vegetablefooditems2=fooddata.filter(item=>item.category==='Vegetable');
console.log(vegetablefooditems2);
let fooditems=fooddata.filter(item=>item.category==='Fruit');
console.log(fooditems);
let proteinitems=fooddata.filter(item=>item.category==='Protein');
console.log(proteinitems);
let nutsitems=fooddata.filter(item=>item.category==='Nuts');
console.log(nutsitems);
let grainsitems=fooddata.filter(item=>item.category==='Grains');
console.log(grainsitems);
let dairyitems=fooddata.filter(item=>item.category==='Dairy');
console.log(dairyitems);
let calorieabove100items=fooddata.filter(item=>item.calorie>100);
console.log(calorieabove100items);
let caloriebelow100items=fooddata.filter(item=>item.calorie<100);
console.log(caloriebelow100items);
 // let highestproteincontenttolowest=fooddata.sort((a,b)=>b.proteins - a.proteins);
 // console.log(highestproteincontenttolowest);
//  let lowestproteincontenttohighest=fooddata.sort((a,b)=>a.proteins-b.proteins);
//  console.log(lowestproteincontenttohighest);
 function hightolowprotiens(fooditem){
    return console.log(fooditem.sort((a,b)=> b.protiens - a.protiens));
}
hightolowprotiens(fooddata)
function lowtohighcab(fooditem){
    return console.log(fooditem.sort((a,b)=> a.cab - b.cab));
}
lowtohighcab(fooddata)