import {ComponentMetadata as Component, ViewMetadata as View} from 'angular2/angular2';

@Component({
  selector: 'a-2'
})

@View({
  templateUrl: 'a-2.html'
})

export class A2 {

  constructor() {
    console.info('A2 Component Mounted Successfully');
  }

}
