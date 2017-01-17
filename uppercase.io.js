require(process.env.UPPERCASE_PATH + '/LOAD.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'UPPERCASE_IO',
		isDevMode : true,
		webServerPort : 8831
	},
	NODE_CONFIG : {
		isNotUsingCPUClustering : true
	}
});
