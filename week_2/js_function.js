a = [1,2,3,4,5]
function map(a,con){
	b = []
	for (let i =0;i<a.length;i++){b.push(con*a[i])}
	return b 
	// can we do it in place ? yes in place operations 
}
console.log(map(a,2));
console.log("in herent function");
console.log(a.map(function (i){return 2*i}));
function filter(a,cond)
{
	b = []
	for (let i=0;i<a.length;i++){
	if (a[i] %2 == 0){b.push(a[i])}
	}
	return b
}
console.log(filter(a,""));


