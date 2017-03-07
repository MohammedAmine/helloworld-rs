Ext.Ajax.request({
	url : 'http://localhost:8080/jboss-helloworld-rs/rest/json',

	success : function(response, opts) {
		var obj = Ext.decode(response.responseText);
		console.log(obj.result);
		Ext.application({
			name : 'Sencha App',
			launch : function() {
				Ext.create('Ext.panel.Panel', {
					title : 'Sencha App',
					width : 300,
					height : 300,
					bodyPadding : 10,
					renderTo : 'app',
					html : obj.result
				});
			}
		});
	},

	failure : function(response, opts) {
		console.log('server-side failure with status code ' + response.status);
	}
});
