import { Component } from '@angular/core';

@Component({
  selector: 'sync-comp',
  template: `<h1>Hello {{name}}</h1>`,
})
export class SyncParentComponent  { 
    name = 'Sync page';

}
