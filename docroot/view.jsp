<%
/**
 * Copyright (c) 2000-2011 Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */
%>

<!--  load styles and meta -->
<script type="text/javascript">
<!--
loadHeads('<%=request.getContextPath() %>');
//-->
</script>

<div id="header" class="hide"></div>

<div class="processing_container"></div>
<div class="processing">
    <div class="processing_inner">
        <span class="processing_image">&nbsp;</span>
        <span class="processing_message">Loading...</span>
    </div>
</div>

<!-- load framework plugins -->

<script type="text/javascript">
<!--
loadPlugins('<%=request.getContextPath() %>');
//-->
</script>


<!-- Load Templates -->
<jsp:include page="templates/cubes.html" />
<jsp:include page="templates/measures.html" />
<jsp:include page="templates/workspace.html" />
<jsp:include page="templates/workspace-dropzones.html" />
<jsp:include page="templates/workspace-toolbar.html" />
<jsp:include page="templates/open-dialog.html" />
<jsp:include page="templates/selections.html" />
<jsp:include page="templates/drillthrough.html" />
<jsp:include page="templates/drillthrough-view.html" />


<!-- load the ga script  -->

<script type="text/javascript" src="<%=request.getContextPath()%>/js/ga.js"></script>        
        
