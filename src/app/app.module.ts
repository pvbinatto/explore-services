import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/home/header.component';
import { SearchComponent } from './components/header/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { PartnersComponent } from './components/home/partners/partners.component';
import { HowComponent } from './components/home/how/how.component';
import { PopularComponent } from './components/home/popular/popular.component';
import { StatisticDataComponent } from './components/home/statistic-data/statistic-data.component';
import { BannerAddServiceComponent } from './components/home/banner-add-service/banner-add-service.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterCopyComponent } from './components/footer/footer-copy/footer-copy.component';
import { ServiceComponent } from './components/service/service.component';
import { ServiceHeaderComponent } from './components/service/service-header/service-header.component';
import { ServiceBodyComponent } from './components/service/service-body/service-body.component';
import { SidebarRightComponent } from './components/service/service-body/sidebar-right/sidebar-right.component';
import { ReviewsComponent } from './components/service/service-body/reviews/reviews.component';
import { SuggestServiceComponent } from './components/service/service-body/suggest-service/suggest-service.component';
import { SidebarLeftComponent } from './components/service/search/sidebar-left/sidebar-left.component';
import { BodyComponent } from './components/service/search/body/body.component';
import { FaqComponent } from './components/faq/faq.component';
import { LoginComponent } from './components/account/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    PartnersComponent,
    HowComponent,
    PopularComponent,
    StatisticDataComponent,
    BannerAddServiceComponent,
    FooterComponent,
    FooterCopyComponent,
    ServiceComponent,
    ServiceHeaderComponent,
    ServiceBodyComponent,
    SidebarRightComponent,
    ReviewsComponent,
    SuggestServiceComponent,
    SidebarLeftComponent,
    BodyComponent,
    FaqComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
