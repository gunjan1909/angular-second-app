import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'second-app';

  serverElements: { type: string; name: string; content: string }[] = [
    {
      type: 'server',
      name: 'Testserver',
      content: 'Just a test!',
    },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    if (serverData.serverName !== '')
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent,
      });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    if (blueprintData.serverName !== '')
      this.serverElements.push({
        type: 'blueprint',
        name: blueprintData.serverName,
        content: blueprintData.serverContent,
      });
  }
  onChangeFirst() {
    this.serverElements[0].name = 'Changed!!!';
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}

/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements= [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
*/
