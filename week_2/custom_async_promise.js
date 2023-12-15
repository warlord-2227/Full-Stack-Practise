//promise
const fs = require("fs")
function wraperReadfile()
{
	console.log("inside wrapper");
	var a = new Promise(function(resolve){
	fs.readFile("a.txt","utf-8",function(err,data){
	console.log("promise to solve");
	resolve(data);})
	})
	return a
}
function onDone(data)
{
console.log("call back");
console.log(data);
}
wraperReadfile().then(onDone)
