$( document ).ready( function() {
    $( '.position' ).each( function() {
        var position = this;
        var position_content = $( position ).find( '.position-content' );

        $( position ).find( '.gray-indent-plus' ).click( function() {
            $( position ).toggleClass( 'is-open' );
        });
    });
});