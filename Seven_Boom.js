function sevenBoom(arr) {
	if(arr.includes(7)){
		return "Boom!";
	}
	var result="there is no 7 in the array";
	arr.forEach(element=>{
		if((''+element).length>1){
			var arr1=(''+element).split('').map(function(digit) {return digit});
			// console.log(arr1);
			if(arr1.includes('7')){
				result= "Boom!";
			}
		}
	})
	return result;
}

let arr=[1,2,3,4,222,666];
console.log(sevenBoom(arr))

