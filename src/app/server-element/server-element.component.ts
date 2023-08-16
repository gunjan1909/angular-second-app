import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.Emulated //default
  //encapsulation: ViewEncapsulation.None //applies the css styles globally not only to the elements of that component
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit {
  // @Input() decorator used for:
  // 1. To make the property bindable from outside
  // 2. To make the property bindable from outside with an alias
  // 3. To make the property bindable from outside with an alias and a default value
  //@Input() and @Output() give a child component a way to communicate with its parent component.

  @Input()
  element: { type: string; name: string; content: string } | undefined;

  //using @Input with alias
  /*@Input('srvEle')
  element: { type: string; name: string; content: string } | undefined;*/

  constructor() {}

  ngOnInit(): void {}
}
