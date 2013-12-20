(function (window, $, undefined) {
    'use strict';

    window._UA = {};
    var UA = window._UA;
    UA.name = window.navigator.userAgent.toLowerCase();

    UA.isIE = (UA.name.indexOf('msie') >= 0 || UA.name.indexOf('trident') >= 0);
    UA.isiPhone = UA.name.indexOf('iphone') >= 0;
    UA.isiPod = UA.name.indexOf('ipod') >= 0;
    UA.isiPad = UA.name.indexOf('ipad') >= 0;
    UA.isiOS = (UA.isiPhone || UA.isiPod || UA.isiPad);
    UA.isAndroid = UA.name.indexOf('android') >= 0;
    UA.isTablet = (UA.isiPad || (UA.isAndroid && UA.name.indexOf('mobile') < 0));

    if (UA.isIE) {
        UA.verArray = /(msie|rv:?)\s?([0-9]{1,})([\.0-9]{1,})/.exec(UA.name);
        if (UA.verArray !== null) {
            UA.ver = parseInt(UA.verArray[2], 10);
        }
    }
    if (UA.isiOS) {
        UA.verArray = /(os)\s([0-9]{1,})([\_0-9]{1,})/.exec(UA.name);
        if (UA.verArray !== null) {
            UA.ver = parseInt(UA.verArray[2], 10);
        }
    }
    if (UA.isAndroid) {
        UA.verArray = /(android)\s([0-9]{1,})([\.0-9]{1,})/.exec(UA.name);
        if (UA.verArray !== null) {
            UA.ver = parseInt(UA.verArray[2], 10);
        }
    }

    if (UA.isIE) {
        $('body').addClass('ie ie_' + UA.ver);
    }
    if (UA.isiPhone) {
        $('body').addClass('iPhone');
    }
    if (UA.isiPod) {
        $('body').addClass('iPod');
    }
    if (UA.isiPad) {
        $('body').addClass('iPad');
    }
    if (UA.isiOS) {
        $('body').addClass('iOS iOS_' + UA.ver);
    }
    if (UA.isAndroid) {
        $('body').addClass('android android_' + UA.ver);
    }
    if (UA.isTablet) {
        $('body').addClass('tablet');
    }
}(this, jQuery));
