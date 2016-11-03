(function(){

  'use strict';

  var log = console.log.bind(console);

  document.addEventListener('click', function(event) {
    switch (event.target.value) {
      case 'Noto Sans JP':
        WebFont.load({
          custom: {
            families: [
              'Noto Sans JP:n1,n3,n4,n5,n7,n9'
            ],
            urls: [
              'https://fonts.googleapis.com/earlyaccess/notosansjp.css'
            ],
            testStrings: {
              'Noto Sans JP': '\u3042\u3043'
            },
          },
          timeout: 3000,
          loading: log,
          active: log,
          inactive: log,
          fontloading: log,
          fontactive: log,
          fontinactive: log
        });
        break;

      case 'M+ 1p':
        WebFont.load({
          custom: {
            families: [
              'Mplus 1p:n1,n3,n4,n5,n7,n8,n9'
            ],
            urls: [
              'https://fonts.googleapis.com/earlyaccess/mplus1p.css'
            ],
            testStrings: {
              'Mplus 1p': '\u3042\u3043'
            },
          },
          timeout: 3000,
          loading: log,
          active: log,
          inactive: log,
          fontloading: log,
          fontactive: log,
          fontinactive: log
        });
        break;

      case 'Rounded M+ 1c':
        WebFont.load({
          custom: {
            families: [
              'Rounded Mplus 1c:n1,n3,n4,n5,n7,n8,n9'
            ],
            urls: [
              'https://fonts.googleapis.com/earlyaccess/roundedmplus1c.css'
            ],
            testStrings: {
              'Rounded Mplus 1c': '\u3042\u3043'
            },
          },
          timeout: 3000,
          loading: log,
          active: log,
          inactive: log,
          fontloading: log,
          fontactive: log,
          fontinactive: log
        });
        break;

      case 'Hannari':
        WebFont.load({
          custom: {
            families: [
              'Hannari:n4'
            ],
            urls: [
              'https://fonts.googleapis.com/earlyaccess/hannari.css'
            ],
            testStrings: {
              'Hannari': '\u3042\u3043'
            },
          },
          timeout: 3000,
          loading: log,
          active: log,
          inactive: log,
          fontloading: log,
          fontactive: log,
          fontinactive: log
        });
        break;

      case 'Kokoro':
        WebFont.load({
          custom: {
            families: [
              'Kokoro:n4'
            ],
            urls: [
              'https://fonts.googleapis.com/earlyaccess/kokoro.css'
            ],
            testStrings: {
              'Kokoro': '\u3042\u3043'
            },
          },
          timeout: 3000,
          loading: log,
          active: log,
          inactive: log,
          fontloading: log,
          fontactive: log,
          fontinactive: log
        });
        break;

      case 'Sawarabi Mincho':
        WebFont.load({
          custom: {
            families: [
              'Sawarabi Mincho:n4'
            ],
            urls: [
              'https://fonts.googleapis.com/earlyaccess/sawarabimincho.css'
            ],
            testStrings: {
              'Sawarabi Mincho': '\u3042\u3043'
            },
          },
          timeout: 3000,
          loading: log,
          active: log,
          inactive: log,
          fontloading: log,
          fontactive: log,
          fontinactive: log
        });
        break;

      case 'Sawarabi Gothic':
        WebFont.load({
          custom: {
            families: [
              'Sawarabi Gothic:n4'
            ],
            urls: [
              'https://fonts.googleapis.com/earlyaccess/sawarabigothic.css'
            ],
            testStrings: {
              'Sawarabi Gothic': '\u3042\u3043'
            },
          },
          timeout: 3000,
          loading: log,
          active: log,
          inactive: log,
          fontloading: log,
          fontactive: log,
          fontinactive: log
        });
        break;

      case 'Nikukyu':
        WebFont.load({
          custom: {
            families: [
              'Nikukyu:n4'
            ],
            urls: [
              'https://fonts.googleapis.com/earlyaccess/nikukyu.css'
            ],
            testStrings: {
              'Nikukyu': '\u30a2\u30a3'
            },
          },
          timeout: 3000,
          loading: log,
          active: log,
          inactive: log,
          fontloading: log,
          fontactive: log,
          fontinactive: log
        });
        break;

      case 'Nico Moji':
        WebFont.load({
          custom: {
            families: [
              'Nico Moji:n4'
            ],
            urls: [
              'https://fonts.googleapis.com/earlyaccess/nicomoji.css'
            ],
            testStrings: {
              'Nico Moji': '\u3042\u3043'
            },
          },
          timeout: 3000,
          loading: log,
          active: log,
          inactive: log,
          fontloading: log,
          fontactive: log,
          fontinactive: log
        });
        break;
    }
  }, false);

}());
