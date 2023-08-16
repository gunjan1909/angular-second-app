import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  //newServerName: string = '';
  //newServerContent: string = '';
  @ViewChild('serverContentInput')
  serverContentInput!: ElementRef;

  constructor() {}
  ngOnInit(): void {}

  onAddServer(serverNameInput: HTMLInputElement) {
    //console.log(serverNameInput.value);
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(bpNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: bpNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
