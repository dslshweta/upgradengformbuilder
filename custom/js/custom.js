angular.module('formBuilder')
    .config([
        'formioComponentsProvider',
        function (formioComponentsProvider) {
            formioComponentsProvider.register('custom', {
                group: 'resource',
                icon: 'fa fa-heart-o',
                views: [
                    {
                        name: 'Display',
                        template: 'formio/components/custom/display.html'
                    }, 
                    {
                        name: 'Conditional',
                        template: 'formio/components/common/conditional.html'
                    }
                ],
                documentation: 'http://help.form.io/userguide/#custom'
            });
        }
    ])



    .run([
        '$templateCache',
        function ($templateCache) {
            // Create the settings markup.
            $templateCache.put('formio/components/custom/display.html',
                '<ng-form>' +
                '<div ng-controller="customController">' +
                '<textarea  class="form-control" name="json" ng-model="customData"  rows="10"></textarea>' +
                '<button class="btn btn-success" ng-click="createCustom(customData)">Submit</button>' +
                '</div>' +
                ' </ng-form>'
            );
        }
    ]);

