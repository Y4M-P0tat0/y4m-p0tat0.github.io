;(function(){
    var c = document.getElementsByClassName('li.linkbar');
    function addAnim() {
        c.classList.add('animated')
        // remove the listener, no longer needed
        c.removeEventListener('mouseover', addAnim);
    };

    // listen to mouseover for the container
	for (var i=0;i<c.length;i++){
    c.addEventListener('mouseover', addAnim);
	}
})();

