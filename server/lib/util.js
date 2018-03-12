String.prototype.trim = function(){
	
	var str = this.replace(/\s+/g,"")
	return this;
}
