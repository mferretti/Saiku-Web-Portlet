


function loadJsFile(filename){
	var fileref=document.createElement('script');
	  fileref.setAttribute("type","text/javascript");
	  fileref.setAttribute("src", filename);
	  
	  appendToHead(fileref);
}

function loadInplaceJsFile(filename, defer){
	var fileref=document.createElement('script');
	  fileref.setAttribute("type","text/javascript");
	  fileref.setAttribute("src", filename);
	  if ( typeof defer != "undefined ")
		  fileref.setAttribute("defer", "defer");
	  appendToHead(fileref);
}


function loadCss(filename, media){
	 var fileref=document.createElement("link");
	  fileref.setAttribute("rel", "stylesheet");
	  fileref.setAttribute("type", "text/css");
	  fileref.setAttribute("href", filename);
	  if ( media != undefined ) {
		  fileref.setAttribute("media",media);
	  }
	  appendToHead(fileref);
}

function addMeta(name, content){
	var meta =document.createElement('meta');
	meta.setAttribute("name", name);
	meta.setAttribute("content", content);
}

function appendToHead(what){
	 if (typeof what!="undefined")
		 document.getElementsByTagName("head")[0].appendChild(what);
}

function appendCommentToHead(comment){
	 if (typeof comment!="undefined"){
		 var html = document.getElementsByTagName("head").innerHTML;
		 html = html + comment;
		 document.getElementsByTagName("head").innerHTML=html;
	 }
}


function loadHeads(context){
	appendCommentToHead('<!--[if lt IE 9]><script type="text/javascript" src='+context+'"/js/svgweb/svg.js" data-path='+context+'"/js/svgweb/"></script><![endif]-->');
	addMeta("svg.render.forceflash", "true");

	// Blueprint CSS 
	loadCss(context+'/css/blueprint/src/reset.css' ,'screen,projection');
	loadCss(context+'/css/blueprint/src/typography.css','screen,projection');
	loadCss(context+'/css/blueprint/src/forms.css','screen,projection');
	appendCommentToHead('<!--[if lt IE 8]><link rel="stylesheet" href="'+context+'/css/blueprint/src/ie.css\" type=\"text/css\" media=\"screen, projection\"><![endif]-->');

	
	//jQuery CSS 
	loadCss('http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/smoothness/jquery-ui.css','all' );

    // Saiku CSS 
	loadCss(context+'/css/saiku/src/styles.css');
	
}



function loadPlugins(context){
    // jQuery, jQuery UI
	loadInplaceJsFile('http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js');
	typeof(window.jQuery) !== "undefined" || document.write('<script src="'+context+'/js/jquery/jquery.min.js"><\/script>');
	loadInplaceJsFile('http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.min.js');
	loadInplaceJsFile(context+'/js/jquery/jquery-ui.min.js');
	loadInplaceJsFile(context+'/js/jquery/jquery-mobile-touch.js');

	// Backbone.js and deps 
	loadInplaceJsFile('http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.1.7/underscore-min.js');
    typeof(_) !== "undefined" || document.write('<script src="'+context+'/js/backbone/underscore.js"><\/script>');
    loadInplaceJsFile(context+'/js/backbone/json2.js');
    loadInplaceJsFile('http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.5.3/backbone-min.js');
    typeof(Backbone) !== "undefined" || document.write('<script src="'+context+'/js/backbone/backbone.js"><\/script>');
    
    //Loggly error logging service 
    loadInplaceJsFile(context+'/js/logger/janky.post.min.js');
    loadInplaceJsFile(context+'/js/logger/Logger.js','defer');

    // Saiku Project 
    loadInplaceJsFile(context+'/js/saiku/Settings.js');
    loadInplaceJsFile(context+'/js/saiku/models/Dimension.js');
    loadInplaceJsFile(context+'/js/saiku/views/DimensionList.js');
    loadInplaceJsFile(context+'/js/saiku/views/Toolbar.js');
    loadInplaceJsFile(context+'/js/saiku/views/Modal.js');
    loadInplaceJsFile(context+'/js/saiku/views/MDXModal.js');
    loadInplaceJsFile(context+'/js/saiku/views/SelectionsModal.js');
    loadInplaceJsFile(context+'/js/saiku/views/DrillthroughModal.js');
    loadInplaceJsFile(context+'/js/saiku/views/DrillthroughViewModal.js');
    loadInplaceJsFile(context+'/js/saiku/views/LoginForm.js');
    loadInplaceJsFile(context+'/js/saiku/views/AboutModal.js');
    loadInplaceJsFile(context+'/js/saiku/views/WorkspaceToolbar.js');
    loadInplaceJsFile(context+'/js/saiku/views/WorkspaceDropZone.js');
    loadInplaceJsFile(context+'/js/saiku/views/Table.js');
    loadInplaceJsFile(context+'/js/saiku/views/Workspace.js');
    loadInplaceJsFile(context+'/js/saiku/views/DeleteQuery.js');
    loadInplaceJsFile(context+'/js/saiku/views/OpenQuery.js');
    loadInplaceJsFile(context+'/js/saiku/views/SaveQuery.js');
    loadInplaceJsFile(context+'/js/saiku/views/Tab.js');
    loadInplaceJsFile(context+'/js/saiku/models/Repository.js');
    loadInplaceJsFile(context+'/js/saiku/models/Properties.js');
    loadInplaceJsFile(context+'/js/saiku/models/Result.js');
    loadInplaceJsFile(context+'/js/saiku/models/QueryAction.js');
    loadInplaceJsFile(context+'/js/saiku/models/QueryScenario.js');
    loadInplaceJsFile(context+'/js/saiku/models/Query.js');
    loadInplaceJsFile(context+'/js/saiku/models/Session.js');
    loadInplaceJsFile(context+'/js/saiku/models/SessionWorkspace.js');
    loadInplaceJsFile(context+'/js/saiku/models/Member.js');
    loadInplaceJsFile(context+'/js/saiku/Saiku.js');
    loadInplaceJsFile(context+'/js/saiku/adapters/SaikuServer.js');
    loadInplaceJsFile(context+'/js/saiku/routers/QueryRouter.js');
            
    // Saiku plugins 
    loadInplaceJsFile(context+'/js/saiku/plugins/Chart/plugin.js','defer');
    loadInplaceJsFile(context+'/js/saiku/plugins/Statistics/plugin.js','defer');
    loadInplaceJsFile(context+'/js/saiku/plugins/I18n/plugin.js','defer');
    loadInplaceJsFile(context+'/js/saiku/plugins/BIServer/plugin.js','defer');
}
