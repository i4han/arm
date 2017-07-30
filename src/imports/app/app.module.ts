import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import { MdToolbarModule, MdSidenavModule } from '@angular/material' 

import { AppComponent } from './app.component'
// import { AppComponent, AppRoutes, AppApollo } from './app.package'
// import { HomeModule } from './home/home.module';
// import { SidenavComponent } from './sidenav/sidenav.component';
// import { FooterComponent } from './footer/footer.component';
// import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // SidenavComponent,
    // FooterComponent,
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    // MdToolbarModule,
    // MdSidenavModule,
    // AppRoutes,
    // AppApollo,
    // HomeModule,
  ],
  exports: [
    // MdToolbarModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
