UPPERCASE_IO.MAIN = METHOD({

	run : function(addRequestListener, addPreprocessor) {
		'use strict';
		
		var
		//IMPORT: Less
		Less = require('less');
		
		addRequestListener(SML_BRIDGE({
			rootPath : './UPPERCASE_IO/view'
		}).requestListener);
		
		addPreprocessor({
			extension : 'less',
			preprocessor : function(content, response) {
				
				Less.render(content, function(error, output) {
					response({
						content : output.css,
						contentType : 'text/css',
						version : CONFIG.version
					});
				});
			}
		});
	}
});
