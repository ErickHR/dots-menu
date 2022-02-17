

document.addEventListener( 'DOMContentLoaded', function( e ) {
    
    let dotsContainer = document.querySelector('.dots-container')
    dotsContainer.addEventListener('click', function(e){
        dotsContainer.classList.toggle('active')
    })

} )