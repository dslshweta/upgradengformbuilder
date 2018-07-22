import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { setAngularLib } from '@angular/upgrade/static';
import * as angular from 'angular';
// import 'angular-route';

import { AppModule } from './app.module';
import './polyfills.ts';
import { PlatformRef } from '@angular/core';

import { UpgradeModule } from '@angular/upgrade/static';

setAngularLib(angular);
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    console.log("Bootstrapping in hybrid mode.");
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ['formBuilder']);
});
// platformBrowserDynamic().bootstrapModule(AppModule);