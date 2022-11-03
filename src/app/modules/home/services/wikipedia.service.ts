import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { WikipediaResponse } from '../interface/wikipedia-response';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  private readonly apiUrl = environment.apiUrl;
  constructor(private readonly http: HttpClient) {}

  searchWikipedia(termino: string): Observable<WikipediaResponse> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      origin: '*',
      utf8: '1',
      formatversion: '2',
      srsearch: termino,
    };
    return this.http.get<WikipediaResponse>(this.apiUrl, { params });
  }
}
