import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() changeSearch = new EventEmitter<string>();


  constructor(private bookService: BookService, private router: Router){}

  public searchBooks(key: string) :void{
    this.changeSearch.emit(key)
  }

  isBlogRoute(){
    if(this.router.url.includes('/addBook') || this.router.url.includes('/book')){
      return true;
    }
    return false
 

  }
}
