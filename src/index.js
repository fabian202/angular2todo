import {Component, View, bootstrap} from 'angular2/angular2';
import {A2} from 'a-2';

@Component({
  selector: 'main'
})

@View({
  directives: [A2],
  template: `
    <a-2></a-2>
  `
})

class Main {

}

bootstrap(Main);
