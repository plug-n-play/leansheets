'use strict';

angular.module('histogramChartCtrl', []).
  controller('HistogramChartCtrl', ['$scope', 'GoogleService', function($scope, GoogleService) {
  	var directivePromise = GoogleService.getData('Feature');
  	directivePromise.then(function (success){
  		$scope.featureConfig = $scope.getOptionsForChart('Feature', $scope.parseData(success));
  	}, function (error) {
  		alert(error);
  	});

  	var defectsPromise = GoogleService.getData('Defect');
  	defectsPromise.then(function (success) {
  		$scope.defectConfig = $scope.getOptionsForChart('Defect', $scope.parseData(success));
  	}, function (error) {
  		alert(error);
  	});

	$scope.getOptionsForChart = function (title, data) {
		return {
			options: {
				chart: {
					type: 'column'
				},
				xAxis: {
          	title: {
            	text: 'Lead Times'
          	},
        	categories: data.categories
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Fequency'
          }
        }
			},
			series: [{
        data: data.frequency
			}],
			title: {
				text: title + ' Historgam'
			}
		}
	};

$scope.parseData = function (csv) {
    // key of data array is the lead time
    // value of data array is the number of times lead time shows in data set 
    var data = new Array();
    var obj = {
      categories: new Array(),
      frequency: new Array()
    };

    var lines = csv.split("\n");
    lines = $scope.popLastIndexOfArrayIfEmpty(lines);   
    
    for (var i in lines) {
      var line = lines[i].split(",");
      if (!data[line[1]]) {
        data[line[1]] = 1;
      } else {
          data[line[1]]++;
      }
    }

    $.each(data, function(key, value) {
      if (value !== undefined && value !== null && value != "") {
        obj.categories.push(key);
        obj.frequency.push(value);
      }
    });

    return obj;
  };

	$scope.popLastIndexOfArrayIfEmpty = function (arry) {
      	if (arry[arry.length] == "" || arry[arry.length] == null) {
        	arry.pop();
	  	}
  		return arry;
	};

}]);