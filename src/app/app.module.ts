import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrandListComponent } from './admin/brands/brand-list/brand-list.component';
import { BrandComponent } from './admin/brands/brand/brand.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddBrandComponent } from './admin/brands/add-brand/add-brand.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrandDetailsComponent } from './admin/brands/brand-details/brand-details.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddModelComponent } from './admin/models/add-model/add-model.component';
import { ModelComponent } from './admin/models/model/model.component';
import { ModelDetailsComponent } from './admin/models/model-details/model-details.component';
import { ModelListComponent } from './admin/models/model-list/model-list.component';
import { UserListComponent } from './admin/users/user-list/user-list.component';
import { UserDetailsComponent } from './admin/users/user-details/user-details.component';
import { UserComponent } from './admin/users/user/user.component';
import { SkateshopComponent } from './admin/skateshops/skateshop/skateshop.component';
import { SkateshopListComponent } from './admin/skateshops/skateshop-list/skateshop-list.component';
import { SkateshopDetailsComponent } from './admin/skateshops/skateshop-details/skateshop-details.component';
import { AdvertComponent } from './admin/adverts/advert/advert.component';
import { AdvertListComponent } from './admin/adverts/advert-list/advert-list.component';
import { AdvertDetailsComponent } from './admin/adverts/advert-details/advert-details.component';
import { AddAdvertComponent } from './admin/adverts/add-advert/add-advert.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';


const routes: Routes = [
  {path: 'admin', component: AdminHomeComponent},
  {path: 'brands', component: BrandListComponent},
  {path: 'brands/add', component: AddBrandComponent},
  {path: 'brands/:id', component: BrandDetailsComponent},
  {path: 'models', component: ModelListComponent},
  {path: 'models/add', component: AddModelComponent},
  {path: 'models/:id', component: ModelDetailsComponent},
  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'users/add', component: AddUserComponent},
  {path: 'skateshops', component: SkateshopListComponent},
  {path: 'skateshops/:id', component: SkateshopDetailsComponent},
  {path: 'adverts', component: AdvertListComponent},
  {path: 'adverts/add', component: AddAdvertComponent},
  {path: 'adverts/:id', component: AdvertDetailsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'article/:id', component: ArticleDetailsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    BrandListComponent,
    BrandComponent,
    AddBrandComponent,
    BrandDetailsComponent,
    AdminHomeComponent,
    AddModelComponent,
    ModelComponent,
    ModelDetailsComponent,
    ModelListComponent,
    UserComponent,
    UserDetailsComponent,
    UserListComponent,
    AddUserComponent,
    SkateshopComponent,
    SkateshopListComponent,
    SkateshopDetailsComponent,
    AdvertComponent,
    AdvertListComponent,
    AdvertDetailsComponent,
    AddAdvertComponent,
    HeaderComponent,
    HomeComponent,
    ArticleComponent,
    FooterComponent,
    ArticleDetailsComponent,
    QuestionsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
