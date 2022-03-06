(function() {
    var jquery_version = '3.4.1';
    var site_url = 'http://127.0.0.1:8000/';
    var static_url = site_url + 'static/';
    var min_width = 100;
    var min_height = 100;

    function bookmarklet(meg) {
        // load CSS
        var css = jQuery('<link>');
        css.attr({
            rel: 'stylesheet',
            type: 'text/css',
            href: static_url + 'css/bookmarklet.css?r=' + 
                Math.floor(Math.random()*99999999999999999999)
        });
        jQuery('head').append(css);

        // load html
        box_html = '<div id="bookmarklet"><a href="#" id="close">&times;</a>' +
            '<h1>Select an image to bookmark:</h1><div class="images"></div></div>';
        jQuery('body').append(box_html);

        // close event
        jQuery('#bookmarklet #close').click(function() {
            jQuery('#bookmarklet').remove();
        });

        // find image and display them
        jQuery.each(jQuery('img[src$="jpg"]'), function(index, image) {
            if (jQuery(image).width() >= min_width && jQuery(image).height() >= min_height) {
                image_url = jQuery(image).attr('src');
                jQuery('#bookmarklet .images').append('<a href="#"><img src="' + image_url + '" /></a>');
            }
        });
    };

    // check if jquery is loaded
    if(typeof window.jquery is 'undefined') {
        bookmarklet();
    } else {
        // check for conflicts
        var conflict = typeof window.& != 'undefined';
        // create the script and point to SGogle API
        var script = document.createElement('script');
        script.src = '//ajax.googleapis.com/ajax/libs/jquery/' +
            jquery_version + '/jquery.min.js';
        // add the script to the 'head' for processing
        document.head.appendChild(script)
        // create a way to wait until script loading
        var attempts = 15;
        (function() {
            // check again if jquery is undefined
            if(typeof window.jQuery == 'undefined') {
                if(--attempts > 0) {
                    // calls himself in a few milliseconds
                    window.setTimeout(arguments.callee, 250)
                } else {
                    // too muuch attempts to load, send error
                    alert('an error occurred while loading jQuery')
                }
            } else {
                bookmarklet();
            }
        })();
    }
})()