function objectSearch(object, regex) {
	var results = {};
	var keyArray = [];
	var counter = 0;
	var prop = "";
	function recurse(object, prop)
	for (p in object){
		if(typeof object[p]==="undefined"){continue;}
		if(object[p] === null && typeof object[p] === "object"){continue;}
		if(Object(object[p]) !== object[p]){
			var str = object[p].toString();
			var potMatch = str.match(regex);
			if(potMatch){
				results[p]=object[p];
				keyArray.push(p);
			}
		} else if (Array.isArray(object[p])) {
      for(var i=0, l=object[p].length; i<l; i++) {
      	if(typeof object[p][i]==="undefined"){continue;}
				if(object[p][i] === null && typeof object[p][i] === "object"){continue;}
				if(Object(object[p][i]) !== object[p][i]){
					var str = object[p][i].toString();
					var potMatch = str.match(regex);
					if(potMatch){
						var resString = p+"["+i+"]";
						results[resString]=object[p][i];
						var keyString = p+"["+i+"]";
						keyArray.push(keyString);
					}
        if (l == 0){result[p] = []};
        }
      }
    } else {
    	counter++
    	if (counter>3) {break;}
    	recurse(cur[p], prop ? prop+'.'+p : p);







			for (q in object[p]){
				if(typeof object[p][q]==="undefined"){continue;}
				if(object[p][q] === null && typeof object[p][q] === "object"){continue;}
				if(Object(object[p][q]) !== object[p][q]){
					var str = object[p][q].toString();
					var potMatch = str.match(regex);
					if(potMatch){
						results[q]=object[p][q];
						var keyString = p+"."+q;
						keyArray.push(keyString);
					}
				} else if (Array.isArray(object[p][q])) {
	      for(var i=0, l=object[p][q].length; i<l; i++) {
	      	if(typeof object[p][q][i]==="undefined"){continue;}
					if(object[p][q][i] === null && typeof object[p][q][i] === "object"){continue;}
					if(Object(object[p][q][i]) !== object[p][q][i]){
						var str = object[p][q][i].toString();
						var potMatch = str.match(regex);
						if(potMatch){
							var resString = p+"."+q+"["+i+"]";
							results[resString]=object[p][q][i];
							var keyString = p+"."+q+"["+i+"]";
							keyArray.push(keyString);
						}
						var resLzed = p+"."+q;
	        if (l == 0){result[resLzed] = []};
	        }
	      }
	    } else {
		    for (r in object[p][q]){
					if(typeof object[p][q][r]==="undefined"){continue;}
					if(object[p][q][r] === null && typeof object[p][q][r] === "object"){continue;}
					if(Object(object[p][q][r]) !== object[p][q][r]){
						var str = object[p][q][r].toString();
						var potMatch = str.match(regex);
						if(potMatch){
							results[r]=object[p][q][r];
							var keyString = p+"."+q+"."+r;
							keyArray.push(keyString);
						}
					} else if (Array.isArray(object[p][q][r])) {
		      for(var i=0, l=object[p][q][r].length; i<l; i++) {
		      	if(typeof object[p][q][r][i]==="undefined"){continue;}
						if(object[p][q][r][i] === null && typeof object[p][q][r][i] === "object"){continue;}
						if(Object(object[p][q][r][i]) !== object[p][q][r][i]){
							var str = object[p][q][r][i].toString();
							var potMatch = str.match(regex);
							if(potMatch){
								var resString = p+"."+q+"."+r+"["+i+"]";
								results[resString]=object[p][q][r][i];
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
	console.log("Key Array: "+JSON.stringify(keyArray));
}