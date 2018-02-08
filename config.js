/**
 * Файл должен содеражть конфиг для requirejs и вызов единственного модуля инициализации
 */

// стандартный конфиг requirejs
// http://requirejs.org/docs/api.html#config
requirejs.config({
    paths: {
        'jquery': 'https://code.jquery.com/jquery-1.12.4',
        'knockout': 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.1/knockout-debug',
        'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text'
    }
});

// вызов модуля инициализации
require(['init']);
