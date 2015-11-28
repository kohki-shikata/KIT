// add class current page navigation

function current_page() {

  var url = location.pathname;

  if(location.pathname != "/") {
      $('nav.subpage_sidebar a[href^="' + location.pathname + '"]').parent().addClass('active');
  } else $('nav.subpage_sidebar a:eq(0)').parent().addClass('active');
  //console.log(url);
  
}