// name   	 : chop.js
// git       : https://github.com/pffy/sealchop-generator
// requires  : jQuery

// base url of the seal chop image api
const b = 'https://png.sealchop.com/?';

$( document ).ready(function(){

	$( '#xm' ).on( 'change, keyup, input' , function(){

		// removes alphanum
		if( $(this).val().match(/\w/gui)) {
			$(this).val( $(this).val().replace(/\w/gui, ''));
		}

		// removes punctuation
		if($(this).val().match(/\p{P}/gu)) {
			$(this).val( $(this).val().replace(/\p{P}/gu, ''));
		}

		upd();
	});

	$( '.qq' ).on( 'input' , function(){
		upd();
	});

	$( '#copylink, #copyme' ).click(function(){
		copythat();
	});

	upd();
});


// functions

function copythat() {

	navigator.clipboard.writeText( $( '#copyme' ).val())
		.then(() => {

		showmsg();
		setTimeout(hidemsg, 1000);
		console.log('copied!');
	});
}

function hidemsg() {
	$( '#copymsg' ).hide( 'slow' );
}

function showmsg() {
	$( '#copymsg' ).show();
}

function upd() {

	const arr = [];

	$( '.qq' ).each(function(){
		let p = $( this ).attr( 'name' ) + '=';
		arr.push( $( this ).val().toUpperCase().replace( '#' , p));
	});

	arr.push('x=' + $( '#xm' ).val());

	const url = b + arr.join( '&' );

	$( '#chop' ).attr( 'src' , url);
	$( '#copyme' ).val(url);
}