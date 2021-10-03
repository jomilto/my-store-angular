import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  person = {
    name: 'Jose',
    age: 12
  }

  newEmoji = '';

  emojis: string[] = [ '😂' , '🐦', '🐳','🌮', '💚']

  addEmoji(){
    this.emojis.push(this.newEmoji);
    this.newEmoji = '';
  }

  deleteEmoji(index: number){
    this.emojis.splice(index, 1);
  }
}
