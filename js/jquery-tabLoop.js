(function( $ ) {

	function onKeyDown(event){
		if ( event.keyCode !== $.ui.keyCode.TAB ) {
			return;
		}
		var tabbables = this.find(":tabbable"),
			first = tabbables.filter(":first"),
			last  = tabbables.filter(":last");
		var currentIndex;
		tabbables=tabbables.sort(function(a,b){
			return parseInt($(a).attr('tabindex')) < parseInt($(b).attr('tabindex')) ?-1:1;
		})
		_.find(tabbables,function(el,index){
			if(el===event.target){
				currentIndex=index;
				return true;
			}else{
				return false;
			}
		})
		currentIndex++;
		if(tabbables.length===currentIndex){
			currentIndex=0;
		}
		tabbables[currentIndex].focus(1);
		event.preventDefault();
	}


	$.fn.tabLoop = function( action ) {
		if(!arguments.length){
			action="enable"
		}
		if ( action === "enable") {
			this.on('keydown',onKeyDown.bind(this));
		}

		if ( action === "disable" ) {
			this.off('keydown',onKeyDown);
		}

	};

}( jQuery ));