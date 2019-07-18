import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [
    CounterComponent,
    LoginComponent,
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
    const loginElement = createCustomElement(LoginComponent, {
      injector: this.injector
    });

    customElements.define('cea-counter', counterElement);
    customElements.define('cea-login', loginElement);
  }
}
