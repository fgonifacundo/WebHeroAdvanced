
 function init_plugins() {
    $(function () {
    
        /* $('.px-nav').pxNav("expand"); */
        $('.px-nav').pxNav("collapse");
        
        $('body > .px-footer').pxFooter();
    
        $('#navbar-notifications').perfectScrollbar();
        $('#navbar-messages').perfectScrollbar();
    });
 };

