import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookpageComponent } from './bookpage/bookpage.component';

const routes: Routes = [
  { path: '', component: BooklistComponent },
  { path: 'addBook', component: AddbookComponent },
  { path: 'book/:id', component: BookpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
