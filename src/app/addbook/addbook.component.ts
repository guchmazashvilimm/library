import { Component } from '@angular/core';
import { BookService } from '../service/book.service';
import { NgForm } from '@angular/forms';
import { Book } from '../model/book';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent {
  books: Book[] = this.bookService.getBooks();

  constructor(private bookService: BookService) {}

  onSubmit(bookForm: NgForm) {
    this.bookService.addBook(bookForm);
  }


  isTitleInBooks(bookForm: NgForm): boolean {
    const title = bookForm.value.title;
    return this.books.some(book => book.title === title);
  }

}
