import { doubleIt } from 'helpers';
import angular from 'angular/angular';

angular.module('MyApp', []);

angular.module('MyApp').controller('MyCtrl', function() {
	this.double = function(i:Number):Number {
		return doubleIt(i);
	}
});

angular.element(document).ready(function() {
	angular.bootstrap(document, ['MyApp']);
});
