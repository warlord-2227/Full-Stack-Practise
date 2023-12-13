/*function sum(a,b){
     result = a + b;
	return result 
}
function displayResult(data){
	console.log("Result is " + data);

}
const ans  = sum(1,3);
displayResult(ans);*/

function sum(a,b,funcTocall){
	result = a + b;
	funcTocall(result);
	return result 

}

function displayResult(data){
	console.log("result is "+data);

}
const ans = sum(1,23,displayResult)



