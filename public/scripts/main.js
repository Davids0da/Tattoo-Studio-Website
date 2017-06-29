window.addEventListener('scroll', function () {
    var $window = $(window);
    var pageYOoffset = $window.scrollTop();
    var divHeight = $('#header').height();

    if (pageYOffset < divHeight - 300) {
        $('#poc').removeClass("passive");
        $('#poc').addClass("active");
        $('#o-nam').removeClass("active");
        $('#o-nam').addClass("passive");
    }
    if (pageYOffset > divHeight - 300 && pageYOffset < divHeight + divHeight - 300) {
        $('#poc').removeClass("active");
        $('#poc').addClass("passive");
        $('#o-nam').removeClass("passive");
        $('#o-nam').addClass("active");
        $('#usl').removeClass("active");
        $('#usl').addClass("passive");
    }
    if (pageYOffset > divHeight + divHeight - 300 && pageYOffset < divHeight + divHeight + divHeight - 300) {
        $('#o-nam').removeClass("active");
        $('#o-nam').addClass("passive");
        $('#usl').removeClass("passive");
        $('#usl').addClass("active");
        $('#uti').removeClass("active");
        $('#uti').addClass("passive");
    }
    if (pageYOffset > divHeight + divHeight + divHeight - 300 && pageYOffset < divHeight + divHeight + divHeight + divHeight - 300) {
        $('#uti').removeClass("passive");
        $('#uti').addClass("active");
        $('#usl').removeClass("active");
        $('#usl').addClass("passive");
        $('#ume').removeClass("active");
        $('#ume').addClass("passive");
    }
    if (pageYOffset > divHeight + divHeight + divHeight + divHeight - 300 && pageYOffset < divHeight + divHeight + divHeight + divHeight + divHeight - 300) {
        $('#ume').removeClass("passive");
        $('#ume').addClass("active");
        $('#uti').removeClass("active");
        $('#uti').addClass("passive");
        $('#lok').removeClass("active");
        $('#lok').addClass("passive");
    }
    if (pageYOffset > divHeight + divHeight + divHeight + divHeight + divHeight - 300 && pageYOffset < divHeight + divHeight + divHeight + divHeight + divHeight + divHeight - 300) {
        $('#lok').removeClass("passive");
        $('#lok').addClass("active");
        $('#ume').removeClass("active");
        $('#ume').addClass("passive");
    }
});

$(document).ready(() => {
    $('#navbar a').click(function (e) {
        let to = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(to).offset().top
        }, 1200);
    });
});

$('.table-box a').click(function (e) {
    let to = $(this).attr('href');
    $('#tabela').fadeOut(500, function () {
        $(to).fadeIn(1000).css("display", "inline-block");
    });
});

$('.img-link a').click(function (e) {
    let to = $(this).attr('href');
    $(to).fadeOut(500, function () {
        $('#tabela').fadeIn(1000);
    });
});

