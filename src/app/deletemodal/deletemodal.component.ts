import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-deletemodal',
  templateUrl: './deletemodal.component.html',
  styleUrls: ['./deletemodal.component.scss']
})
export class DeletemodalComponent {
  @Input()  delBook?: Book;

  @Output() deleteSelected = new EventEmitter<number>();

  deleteBook(id: number){
    this.deleteSelected.emit(id);
  }
}
