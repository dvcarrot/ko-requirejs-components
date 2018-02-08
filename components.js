/**
 * components.js
 * файл должен содержать только регистрацию компонентов
 * http://knockoutjs.com/documentation/component-registration.html
 */
define(['knockout'], function (ko) {
    ko.components.register('my-message', {require: 'components/my-message'});
});
