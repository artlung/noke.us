<?php
//
?>
<html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
<script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#username=xa-4b50e51e2d269db9"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js"></script>
<script type="text/javascript" src="javascript.js"></script>
</head>
<body>
<div id="container">
<div id="content">
<?php

require 'includes/markdown.php';

$sites = file_get_contents('resource.txt');

//$sites = preg_replace("/(https?:\/\/[^\n\r]+)/",'<a href="\\1">\\1</a>',$sites);

print Markdown($sites);

?>
</div>
<div id="footer">
	<!-- AddThis Button BEGIN -->
	<div class="addthis_toolbox addthis_default_style">
	<a href="http://addthis.com/bookmark.php?v=250&amp;username=xa-4b50e51e2d269db9" class="addthis_button_compact">Share</a>
	<span class="addthis_separator">|</span>
	<a class="addthis_button_facebook"></a>
	<a class="addthis_button_myspace"></a>
	<a class="addthis_button_google"></a>
	<a class="addthis_button_twitter"></a>
	</div>
	<!-- AddThis Button END -->
	<div class="gAd160x90">
	<script type="text/javascript"><!--
	google_ad_client = "pub-1670413378763429";
	/* 160x90, created 11/5/09 */
	google_ad_slot = "9338532962";
	google_ad_width = 160;
	google_ad_height = 90;
	//-->
	</script>
	<script type="text/javascript"
	src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
	</script>

</div>
</div>
</body>
