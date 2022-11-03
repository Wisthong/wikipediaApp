import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  @ViewChild('txtBusqueda') busqueda!: ElementRef<HTMLInputElement>;
  @Output() terminoBusqueda: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();

  constructor() {}

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(500)).subscribe((resOk) => {
      if (resOk.trimStart().length > 0) {
        this.terminoBusqueda.emit(resOk.trimStart());
      } else {
        this.terminoBusqueda.emit(resOk);
      }
    });
  }

  onTeclaPresionada() {
    this.debouncer.next(this.busqueda.nativeElement.value);
  }
}
