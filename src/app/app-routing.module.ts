import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { LoginRetailerComponent } from './login-retailer/login-retailer.component';
import { RegisterRetailerComponent } from './register-retailer/register-retailer.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RetailerProfileComponent } from './retailer-profile/retailer-profile.component';
import { SportsComponent } from './sports/sports.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ClothesComponent } from './clothes/clothes.component';
import { HomeAppliancesComponent } from './home-appliances/home-appliances.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { RetailerProductListComponent } from './retailer-product-list/retailer-product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RetailerLogoutComponent } from './retailer-logout/retailer-logout.component';
import { DealersListComponent } from './dealers-list/dealers-list.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { CartComponent } from './cart/cart.component';
import { CompareComponent } from './compare/compare.component';
import { SearchComponent } from './search/search.component';
import { PaymentComponent } from './payment/payment.component';
import { DisplayComponent } from './display/display.component';
//import { OrdersComponent } from './orders/orders.component';
import { ProductviewComponent } from './productview/productview.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'adminLogin',component:LoginAdminComponent},
  {path:'adminRegister',component:RegisterAdminComponent},
  {path:'retailerLogin',component:LoginRetailerComponent},
  {path:'retailerRegister',component:RegisterRetailerComponent},
  {path:'userLogin',component:LoginUserComponent},
  {path:'userRegister',component:RegisterUserComponent},
  {path:"addproducts",component:AddProductComponent},
  {path:"listproducts",component:ListProductsComponent},
  {path:"userprofile/:email",component:UserProfileComponent},
  {path:"retailerprofile",component:RetailerProfileComponent},
  {path:"sports",component:SportsComponent},
  {path:"Mobiles",component:MobilesComponent},
  {path:"Electronics",component:ElectronicsComponent},
  {path:"clothes",component:ClothesComponent},
  {path:"homeappliances",component:HomeAppliancesComponent},
  {path:"gadgets",component:GadgetsComponent},
  {path:"userLogout",component:UserLogoutComponent},
  {path:"productlist",component:RetailerProductListComponent},
  {path:"updateproduct/:id",component:UpdateProductComponent},
  {path:"productdetails/:id",component:ProductDetailsComponent},
  {path:"retailerlogout",component:RetailerLogoutComponent},
  {path:"adminlogout",component:AdminLogoutComponent},
  {path:"retailerslist",component:DealersListComponent},
  {path:"cart",component:CartComponent},
  {path:"compare",component:CompareComponent},
  {path:"search/:name",component:SearchComponent},
  {path:"payment",component:PaymentComponent},
  {path:"display",component:DisplayComponent},
  {path:"view/:id",component:ProductviewComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"Aboutus",component:AboutUsComponent},
 // {path:"orders",component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
