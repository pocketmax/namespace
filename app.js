module.exports = function(cb){

	var template = cb;

	var step = function(obj){

		// has children
		if(obj.items){
			var domItems = [];
			for(var i=0; i<obj.items.length; i++){
				var o = obj.items[i];
				domItems.push(template(o, step(o)));

			}
			return domItems.join('');
		} else {


			return '';
		}



	};

	this.walk = function(obj){

		return template(obj, step(obj));

	}

};
