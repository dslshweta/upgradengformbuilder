import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
// import { HttpModule } from '@angular/http';
// import { FormsModule } from '@angular/forms';
import { MODULE_NAME } from './app.module.ajs';

// import { locationServiceProvider, productServiceProvider, addressServiceProvider } from './ajs.upgradedproviders';

import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    declarations: [
        HomeComponent
    ],
    entryComponents: [
        HomeComponent
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule){
    }
    ngDoBootstrap(){
        this.upgrade.bootstrap(document.documentElement, [MODULE_NAME], {strictDi: true});
    }
}