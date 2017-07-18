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
    $('#tabela').fadeOut(300, function () {
        $(to).fadeIn(300).css("display", "inline-block");
    });
});

$('.img-link a').click(function (e) {
    let to = $(this).attr('href');
    $(to).fadeOut(300, function () {
        $('#tabela').fadeIn(300);
    });
});

$('.artists-hidden a').click(function (e) {
    let to = $(this).attr('href');
    $('#locat').css("margin-top","150px");
    $('#after-click-hide').fadeOut(300, function () {
        $(to).fadeIn(300).css("display", "inline-block");
    });
});

$('.img-links a').click(function (e) {
    let to = $(this).attr('href');

    $(to).fadeOut(300, function () {
        $('#after-click-hide').fadeIn(300);
    });
});






function initMap() {
  var myLatLng = { lat: 44.801381, lng: 20.472129 };
  var map = new google.maps.Map(document.getElementById('mapa'), {
    center: myLatLng,
    zoom: 16,
    scrollwheel: false,
    styles:[
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#c4c4c4"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#707070"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#be2026"
            },
            {
                "lightness": "0"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "hue": "#ff000a"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#575757"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#999999"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": "-52"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
]
  });
  var image = 'https://image.ibb.co/hqY2FF/klica.png';
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
  });
};
