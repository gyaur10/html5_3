// Elemek kiválasztása
// @param selector: string az elemet kiválasztó szelektor.

function _q( selector ) {
    
    // Elemek kiválasztása
    
    var elements = document.querySelectorAll( selector );
    
    return elements;
}

//Profil beviteli mező megjelenítése

function showProfile() {
    
    //Elem kiválasztása
    var div = document.querySelector( ".profile-div" );
    
    //Ha a show class hozzá van adva az elemhez elrejtjük, különben megjelenítjük.
    if (div.classList.contains("show")) {
        div.classList.remove( "show" );
    } else {
        div.classList.add( "show" );
    }
    
}