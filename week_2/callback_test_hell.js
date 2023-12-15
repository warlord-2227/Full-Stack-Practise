function myownTimeout(fn,duration)
{
	setTimeout(fn,duration)
}

myownTimeout(function()
	{
	console.log("hi there initial callback");
	myownTimeout(function(){console.log("Hi ther second callback inside first one")},2000)
},1000)



