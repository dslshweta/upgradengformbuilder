import * as angular from 'angular';
// import 'angular-route';
import 'reflect-metadata';

import 'jquery';
// import 'lodash';
import * as _ from 'lodash'; 

import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import "./styles/app.scss";

//ngUpgrade
import { HomeComponent } from './home/home.component';


export const MODULE_NAME = 'formBuilder';

angular.module(MODULE_NAME, ["ui.bootstrap", "ui.select", "formio", "ngFormBuilder", "ngJsonExplorer"])
.run([
  "$rootScope",
  'formioComponents',
  '$timeout',
  function(
    $rootScope,
    formioComponents,
    $timeout
  ) {
    $rootScope.displays = [{
      name: 'form',
      title: 'Form'
    }, {
      name: 'wizard',
      title: 'Wizard'
    }];
    $rootScope.form = {
      components: [
      ],
      display: "form",
      page: 0
      }

    $rootScope.renderForm = true;
    $rootScope.$on('formUpdate', function(event, form) {
      angular.merge($rootScope.form, form);
      $rootScope.renderForm = false;
      setTimeout(function() {
        $rootScope.renderForm = true;
      }, 10);
    });

    var originalComps = _.cloneDeep($rootScope.form.components);
    $rootScope.jsonCollapsed = true;
    $timeout(function() {
      $rootScope.jsonCollapsed = false;
    }, 200);
    var currentDisplay = 'form';
    $rootScope.$watch('form.display', function(display) {
      if (display && (display !== currentDisplay)) {
        currentDisplay = display;
        if (display === 'form') {
          $rootScope.form.components = originalComps;
        } else {
          $rootScope.form.components = [{
            type: 'panel',
            input: false,
            title: 'Page 1',
            theme: 'default',
            components: originalComps
          }];
        }
      }
    });

  }
])

angular.module('formBuilder')
    .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/create');

    $stateProvider

        .state('create', {
            url: '/create',
            templateUrl: './custom/template/create.html',
            params: {
                obj: null
            }
            
        })

        // .state('saved', {
        //     url: '/saved',
        //     templateUrl: './custom/template/saved.html',
        //     controller : savedFormController
        // })

        .state('home', {
            url: '/home',
            template: '<home></home>',
        })

});