jQuery(document).ready(function(){
	var cities = [];
	var groups = $('ul li:has(ul)');
	$('h2').each(function(){
		var name = $(this).children('a').attr('name');
		cities.push('<a href="#'+name+'">' + $.trim($(this).text().split('(')[0]) + '</a>');
	})
	$('hr').before('<p><a href="#top" title="Back to top">to top &#8593;</a></p>');
	$('#holder').append('<p>This site covers ' + cities.length + ' areas, the closer to Roanoke, the more reliable the data: ' + cities.join(', ') + '. There are '+groups.length+' groups, resources, and events listed here.</p>');
});