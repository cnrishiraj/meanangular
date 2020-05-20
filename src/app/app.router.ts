import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {PostCreateComponent} from '../app/posts/post-create/post-create.component';

export const router: Routes = [
    { path: 'success',  component: PostCreateComponent },

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);