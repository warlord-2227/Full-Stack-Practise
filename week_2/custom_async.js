//callback
const fs = require("fs")
function wraperReadfile(cb)
{
	console.log("inside the wrapper");
	fs.readFile("a.txt","utf-8",function(err,data){
	console.log("inside async function");
	cb(data);})
}
function onDone(data)
{
console.log("callback");
 console.log(data);
}
wraperReadfile(onDone)
