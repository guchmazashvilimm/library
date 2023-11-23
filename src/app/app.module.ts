import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { DeletemodalComponent } from 'src/app/deletemodal/deletemodal.component';
import { HeaderComponent } from './header/header.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    HeaderComponent,
    AddbookComponent,
    DeletemodalComponent,
    BookpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
