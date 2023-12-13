//create program that prints odd and even numbers from the arrays 
const ages = [20,21,22,23,25,24];
for (i=0;i<ages.length;i++){
if (ages[i]%2 == 0){
console.log(ages[i]);
}
}
const personArray = ["Setu","Vardhu","Divya"]
const gender = ["Male","Male","Female"]
for (let i = 0; i<personArray.length;i++){
	if (gender[i]=="Male"){
	console.log(personArray[i]);
	}
}
const allUser = [{"firstName":"Setu","gender":"Male"},{firstName:"Divya",gender:"Female"},{firstName:"Vardhu",gender:"Male"}]

for (let i =0;i<allUser.length;i++){
if (allUser[i]["gender"]=="Male"){
console.log(allUser[i]["firstName"]);
}}

function sum(a,b){
return a+b;}
const value = sum(1,23)
console.log(value);
