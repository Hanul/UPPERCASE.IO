UPPERCASE_IO.MAIN = METHOD({

	run : (addRequestListener, addPreprocessor) => {
		
		let Less = require('less');
		
		addRequestListener(SML.Bridge({
			rootPath : './UPPERCASE_IO/view'
		}).requestListener);
		
		addPreprocessor({
			extension : 'less',
			preprocessor : (content, response) => {
				
				Less.render(content, (error, output) => {
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
