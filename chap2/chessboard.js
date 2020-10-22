let n = 8
for(let rows = 0; rows < n; rows++) {
	let row = ""
	for(let cols = 0; cols < n; cols++) {
		if((rows+cols)%2==0) {
			row+=" "
		} else {
			row+="#"
		}		
	}
	console.log(row)
}
