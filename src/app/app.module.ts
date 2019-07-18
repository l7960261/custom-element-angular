import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    CounterComponent,
  ],
})
export class AppModule {
  constructor(
    private injector: Injector,
  ) { }

  ngDoBootstrap() {
    const counterElement = createCustomElement(CounterComponent, {
      injector: this.injector
    });
    customElements.define('cea-counter', counterElement);
  }
}
