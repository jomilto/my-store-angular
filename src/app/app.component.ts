import { Component } from '@angular/core';

import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  widthImg = 10;
  person = {
    name: 'Jose',
    age: 12,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  box = {
    width:10,
    height:10,
    color:'red'
  }

  newEmoji = '';

  emojis: string[] = [ '😂' , '🐦', '🐳','🌮', '💚']

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  register = {
    name:'',
    email:'',
    password:''
  }

  addEmoji(){
    this.emojis.push(this.newEmoji);
    this.newEmoji = '';
  }

  deleteEmoji(index: number){
    this.emojis.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }
}
