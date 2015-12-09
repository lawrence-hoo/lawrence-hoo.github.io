$( document ).ready( function() {

    var win_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    $( window ).resize( function() {
        win_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    });

    $( '.position' ).each( function() {
        var position = this;
        var position_content_container = $( position ).children( '.position-content-container' );
        var position_content = $( position_content_container ).children( '.position-content' );
        
        $( position ).find( '.gray-indent-plus' ).click( function() {
            if ( win_width < 640) {
                if ( $( position ).hasClass( 'is-open' ) ) {
                    $( position_content ).animate( {
                        'opacity': '0'
                    }, 600 );
                    $( position_content_container ).delay( 600 ).slideToggle(600);
                }
                else {
                    $( position_content_container ).slideToggle(600);
                    $( position_content ).delay( 600 ).animate( {
                        'opacity': '1'
                    }, 600 );
                }
                $( position ).toggleClass( 'is-open' );
            }
        });
    });
    $( '.js-phone' ).hover(
        function() {
            if ( win_width >= 1024 ) {
                $( this ).parent().addClass( 'top-left' );
            }
        },
        function() {
            $( this ).parent().removeClass( 'top-left' );
        }
    )
    $( '.js-email' ).hover(
        function() {
            if ( win_width >= 1024 ) {
                $( this ).parent().addClass( 'bottom-right' );
            }
        },
        function() {
            $( this ).parent().removeClass( 'bottom-right' );
        }
    )
});
