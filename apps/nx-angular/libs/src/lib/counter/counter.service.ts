import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CounterService {
  private _count$ = new BehaviorSubject<number>(0);
  count$ = this._count$.asObservable();

  increment() { this._count$.next(this._count$.value + 1); }
  decrement() { this._count$.next(this._count$.value - 1); }
}

/*
export class CounterService {
  // Signal do contador
  private _count = signal(0);

  // Computed signal exposto publicamente (opcionalmente pode ser só o signal direto)
  readonly count = computed(() => this._count());

  increment() { this._count.update(value => value + 1); }
  decrement() { this._count.update(value => value - 1); }
}*/