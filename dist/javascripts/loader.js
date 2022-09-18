document.onreadystatechange = () => {

    if ( document.readyState === 'complete' ) {

        document.getElementById( 'loading' ).style.display = 'none'

        if ( typeof reset === 'function' ) {

            reset()

        }

    }

}
