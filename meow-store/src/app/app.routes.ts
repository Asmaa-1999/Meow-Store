import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us/contact-us.component';
import { ShopComponent } from './shop/shop/shop.component';
import { ServicePetComponent } from './services-pet/service-pet/service-pet.component';
import { ProfileComponent } from './pfofile/profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist/wishlist.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'contact', component: ContactUsComponent },
    {path:'shop',component:ShopComponent},
    {path:'services',component:ServicePetComponent},
    {path:'profile',component:ProfileComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'sign-in',component:SignInComponent},
    {path:'sign-up',component:SignUpComponent},
    { path: '**', component:NotFoundComponent }, 
];
