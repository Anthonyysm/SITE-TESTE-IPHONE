$(document).ready(function () {
    $("#banners ul").bxSlider({
        auto: true, //anima o slide do banner pra funcionar automaticamente
        mode: 'fade', //modo de passagem do slide
        speed: 700, //velocidaded da transição
        pager: false, //oculta os pontinhos de passagem do slide
    });

    $('#fotos .container').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});