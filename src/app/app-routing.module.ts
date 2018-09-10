import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskEntryComponent } from './components/task-entry.component';
import { ThankYouComponent } from './components/thank-you.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

const routes : Routes = [
  { path: '' , redirectTo: '/taskEntry', pathMatch: 'full'},
  { path: 'taskEntry', component : TaskEntryComponent },
  { path: 'thankyou' , component : ThankYouComponent},
  { path: '**' , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
