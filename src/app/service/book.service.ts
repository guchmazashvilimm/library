import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books : Book[] = [
    {
      'id': 1,
      'title': "War And Peace",
      'description': "War and Peace is a literary work by Russian author Leo Tolstoy. Set during the Napoleonic Wars, the work mixes fictional narrative with chapters discussing history and philosophy. First published serially beginning in 1865, the work was rewritten and published in its entirety in 1869.",
      'publishYear': '1867',
      'author': "Lev Tolstoy",
      'imageUrl': "https://cdn.penguin.co.uk/dam-assets/books/9781849908467/9781849908467-jacket-large.jpg",
    },

    {
      'id': 2,
      'title': "Vepkhistkaosani",
      'description': "Vepkhistkaosani is a Georgian medieval epic poem, written in the 12th or 13th century by Georgia's national poet Shota Rustaveli.[1] A definitive work of the Georgian Golden Age, the poem consists of over 1600 Rustavelian Quatrains and is considered to be a masterpiece of the Georgian literature.[2] Until the early 20th century, a copy of this poem was part of the dowry of every bride",
      'publishYear': '1180–1205/07',
      'author': "Shota Rustaveli",
      'imageUrl': "https://booksale.ge/uploads/books/1534937122.jpg",
    },
    {
      'id': 3,
      'title': "Don Quixote",
      'description': "Don Quixote[a][b][c] is a Spanish epic novel by Miguel de Cervantes. It was originally published in two parts, in 1605 and 1615. Considered a founding work of Western literature, it is often labelled as the first modern novel[2][3] and one of the greatest works ever written.[4][5] Don Quixote is also one of the most-translated books in the world[6] and one of the best-selling novels of all time.",
      'publishYear': '1605',
      'author': "Miguel de Cervantes",
      'imageUrl': "https://m.media-amazon.com/images/I/411WFSFEMJL._AC_UF1000,1000_QL80_.jpg",
    }

    
  ]

  constructor(private router: Router) {}
  getBooks() {
    return this.books;
  }
  
  addBook(bookForm: NgForm) {
    if (bookForm.valid) {
      this.books.push(
        {
          'id': this.books.length + 1,
          'title': bookForm.value.title,
          'description': bookForm.value.description,
          'publishYear': bookForm.value.publishYear,
          'author': bookForm.value.author,
          'imageUrl': bookForm.value.imageUrl
        }
      );
    }

    this.router.navigate(['/']);

  }

  deleteBook(id: number){
    delete this.books[id - 1];
  }

  getBlogById(bookId: number){
    return this.books[bookId - 1]
  }


}
