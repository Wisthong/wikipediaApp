export interface WikipediaResponse {
  batchcomplete: boolean;
  continue:      Continue;
  query:         Query;
}

export interface Continue {
  sroffset: number;
  continue: string;
}

export interface Query {
  searchinfo: Searchinfo;
  search:     Search[];
}

export interface Search {
  ns:        number;
  title:     string;
  pageid:    number;
  size:      number;
  wordcount: number;
  snippet:   string;
  timestamp: string;
}

export interface Searchinfo {
  totalhits: number;
}
