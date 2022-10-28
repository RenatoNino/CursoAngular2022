import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image: string="https://concepto.de/wp-content/uploads/2015/03/paisaje-800x409.jpg"
  public Titulo: string="Curso de Angular de Interpolación"
  constructor() { }

  ngOnInit(): void {
  }

}
