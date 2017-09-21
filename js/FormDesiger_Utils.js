var FormDesignerUtils = {}

FormDesignerUtils.ELEMENT_INPUT = "INPUT";
FormDesignerUtils.ELEMENT_INPUT = "BUTTON";
FormDesignerUtils.SOURCE_CLASS_ARRAY = new Array();

/**
* function to load a given css file 
*/ 
FormDesignerUtils.loadCSS = function(href) {
    var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"'>");
		$("head").append(cssLink);   
}
/**
* function to load a given js file 
*/ 
FormDesignerUtils.loadJS = function(href) {
    var jsLink = $("<script type='text/javascript' src='"+src+"'>");
	$("head").append(jsLink);   
}

//Get Current DateTime String
FormDesignerUtils.getCurrentDateTimeString = function()
{
	var d = new Date();
	return d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getMilliseconds();
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

Object.clear = function(obj) {
    for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			delete obj[prop];
		}
	}
}

FormDesignerUtils.addClass = function(source, classname) { 
	FormDesignerUtils.SOURCE_CLASS_ARRAY[source] = classname;
	//alert("Type of MARKS is :" + FormDesignerUtils.SOURCE_CLASS_ARRAY[source]);
	//alert(Object.size(FormDesignerUtils.SOURCE_CLASS_ARRAY));
}

FormDesignerUtils.executeClass = function() { 
	for (var prop in FormDesignerUtils.SOURCE_CLASS_ARRAY) {
		if (FormDesignerUtils.SOURCE_CLASS_ARRAY.hasOwnProperty(prop)) {
			//delete obj[prop];
			$('#' + prop).addClass(FormDesignerUtils.SOURCE_CLASS_ARRAY[prop]);
			//alert(prop + ":" + FormDesignerUtils.SOURCE_CLASS_ARRAY[prop]);
			delete FormDesignerUtils.SOURCE_CLASS_ARRAY[prop];
		}
	}
	
//$('#main_div_c_1_s_2').addClass('col-md-6 col-sm-6 col-xs-6');
}

FormDesignerUtils.clearClass = function() { 
	Object.clear(FormDesignerUtils.SOURCE_CLASS_ARRAY);
}