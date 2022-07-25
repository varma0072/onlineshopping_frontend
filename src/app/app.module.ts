import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginRetailerComponent } from './login-retailer/login-retailer.component';
import { RegisterRetailerComponent } from './register-retailer/register-retailer.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RetailerProfileComponent } from './retailer-profile/retailer-profile.component';
import { SportsComponent } from './sports/sports.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { RetailerLogoutComponent } from './retailer-logout/retailer-logout.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ClothesComponent } from './clothes/clothes.component';
import { HomeAppliancesComponent } from './home-appliances/home-appliances.component';
import { RetailerProductListComponent } from './retailer-product-list/retailer-product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { DealersListComponent } from './dealers-list/dealers-list.component';
import { CompareComponent } from './compare/compare.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
//import { OrdersComponent } from './orders/orders.component';
import { DisplayComponent } from './display/display.component';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductviewComponent } from './productview/productview.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    LoginUserComponent,
    RegisterUserComponent,
    LoginRetailerComponent,
    RegisterRetailerComponent,
    LoginAdminComponent,
    RegisterAdminComponent,
    ListProductsComponent,
    UserProfileComponent,
    RetailerProfileComponent,
    SportsComponent,
    UserLogoutComponent,
    RetailerLogoutComponent,
    AdminLogoutComponent,
    MobilesComponent,
    GadgetsComponent,
    ElectronicsComponent,
    ClothesComponent,
    HomeAppliancesComponent,
    RetailerProductListComponent,
    UpdateProductComponent,
    ProductDetailsComponent,
    SearchComponent,
    DealersListComponent,
    CompareComponent,
    CartComponent,
   // OrdersComponent,
    DisplayComponent,
    HomeComponent,
    ProductviewComponent,
    PaymentComponent,
    ContactusComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
