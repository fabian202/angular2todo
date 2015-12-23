import {Component, View, bootstrap} from 'angular2/angular2';
import {A2} from 'a-2';

@Component({
  selector: 'app'
})

@View({
  directives: [A2],
  templateUrl: 'app.html'
})

class Main {

}

bootstrap(Main);
