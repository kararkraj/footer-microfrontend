import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

const local = true;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [local ? AppComponent : []]
})
export class AppModule implements DoBootstrap {
  constructor(
    private injector: Injector
  ) {
    const micro = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define("micro-footer", micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void { }
}
