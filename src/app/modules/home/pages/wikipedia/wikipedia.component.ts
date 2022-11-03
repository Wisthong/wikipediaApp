import { Component, OnInit } from '@angular/core';
import { WikipediaResponse } from '@modules/home/interface/wikipedia-response';
import { WikipediaService } from '@modules/home/services/wikipedia.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css'],
})
export class WikipediaComponent implements OnInit {
  listWikipediaResponse!: WikipediaResponse;
  constructor(private readonly wikipediaSvc: WikipediaService) {}

  ngOnInit(): void {}

  onSearch(termino: string) {
    this.wikipediaSvc.searchWikipedia(termino).subscribe(
      (resOk) => {
        this.listWikipediaResponse = resOk;
      },
      (resFail) => {
        this.listWikipediaResponse.query.search = [];
        console.log('*************', resFail);
      }
    );
  }
}
