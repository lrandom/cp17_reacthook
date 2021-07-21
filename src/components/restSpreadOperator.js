//spred operator
const a = [1,2,3];
console.log(a[0]);

const [x,y,z] = a;
console.log(x);
console.log(y);
console.log(z);

const cat = {
  name:"Meo",
  age:18
}

const {name,age} = cat;


//rest operator 
let b = [1,2,3,4];
let c = [3,4,5,6];
let d = b.concat(c);
console.log(d);

let e = [...b,...c];
console.log(e);

const subCat = {
  name:"Meo"
}

const catMeo = {
  ...subCat,
  age:20
}