import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('dropZone', { read: ElementRef, static: true }) dropZone: ElementRef;

  public tabs: Array<{}> = [
    { name: 'tab 1' },
    { name: 'tab 2' },
    { name: 'tab 3' }
  ];

  private _draggedElement;

  constructor() { }

  ngOnInit() {
  }


  @HostListener('mousedown', ['$event.target'])
  public mouseClickHandler(element: HTMLElement): void {
    if(!element.classList.contains('cl-tab')){
      return;
    }
    for (let i = 0; i < element.parentElement.children.length; i++) {
      (element.parentElement.children[i] as HTMLElement).style.background = 'none';
    }
    element.style.background = '#303030';
  }

  @HostListener('dragstart', ['$event.target'])
  public dragStartHander(element: HTMLElement): void {
    this._draggedElement = element;
  }

  @HostListener('dragover', ['$event.target'])
  public dragOverHandler(element: HTMLElement): void {
    // make possible to drop
    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  public dropHandler(event: DragEvent): void {
    this.dropZone.nativeElement.removeChild(this._draggedElement);
    this.dropZone.nativeElement.appendChild(this._draggedElement);
    this._draggedElement = null;
  }
}
