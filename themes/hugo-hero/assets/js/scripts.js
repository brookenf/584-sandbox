var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

console.log('test');

$(document).ready( function() {

    $('#POWER').hover( function() {
        $('#Power').fadeTo( "slow", 1 );
        $('.home_page').css("background", "black");
    }, function() {
        $('#Power').fadeTo( "slow", 0 );
        $('.home_page').css("background-image", "url('https://i.ytimg.com/vi/2gU62sxDGHc/maxresdefault.jpg')");
        $('.home_page').css("background-size", "cover");
    });

    $('#POLLUTION').hover( function() {
        $('#Pollution').fadeTo( "slow", 1 );
        $('.home_page').css("background", "black");
    }, function() {
        $('#Pollution').fadeTo( "slow", 0 );
        $('.home_page').css("background-image", "url('https://i.ytimg.com/vi/2gU62sxDGHc/maxresdefault.jpg')");
        $('.home_page').css("background-size", "cover");
    });

    $('#HEALTH').hover( function() {
        $('#Health').fadeTo( "slow", 1 );
        $('.home_page').css("background", "black");
    }, function() {
        $('#Health').fadeTo( "slow", 0 );
        $('.home_page').css("background-image", "url('https://i.ytimg.com/vi/2gU62sxDGHc/maxresdefault.jpg')");
        $('.home_page').css("background-size", "cover");
    });

    $('#WATER').hover( function() {
        $('#Water').fadeTo( "slow", 1 );
        $('.home_page').css("background", "black");
    }, function() {
        $('#Water').fadeTo( "slow", 0 );
        $('.home_page').css("background-image", "url('https://i.ytimg.com/vi/2gU62sxDGHc/maxresdefault.jpg')");
        $('.home_page').css("background-size", "cover");
    });

    $('#ECOLOGY').hover( function() {
        $('#Ecology').fadeTo( "slow", 1 );
        $('.home_page').css("background", "black");
    }, function() {
        $('#Ecology').fadeTo( "slow", 0 );
        $('.home_page').css("background-image", "url('https://i.ytimg.com/vi/2gU62sxDGHc/maxresdefault.jpg')");
        $('.home_page').css("background-size", "cover");
    });

});
