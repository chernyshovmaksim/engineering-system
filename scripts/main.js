$(document).ready(function(){
    mmenuInit();
});




// Mmenu Plugin
const mmenuInit = function(){
    const menu = new MmenuLight(
        document.querySelector( "#my-menu" )
    );

    const navigator = menu.navigation({
        title: 'ООО "Инженерные системы"'
    });
    const drawer = menu.offcanvas();

    document.querySelector( 'a[href="#my-menu"]' )
        .addEventListener( 'click', ( evnt ) => {
            evnt.preventDefault();
            drawer.open();
        });
}