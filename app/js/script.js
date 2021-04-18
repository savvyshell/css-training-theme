$(document).ready(function() {
    adjustResponsive();
    $(window).resize(function() {
      adjustResponsive();
    })
})

// main react
function adjustResponsive() {
    let width = $(window).width();

    changeHeaderPhone(width);
    toggleHeaderCTA(width);
    changeFooterButtonText(width);
    toggleFooterCTA(width);
    toggleHeaderBanner(width);

}

// utility functions
function changeHeaderPhone(width) {
    if (width >= 1100) {
        $('.header-phone').css({
            'padding-left': '15px',
            'padding-right': '15px',
            'top': '44px',
            'right': '40px'
        });
        $('.phone-number').show();
    } else {
        $('.header-phone').css({
            'padding-left': '15px',
            'padding-right': '15px',
            'top': '5px',
            'right': '20px'
        });
        $('.phone-number').hide();
    }
}

function changeFooterButtonText(width) {
    const text = $('#enterEDealer').text();
    if (width <= 340) {
        $('#enterEDealer').text("BACK TO GETEDEALER.COM");
    } else {
        $('#enterEDealer').text(text);
    }
}

function toggleFooterCTA(width) {
    if (width <= 725) {
        $('.footer-cta').hide();
    } else {
        $('.footer-cta').show();
    }
}

function toggleHeaderCTA(width) {
    if (width <= 1150) {
        $('.header-fold').hide();
    } else {
        $('.header-fold').show();
    }
}

function toggleHeaderBanner(width) {
 if (width <= 360) {
     $('#header-banner').hide();
     $('#header-banner-mobile').show();
 } else {
     $('#header-banner').show();
     $('#header-banner-mobile').hide();
 }
 if (width <= 300) {
     $("#header-banner").hide();
     $("#header-banner-mobile").hide();
 }
}