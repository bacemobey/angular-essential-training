import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mv-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  constructor() { }
  
  onDelete() {
    console.log('deleted');
    this.delete.emit(this.mediaItem);
  }
  ngOnInit() {
  }

}
