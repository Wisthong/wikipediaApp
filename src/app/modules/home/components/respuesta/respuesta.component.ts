import { Component, Input, OnInit } from '@angular/core';
import { WikipediaResponse } from '@modules/home/interface/wikipedia-response';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css'],
})
export class RespuestaComponent implements OnInit {
  @Input() listWikipediaResponse!: WikipediaResponse;
  constructor() {}

  ngOnInit(): void {}
}
