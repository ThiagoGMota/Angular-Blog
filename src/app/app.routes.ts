import { Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { PostOpenComponent } from './components/post-open/post-open.component';

export const routes: Routes = [
  {
    path: '',
    component:PostOpenComponent
  },
  {
    path: 'content/:id',
    component: ContentComponent
  }
];
