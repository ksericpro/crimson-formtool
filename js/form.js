var i = 0; /* Set Global Variable i */
var MAIN_DIV = "main_div";
var DIV_CLASS = "form-group";
var INPUT_STYLE = "width:60%; font-Size:12pt;";

function increment(){
	i += 1; /* Function for automatic increment of field's "Name" attribute. */
}

////////////////////
// Create Div
////////////////////
function createDivElement()
{
	var div_id = MAIN_DIV + "_group_" + i;
	var div = document.createElement('div');
	$(div).addClass("form-group")
		.html("")
		.appendTo($("#"+MAIN_DIV)); //main div
		/*.click(function () {
			$(this).remove();
		})*/
		//.hide()
		//.slideToggle(300);
		//.delay(2500)
		//.slideToggle(300);
		/*.queue(function () {
			$(this).remove();
		}
		);*/
	div.setAttribute("id", div_id);
	return div;
}
/*
-----------------------------------
Function to edit Element Dynamically
------------------------------------
*/
function editProperty(childDiv)
{
	$("#propertyModal").modal("show");
	var label = jQuery("#"+childDiv).closest(".form-group").find("label");
	var input = jQuery("#"+childDiv).closest(".form-group").find("input");
	$("#property_select_widget_label_value").val(label.text());	
	$("#property_select_widget_width_value").val(input.width());
	
	//add handler to button
	$("#propertyModal-update").unbind( "click" );
	$("#propertyModal-update").click(function() {
		label.text($("#property_select_widget_label_value").val());	
		var width = $("#property_select_widget_width_value").val();
		if (!isNaN(width))
		{
			input.width(width);
		}
	});
}
/*
---------------------------------------------

Function to Remove Form Elements Dynamically
---------------------------------------------

*/
function removeElement(parentDiv, childDiv){
	if (childDiv == parentDiv){
		console.log("The parent div cannot be removed.");
	}
	else if (document.getElementById(childDiv)){
		var child = document.getElementById(childDiv);
		var parent = document.getElementById(parentDiv);
		parent.removeChild(child);
	}
	else{
		console.log("Child div has already been removed or does not exist.");
		return false;
	}
}
/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Name text field.

----------------------------------------------------------------------------
*/
function nameFunction(){
	//Create Div
	increment();
	var div = createDivElement();
	
	//create Span
	var span = document.createElement('span');
	
	//Input
	var input = document.createElement("INPUT");
	input.setAttribute("type", "text");
	input.setAttribute("placeholder", "Name");
	input.setAttribute("style", INPUT_STYLE);
	
	//label
	var label = document.createElement("Label");
	label.setAttribute("for", input);
	label.innerHTML = "Name&nbsp;";
	//label.text = "Name";
	span.appendChild(label);

	//Property Icon
	var a2 = document.createElement("IMG");
	a2.setAttribute("src", "images/properties.png");

	//Remove Icon
	var a1 = document.createElement("IMG");
	a1.setAttribute("src", "images/remove.png");
	
	//Attach Input to Span
	input.setAttribute("Name", "textelement_" + i);
	span.appendChild(input);
	
	//Attach Handler for Propety & Remove
	a1.setAttribute("onclick", "removeElement('" + MAIN_DIV + "','"+ div.getAttribute("id") +"')");
	a2.setAttribute("onclick", "editProperty('" + div.getAttribute("id") + "')");
	span.appendChild(a1);
	span.appendChild(a2);
	span.setAttribute("id", MAIN_DIV + "_span_" + i);

	//Append whole form group to Div
	div.appendChild(span);
}

/*
----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Button.

----------------------------------------------------------------------------
*/
function buttonFunction(){
	//Create Div
	increment();
	var div = createDivElement();
	
	//create Span
	var span = document.createElement('span');
	
	//Button
	var btn = document.createElement("Button");        // Create a <button> element
	var t = document.createTextNode("Name");       // Create a text node
	btn.setAttribute("class", "btn btn-default");
	btn.appendChild(t);
	
	//Property Icon
	var a2 = document.createElement("IMG");
	a2.setAttribute("src", "images/properties.png");

	//Remove Icon
	var a1 = document.createElement("IMG");
	a1.setAttribute("src", "images/remove.png");
	
	//Attach Button to Span
	span.appendChild(btn);
	
	//Attach Handler for Propety & Remove
	a1.setAttribute("onclick", "removeElement('" + MAIN_DIV + "','"+ div.getAttribute("id") +"')");
	a2.setAttribute("onclick", "editProperty('" + div.getAttribute("id") + "')");
	span.appendChild(a1);
	span.appendChild(a2);
	span.setAttribute("id", MAIN_DIV + "_span_" + i);

	//Append whole form group to Div
	div.appendChild(span);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the E-mail text field.

------------------------------------------------------------------------------
*/
function emailFunction(){
var r = document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder", "Email");
var g = document.createElement("IMG");
g.setAttribute("src", "images/remove.png");
increment();
y.setAttribute("Name", "textelement_" + i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('" + MAIN_DIV + "','id_" + i + "')");
r.appendChild(g);
r.setAttribute("id", "id_" + i);
document.getElementById(MAIN_DIV).appendChild(r);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Contact text field.

------------------------------------------------------------------------------
*/
function contactFunction(){
var r = document.createElement('span');
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("placeholder", "Contact");
var g = document.createElement("IMG");
g.setAttribute("src", "images/remove.png");
increment();
y.setAttribute("Name", "textelement_" + i);
r.appendChild(y);
g.setAttribute("onclick", "removeElement('" + MAIN_DIV + "','id_" + i + "')");
r.appendChild(g);
r.setAttribute("id", "id_" + i);
document.getElementById(MAIN_DIV).appendChild(r);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Message textarea field.

------------------------------------------------------------------------------
*/
function textareaFunction(){
	alert("Not Ready");
	return;
	var r = document.createElement('span');
	var y = document.createElement("TEXTAREA");
	var g = document.createElement("IMG");
	y.setAttribute("cols", "17");
	y.setAttribute("placeholder", "message..");
	g.setAttribute("src", "images/remove.png");
	increment();
	y.setAttribute("Name", "textelement_" + i);
	r.appendChild(y);
	g.setAttribute("onclick", "removeElement('" + MAIN_DIV + "','id_" + i + "')");
	r.appendChild(g);
	r.setAttribute("id", "id_" + i);
	document.getElementById(MAIN_DIV).appendChild(r);
}
/*
-----------------------------------------------------------------------------

Functions that will be called upon, when user click on the Reset Button.

------------------------------------------------------------------------------
*/
function resetElements(){
	document.getElementById(MAIN_DIV).innerHTML = '';
}