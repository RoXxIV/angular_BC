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

const routes: Routes = [
  {path: 'admin', component: AdminHomeComponent},
  {path: 'brands', component: BrandListComponent},
  {path: 'brands/add', component: AddBrandComponent},
  {path: 'brands/:id', component: BrandDetailsComponent},
  {path: '', redirectTo: 'admin', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    BrandListComponent,
    BrandComponent,
    AddBrandComponent,
    BrandDetailsComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
