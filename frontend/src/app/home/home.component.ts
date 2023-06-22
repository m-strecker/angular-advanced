import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
photo: string = 'https://clipart-library.com/image_gallery/187849.jpg';
ngOnInit(){}

}
