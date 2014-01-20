(function (window, $, undefined) {
    'use strict';

    window.ua = {};
    var ua = window.ua;
    ua.name = window.navigator.userAgent.toLowerCase();

    ua.isIE = (ua.name.indexOf('msie') >= 0 || ua.name.indexOf('trident') >= 0);
    ua.isiPhone = ua.name.indexOf('iphone') >= 0;
    ua.isiPod = ua.name.indexOf('ipod') >= 0;
    ua.isiPad = ua.name.indexOf('ipad') >= 0;
    ua.isiOS = (ua.isiPhone || ua.isiPod || ua.isiPad);
    ua.isAndroid = ua.name.indexOf('android') >= 0;
    ua.isTablet = (ua.isiPad || (ua.isAndroid && ua.name.indexOf('mobile') < 0));

    if (ua.isIE) {
        ua.verArray = /(msie|rv:?)\s?([0-9]{1,})([\.0-9]{1,})/.exec(ua.name);
        if (ua.verArray !== null) {
            ua.ver = parseInt(ua.verArray[2], 10);
        }
    }
    if (ua.isiOS) {
        ua.verArray = /(os)\s([0-9]{1,})([\_0-9]{1,})/.exec(ua.name);
        if (ua.verArray !== null) {
            ua.ver = parseInt(ua.verArray[2], 10);
        }
    }
    if (ua.isAndroid) {
        ua.verArray = /(android)\s([0-9]{1,})([\.0-9]{1,})/.exec(ua.name);
        if (ua.verArray !== null) {
            ua.ver = parseInt(ua.verArray[2], 10);
        }
    }

    if (ua.isIE) {
        $('body').addClass('ie ie_' + ua.ver);
    }
    if (ua.isiPhone) {
        $('body').addClass('iPhone');
    }
    if (ua.isiPod) {
        $('body').addClass('iPod');
    }
    if (ua.isiPad) {
        $('body').addClass('iPad');
    }
    if (ua.isiOS) {
        $('body').addClass('iOS iOS_' + ua.ver);
    }
    if (ua.isAndroid) {
        $('body').addClass('android android_' + ua.ver);
    }
    if (ua.isTablet) {
        $('body').addClass('tablet');
    }
}(this, jQuery));
