// This is to run the example through objectSearch 
var keyArray = [];
$("#submit").on('click', function(){
	var a = { b: "apple", c: { d: "banana", e: ["grape", "APPLE"] }};
	objectSearch(a, /apple/gi);
	$("#results").html("Object: "+JSON.stringify(a)+"<br>Regex is: /apple/gi<br>The path results of regex on object: "+JSON.stringify(keyArray));
	return false;
});

function objectSearch(object, regex) {
	//To test fxn in console, you need to uncomment out var keyArray = []
	// var keyArray = [];
	window.onerror = function(){
   return true;
	}
	JSON.flatten = function(data) {
    var result = {};
    function recurse(cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
          for(var i=0, l=cur.length; i<l; i++) {
            try {
            	if (cur[i]===cur) {
                	continue;
              }
              recurse(cur[i], prop + "[" + i + "]");
            } 
            catch(e) {
              console.log("Error: "+e);
              continue;
            }
            if (l == 0)
                result[prop] = [];
          }
        } else {
            var isEmpty = true;
            for (var p in cur) {
              isEmpty = false;
              try {
                if (cur[p]===cur) {
                	continue;
                }
                recurse(cur[p], prop ? prop+'.'+p : p);
              }
              catch (e) {
              	console.log("Error: "+e);
              	continue;
              }
            }
            if (isEmpty && prop)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
	}
	var flattenedObject = JSON.flatten(object);
	var stringObject = JSON.stringify(flattenedObject);
	var flattenedRegex = stringObject.match(regex);
	var stringRegex = JSON.stringify(flattenedRegex);
	var stringRegexSubstring = stringRegex.substring(1, stringRegex.length-1);
	var stringRegexArray = stringRegexSubstring.split(",");
	for (i=0;i<stringRegexArray.length;i++) {
		var leng = stringRegexArray[i].length-1
		var stringRegexArrayKey = stringRegexArray[i].substring(1,leng);
		var key = Object.keys(flattenedObject).filter(function(key) {return flattenedObject[key] === stringRegexArrayKey})[0];
		keyArray.push(key);
	}
	return keyArray;	
}








// Process to get to above code

// First step get example to output properly

// First try did not work - learning about regex and what it outputs
// $("#submit").on('click', function(){
// 	var sampleObject = { b: "apple", c: "APPLE"};
// 	var regexObject = /apple/gi.exec(JSON.stringify(sampleObject));
// 	$("#results").html("\nOutput of regex working on object: "+regexObject+ " regexObject[0]: "+regexObject[0]+" regexObject.index: "+regexObject.index);
// 	return false;
	// var objectInput = $("#var1").val();
	// var regexInput = $("#var2").val();
	// console.log("Object: "+objectInput+"Regex: "+regexInput);
	// var sampleObject = { b: "apple", c: { d: "banana", e: ["grape", "APPLE"] }};

	// var regexArray = regexObject.split(',');
	// var keyArray = [];
	// for (i=0;i<regexArray.length;i++) {
	// 	var key = Object.keys(sampleObject).filter(function(key) {return sampleObject[key] === regexArray[i]})[0];
	// 	console.log("i: "+i+" key: "+key);
	// 	keyArray.push(key);
	// 	console.log("keyArray: "+keyArray);
	// }
// Next try was a converter function to get a 'flat' object
// ConverterFxn = function(o, s) {
// 	console.log("s before replace: "+s);
//     s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
//     console.log("s with first replace: "+s);
//     s = s.replace(/^\./, '');           // strip a leading dot
//     console.log("s with second replace: "+s);
//     var a = s.split('.');
//     console.log("s.split('.'): "+a);
//     for (var i = 0, n = a.length; i < n; ++i) {
//         var k = a[i];
//         console.log("i: "+i+"a[i]: "+k);
//         if (k in o) {
//         	console.log("o before o[k]: "+JSON.stringify(o));
//             o = o[k];
//           console.log("o after set = to o[k]: "+JSON.stringify(o));
//           // var keyFind = GetKeysFxn(o,k);
//           var key = Object.keys(o).filter(function(key) {return o[key] === k})[0];
//           console.log("find key: "+key);
//         } else {
//             return;
//         }
//     }
//     // o += " " + s;
//     return o;
// };
// GetKeysFxn = function(object,value) {
//   return Object.keys(object).find(key => object[key] === value);
// };
// test with submit button for output
// $("#submit").on('click', function(){
// 	var outputConvert = ConverterFxn(someObject, 'part3[1].name');
// 	// ConverterFxn(someObj, 'part3[0].name');
// 	$("#results").html("ObjectbyString: "+outputConvert+"\n someObj: "+JSON.stringify(someObject));
// 	return false;
// });
/* Testing exec regex - not desired output - need match
var re = /quick\s(brown).+?(jumps)/ig;
var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
*/
// After learning from above experiments - try to get sample output
// $("#submit").on('click', function(){
	// attempt to use inputs to test out fxn
	// var objectInput = $("#var1").val();
	// var regexInput = $("#var2").val();
	// objectInput = (new Function("return [" + objectInput+ "];")());
	// objectInput = "'"+objectInput+"'";
	// objectInput = JSON.stringify(objectInput);
	// console.log("object Input: "+objectInput+" regexInput: "+regexInput);
	
	// var objectInputObject = JSON.parse(objectInput);
	// console.log("objectInputObject: "+objectInputObject+" typeof: "+typeof objectInputObject);
	// objectInput = JSON.parse(objectInput);
	// console.log("objectInput: "+objectInput+"typeof objectInput: "+typeof objectInput);
	/* Input from form is a string despite use of JSON.parse
	The problem is that keys not enclosed by quotes are not autoconverted by JSON.parse command, but if keys are enclosed by quotes then json parse works and will convert to object which is required or process fails
	The example function has keys not enclosed by quotes
	Did a test with adding quotes to keys and it works but unsure if the
	output from window.utag_data will work, so will hard code inputs*/
	// var sampleObject = { b: "apple", c: { d: "banana", e: ["grape", "APPLE"] }};
	// var reggie = /apple/gi;
	// console.log("reggie: "+reggie);
	// console.log('typeof sampleObject: '+typeof sampleObject);
	// var strObj = JSON.stringify(sampleObject);
	// console.log('strObj: '+strObj);
	// console.log('strObj.match(/apple/gi)'+strObj.match(reggie));
	// console.log('typeof strObj.match(/apple/gi): '+typeof strObj.match(/apple/gi));
	// var hat = JSON.stringify(strObj.match(reggie));
	// console.log("typeof hat: "+typeof hat);
	// // despite looking like an array, hat is a string
	// console.log("hat: "+hat);
	// // need to remove brackets to use split to generate proper array
	// console.log("hat.substring(1, hat.length-1): "+hat.substring(1, hat.length-1));
	// var hatSubstring = hat.substring(1, hat.length-1);
	// var hatArray = hatSubstring.split(",");
	// console.log("hatArray: "+hatArray);
	// console.log("hatArray[0]: "+hatArray[0]);
/* Once regex has gotten the proper values, the object needs to be flattened
This is required b/c it is not possible to get keys from unflattened objects without great difficulty*/

// flatten object example 1 (returned good result but array in dot notation)
// 	JSON.flatten = function(data) {
//     var result = {};
//     function recurse (cur, prop) {
//         if (Object(cur) !== cur) {
//             result[prop] = cur;
//         } else if (Array.isArray(cur)) {
//              for(var i=0, l=cur.length; i<l; i++)
//                  recurse(cur[i], prop ? prop+"."+i : ""+i);
//             if (l == 0)
//                 result[prop] = [];
//         } else {
//             var isEmpty = true;
//             for (var p in cur) {
//                 isEmpty = false;
//                 recurse(cur[p], prop ? prop+"."+p : p);
//             }
//             if (isEmpty)
//                 result[prop] = {};
//         }
//     }
//     recurse(data, "");
//     return result;
// }

// flatten object version 2
// works and outputs desired result in proper format
// needed recursive fxn to iterate through nested objects and arrays
// if statement checks if key contains only a string as a value and then adds this key:value pair to result object(the flattened object)
// the else if statement will check to see if key contains an array as a value and and will iterate through array and using recursion will properly format as such and then will proceed to the if statement and if the contents of the array are strings and will add to result object
// the else statement does the heavy lifting and iterates through the object and using recursion will flatten the object - adds a . for nested objects and with recursion will call up the if (value=string) or else if (value=array) until complete
// JSON.flatten = function(data) {
//     var result = {};
//     function recurse (cur, prop) {
//         if (Object(cur) !== cur) {
//             result[prop] = cur;
//             console.log("if cur: "+cur)
//         } else if (Array.isArray(cur)) {
//              for(var i=0, l=cur.length; i<l; i++)
//                  recurse(cur[i], prop + "[" + i + "]");

//             if (l == 0)
//                 result[prop] = [];
//         } else {
//             var isEmpty = true;
//             for (var p in cur) {
//                 isEmpty = false;
//                 console.log("p: "+p+" cur[p]: "+cur[p]+" prop: "+prop);
//                 recurse(cur[p], prop ? prop+"."+p : p);
//             }
//             if (isEmpty && prop)
//                 result[prop] = {};
//         }
//     }
//     recurse(data, "");
//     return result;
// }

// flattens the sampleObject
// var seeing = JSON.flatten(sampleObject);
// console.log(seeing);
// // need string for match regex fxn to get
// var seeingStr = JSON.stringify(seeing);
// console.log("Seeing string: "+seeingStr);
// var seeingRegex = seeingStr.match(/apple/gi);
// console.log("seeingRegex: "+seeingRegex);
// test the Object.keys filter with hard code object and regex
// var obj = {"b":"apple","c.d":"banana","c.e.0":"grape","c.e.1":"APPLE"};
// var key1 = Object.keys(seeing).filter(function(key) {return seeing[key] === "apple"})[0];
// var key2 = Object.keys(seeing).filter(function(key) {return seeing[key] === "APPLE"})[0];
// console.log("Seeing: "+seeing+"key1: "+key1+"key2:"+key2);
// Getting keys from non-hardcode object and regex
// need to iterate through array of values returned by regex
	// var keyArray = [];
	// for (i=0;i<hatArray.length;i++) {
	// 	console.log("Inside for loop seeing: "+seeing);
	// 	console.log("hatArray[i]: "+hatArray[i]);
	// 	console.log("typeof hatArray[i]: "+typeof hatArray[i]);
	// 	console.log("hatArray[i].length: "+hatArray[i].length);
	// 	var leng = hatArray[i].length-1
	// 	console.log("hatArray[i].substring(1,hatArray[i].length-1: "+hatArray[i].substring(1,leng));
	// 	var hatKey = hatArray[i].substring(1,leng);
	// 	var hatString = hatArray[i];
	// 	console.log("hatString: "+hatString)
	// 	var key4 = Object.keys(seeing).filter(function(key) {return seeing[key] === hatKey})[0];
	// 	console.log("key4: "+key4);
	// 	console.log("i: "+i);
	// 	keyArray.push(key4);
	// 	console.log("keyArray: "+keyArray);
	// 	console.log("typeof keyArray: "+typeof keyArray);
	// }
// output results
// 	$("#results").html("StrObj: "+strObj+"<br>StrObj.match(/apple/gi): "+hat+"<br>Stringified JSON.flatten(sampleObject): "+JSON.stringify(seeing)+"<br>Path results of regex: "+JSON.stringify(keyArray));
// 	return false;
// });
// Now that process works will make it into a fxn that can be tested from console