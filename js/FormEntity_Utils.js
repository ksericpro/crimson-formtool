var FormEntityUtils = {}

FormEntityUtils.ENTITY_TYPE_SECTION = "ENTITY_TYPE_SECTION";
FormEntityUtils.ENTITY_TYPE_SECTION_SUBDIV = "ENTITY_TYPE_SECTION_SUBDIV";
//FormEntityUtils.ENTITY_TYPE_SECTION_DIV_CONTAINER = "ENTITY_TYPE_SECTION_DIV_CONTAINER";

FormEntityUtils.SECTION_TREES = (function () {
    function SECTION_TREES(params) {
        this.ID = params.ID || "";
		this.Label = params.Label || "";
		this.Height = params.Height || "";
		this.Width = params.Width || "";
		this.ParentID = params.ParentID || "";
		this.ElementType = params.ElementType || "";
		//this.LeftSiblingID = params.LeftSiblingID || "";
		this.HorizontalPosition = params.HorizontalPosition || "";
		//this.Blocker = params.Blocker || "";
    }

	SECTION_TREES.prototype.clearAll = function () {
		this.ID = "";
		this.Label = "";
		this.Height = "";
		this.Width = "";
		this.ParentID = "";
		this.ElementType = "";
		//this.LeftSiblingID = "";
		this.HorizontalPosition = "";
		//this.Blocker = "";
	}
    return SECTION_TREES;
}());