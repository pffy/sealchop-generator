// name   	 : chop.js
// git       : https://github.com/pffy/sealchop-generator
// requires  : jQuery

// base url of the seal chop image api
const b = 'https://png.sealchop.com/?';

$( document ).ready(function(){

	$( '#xm' ).on( 'change, keyup, input' , function(){

		// removes alphanum
		if( $( this ).val().match( /\w/gui )) {
			$( this ).val( $( this ).val().replace( /\w/gui , ''));
		}

		// removes punctuation
		if($( this ).val().match( /\p{P}/gu )) {
			$( this ).val( $( this ).val().replace( /\p{P}/gu , ''));
		}

		upd();
	});

	$( '.qq' ).on( 'input' , function(){
		upd();
	});

	$( '#copybtn' ).click(function(){
		copythat();
	});

	upd();
});


// functions

function copythat() {

	navigator.clipboard.writeText( $( '#chop' ).attr( 'src' ))
		.then(() => {

		$( '#copybtn' ).text('Copied!');
		setTimeout(function(){
			$( '#copybtn' ).text('Copy URL to clipboard');
		}, 1000);
		console.log('copied!');
	});
}

function upd() {

	const arr = [];

	$( '.qq' ).each(function(){
		const n = $( this ).attr( 'name' );
		const p = n + '=';
		let val = '';
		switch(n) {
			case 'p':
				val = $( '#p' ).val();
				arr.push(
					val.toUpperCase().replace( '#' , 'p='),
					val.toUpperCase().replace( '#' , 'b='),
					val.toUpperCase().replace( '#' , 'f=')
				);
				break;
			default:
				val = $( this ).val();
				arr.push( val.toUpperCase().replace( '#' , p));
				break;
		}
	});

	arr.push('x=' + $( '#xm' ).val());
	const url = b + arr.join( '&' );
	$( '#chop' ).attr( 'src' , url);
}
