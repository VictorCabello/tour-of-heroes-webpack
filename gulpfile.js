
var gulp = require('gulp');
var sonarqubeScanner = require('sonarqube-scanner');
 
gulp.task('default', function(callback) {
	  sonarqubeScanner({
			    serverUrl : "https://sonarcloud.io",
			    token : "2024767db7a9383410d8afa0e2c983583c14b9f3",
			    options : {
						      "sonar.organization": "victorcabello-github"
			    }
		  }, callback);
});
