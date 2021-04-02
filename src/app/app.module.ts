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

const routes: Routes = [
  {path: 'brands', component: BrandListComponent},
  {path: 'brands/add', component: AddBrandComponent},
  {path: 'brands/:id', component: BrandDetailsComponent},
  {path: '', redirectTo: 'brands', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    BrandListComponent,
    BrandComponent,
    AddBrandComponent,
    BrandDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
