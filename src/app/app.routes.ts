import { Routes } from '@angular/router';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SemaphoreComponent } from './pages/projects/2024/semaphore/semaphore.component';
import { SemaphoreCodeComponent } from './pages/projects/2024/semaphore/code/code.component';
import { SemaphoreDocComponent } from './pages/projects/2024/semaphore/doc/doc.component';
import { SemaphorePainelComponent } from './pages/projects/2024/semaphore/painel/painel.component';
import { SemaphoreProgressComponent } from './pages/projects/2024/semaphore/progress/progress.component';
import { SemaphoreSlidesComponent } from './pages/projects/2024/semaphore/slides/slides.component';

export const routes: Routes = [
  {
    path: '',
    component: NavigationComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'projects/semaphore',
    component: SemaphoreComponent,
  },
  {
    path: 'projects/semaphore/painel',
    component: SemaphorePainelComponent,
  },
  {
    path: 'projects/semaphore/doc',
    component: SemaphoreDocComponent,
  },
  {
    path: 'projects/semaphore/slides',
    component: SemaphoreSlidesComponent,
  },
  {
    path: 'projects/semaphore/progress',
    component: SemaphoreProgressComponent,
  },
  {
    path: 'projects/semaphore/code',
    component: SemaphoreCodeComponent,
  },
];
