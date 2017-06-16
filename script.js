
(function( $ ){
   $.fn.dMenu = function(options) {

        var links = [];
        var anchors = $(this).find("li a");
        $(anchors).each(function() { links.push($(this).attr('href')) });
        var currentPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

        for (var i = 0; i < links.length; i++) {

            if (currentPage == 'index.php' || currentPage == '') {
                $('#'+$(this).attr('id')+' li a[href="index.php"]').parent('li').addClass(options.className);
            }
            if (currentPage == links[i]) {
               $('#'+$(this).attr('id')+' li a[href="'+ links[i]+'"]').parent('li').addClass(options.className);
            }
        }

      return this;

   };
})( jQuery );

$('#menu').dMenu({
    className: "active"
});

