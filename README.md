# Magento2-ExtendJavaScriptComponent
Simple module showing how to extend a JavaScript Component

## Install
Place this in `app/code/Niall` and run `bin/magento setup:upgrade`

## Info
This can also be placed in `app/design/frontend/TheTheme/base/Magento_SomeModule`, in which case _requirejs-config.js_ needs to reference _Magento_SomeModule_.

Example:
```
var config = {
    'config':{
        'mixins': {
            'Magento_Customer/js/view/customer': {
                'Niall_ExtendJavaScriptComponent/js/view/customer-extend':true
            }
        }
    }
};
```
## References
* [Alan Storm](https://alanstorm.com/the-curious-case-of-magento-2-mixins/)
* [Official Documentation](https://devdocs.magento.com/guides/v2.3/javascript-dev-guide/javascript/js_mixins.html)
