import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.Emulated //default
  //encapsulation: ViewEncapsulation.None //applies the css styles globally not only to the elements of that component
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // @Input() decorator used for:
  // 1. To make the property bindable from outside
  // 2. To make the property bindable from outside with an alias
  // 3. To make the property bindable from outside with an alias and a default value
  //@Input() and @Output() give a child component a way to communicate with its parent component.

  @Input()
  element: { type: string; name: string; content: string } | undefined;

  @Input() name: string | undefined;

  @ViewChild('heading') header: ElementRef | undefined;
  @ContentChild('contentParagraph') paragraph: ElementRef | undefined;

  //using @Input with alias
  /*@Input('srvEle')
  element: { type: string; name: string; content: string } | undefined;*/

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('text content' + this.header?.nativeElement.textContent);
    console.log(
      'text content of paragraph' + this.paragraph?.nativeElement.textContent
    );
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log(
      'text content of paragraph' + this.paragraph?.nativeElement.textContent
    );
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('text content' + this.header?.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
