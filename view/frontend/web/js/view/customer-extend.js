define([
    'jquery',
    'uiComponent',
], function ($, Component) {
    'use strict';

    return function(Component){
        return Component.extend({
            initialize: function () {
                console.log('Override initialize()');
                this._super();
            }
        });
    };
});