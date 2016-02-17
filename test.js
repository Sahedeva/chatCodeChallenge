function objectSearch(object, regex) {
	var results = {};
	var keyArray = [];
	for (p in object){
		// console.log("Key: "+p+" Value: ");
		// console.log(object[p]);
		if(typeof object[p]==="undefined"){continue;}
		if(object[p] === null && typeof object[p] === "object"){continue;}
		if(Object(object[p]) !== object[p]){
			// console.log("object[p] when it is not an object: "+object[p]);
			// console.log("typeof object[p]: "+typeof object[p]);
			var str = object[p].toString();
			var potMatch = str.match(regex);
			if(potMatch){
				results[p]=object[p]
				// console.log("Result Key: "+p+" Result Value: "+results[p]);
				keyArray.push(p);
			}
		} else if (Array.isArray(object[p])) {
      for(var i=0, l=object[p].length; i<l; i++) {
      	if(typeof object[p][i]==="undefined"){continue;}
				if(object[p][i] === null && typeof object[p][i] === "object"){continue;}
				if(Object(object[p][i]) !== object[p][i]){
					// console.log("object[p]["+i+"] when it is not an object: "+object[p][i]);
					// console.log("typeof object[p]["+i+"]: "+typeof object[p][i]);
					var str = object[p][i].toString();
					var potMatch = str.match(regex);
					if(potMatch){
						var resString = p+"["+i+"]";
						results[resString]=object[p][i]
						// console.log("Result Key: "+resString+" Result Value: "+results[resString]);
						var keyString = p+"["+i+"]";
						keyArray.push(keyString);
					}
        if (l == 0){result[p] = []};
        }
      }
    } else {
			for (q in object[p]){
				// console.log("Key: "+q+" Value: ");
				// console.log(object[p][q]);
				if(typeof object[p][q]==="undefined"){continue;}
				if(object[p][q] === null && typeof object[p][q] === "object"){continue;}
				if(Object(object[p][q]) !== object[p][q]){
					// console.log("object[p][q] when it is not an object: "+object[p][q]);
					// console.log("typeof object[p][q]: "+typeof object[p][q]);
					var str = object[p][q].toString();
					var potMatch = str.match(regex);
					if(potMatch){
						results[q]=object[p][q]
						// console.log("Result Key: "+q+" Result Value: "+results[q]);
						var keyString = p+"."+q;
						keyArray.push(keyString);
					}
				} else if (Array.isArray(object[p][q])) {
	      for(var i=0, l=object[p][q].length; i<l; i++) {
	      	if(typeof object[p][q][i]==="undefined"){continue;}
					if(object[p][q][i] === null && typeof object[p][q][i] === "object"){continue;}
					if(Object(object[p][q][i]) !== object[p][q][i]){
						// console.log("object[p][q]["+i+"] when it is not an object: "+object[p][q][i]);
						// console.log("typeof object[p][q]["+i+"]: "+typeof object[p][q][i]);
						var str = object[p][q][i].toString();
						var potMatch = str.match(regex);
						if(potMatch){
							var resString = p+"."+q+"["+i+"]";
							results[resString]=object[p][q][i]
							// console.log("Result Key: "+resString+" Result Value: "+results[resString]);
							var keyString = p+"."+q+"["+i+"]";
							keyArray.push(keyString);
						}
						var resLzed = p+"."+q;
	        if (l == 0){result[resLzed] = []};
	        }
	      }
	    } else {
		    for (r in object[p][q]){
					// console.log("Key: "+r+" Value: ");
					// console.log(object[p][q][r]);
					if(typeof object[p][q][r]==="undefined"){continue;}
					if(object[p][q][r] === null && typeof object[p][q][r] === "object"){continue;}
					if(Object(object[p][q][r]) !== object[p][q][r]){
						// console.log("object[p][q][r] when it is not an object: "+object[p][q][r]);
						// console.log("typeof object[p][q][r]: "+typeof object[p][q][r]);
						var str = object[p][q][r].toString();
						var potMatch = str.match(regex);
						if(potMatch){
							results[r]=object[p][q][r]
							// console.log("Result Key: "+r+" Result Value: "+results[r]);
							var keyString = p+"."+q+"."+r;
							keyArray.push(keyString);
						}
					} else if (Array.isArray(object[p][q][r])) {
		      for(var i=0, l=object[p][q][r].length; i<l; i++) {
		      	if(typeof object[p][q][r][i]==="undefined"){continue;}
						if(object[p][q][r][i] === null && typeof object[p][q][r][i] === "object"){continue;}
						if(Object(object[p][q][r][i]) !== object[p][q][r][i]){
							// console.log("object[p][q][r]["+i+"] when it is not an object: "+object[p][q][i]);
							// console.log("typeof object[p][q][r]["+i+"]: "+typeof object[p][q][r][i]);
							var str = object[p][q][r][i].toString();
							var potMatch = str.match(regex);
							if(potMatch){
								var resString = p+"."+q+"."+r+"["+i+"]";
								results[resString]=object[p][q][r][i]
								// console.log("Result Key: "+resString+" Result Value: "+results[resString]);
								var keyString = p+"."+q+"."+r+"["+i+"]";
								keyArray.push(keyString);
							}
							var resLzed = p+"."+q+"."+r;
		        if (l == 0){result[resLzed] = []};
		        }
		      }
		    }
		}	
	}
	}
}
}
	for (match in results){
		console.log("Result Key: "+match+" Result Value: "+results[match]);
	}
	console.log("Key Array: "+keyArray);
}
// var a = { b: "apple", c: { d: "banana", e: ["grape", "APPLE"] }};
// objectSearch(a, /apple/gi);

objectSearch(window, /Seagate/i);