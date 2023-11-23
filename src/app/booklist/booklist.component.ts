import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit{
  books: Book[] = [];
  delBook?: Book;
  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    console.log(this.books);
    
  }

  deleteBook(id: number){
    return this.bookService.deleteBook(id);
  }

  public openModel(mode?: string, book?: Book): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'delete') {
      this.delBook = book;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }

    container?.appendChild(button);
    button.click();
  }
  

  searchBooks(key: string){
    console.log(key);
    console.table(this.books)
    let cloneBooks: Book[] = this.bookService.getBooks();
    
    const results: Book[] = [];
    for (const book of cloneBooks) {
      if (book.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || book.author.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        results.push(book);
      }
    }
    this.books = results;
    if (!key) {
      this.books = this.bookService.getBooks();
    }
  }
}
