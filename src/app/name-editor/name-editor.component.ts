import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Subject, Subscription, Observable } from 'rxjs';

@Component({
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  name = new FormControl('');
  emiter: Subject<number> = new Subject<number>();
  emiter$: Observable<number> = this.emiter.asObservable();
  value: number = 0;
  isSubscribed: boolean = false;
  sub: Subscription;
  emitedList = [];

  onEmit() {
    this.emiter.next(this.value++);
  }

  onUpdate() {
    this.name.setValue('ravi');
  }

  onSubscribe() {
    this.isSubscribed = !this.isSubscribed;
    if (this.isSubscribed) {
      this.sub = this.emiter$.subscribe(
        (val) => {
          this.emitedList.push(`value emitted: ${val}`);
        }
      )
    }
    else {
      this.sub.unsubscribe()
    }
  }
}
