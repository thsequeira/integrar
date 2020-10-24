// CONTACT MAP

var PageContact = function() {

	var _init = function() {

		var mapbg = new GMaps({
			div: '#gmapbg',
			lat: -31.6572335,
			lng: -64.432148,
			scrollwheel: false,
		});


		mapbg.addMarker({
			lat: -31.6572335,
			lng: -64.432148,
			title: 'Your Location',
			infoWindow: {
				content: '<h3>Delicius Catering.</h3><p>Alta Gracia, Córdoba</p>'
			}
		});
	}

    return {
        //main function to initiate the module
        init: function() {

            _init();

        }

    };
}();

$(document).ready(function() {
    PageContact.init();
});