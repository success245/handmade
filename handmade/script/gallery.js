
gm_gallery();

function gm_gallery() {
    
    var gal_container = $('.image-container'),
        gal_image     = $('.ic-img'),
        gal_next      = $('.ic-next-a'),
        gal_prev      = $('.ic-prev-a'),
        gal_close     = $('.ic-close-a'),
        gal_init      = $('.pbt-images-a'), // This anchor initiates the image pop-up
        pro_init      = $('.pro-images-a'),
        gal_inite     = '.pbt-images-a, .pro-images-a',
        last_gal_a  = $(gal_init).last(),
        first_gal_a = $(gal_init).first();
    
    // Click open
    $(gal_init).on("click", function() {
        
        $(gal_next).show();
        var img_code = $(this).attr('mysrc'),
            img_src  = "../images/gm/pht/" + img_code + ".jpg";
        gal_container.show();
        gal_image.attr("src",img_src).attr('mysrc',img_code);
        
        return false;
    });
    // Product photos click
    $(pro_init).on("click", function() {
        
        $(gal_next).show();
        var img_code = $(this).attr('mysrc'),
            img_src  = "../../images/gm/pht/" + img_code + ".jpg";
        gal_container.show();
        gal_image.attr("src",img_src).attr('mysrc',img_code);
        
        return false;
    });
    
    //Click close 
    $(gal_close).on("click", function(){
        
        gal_container.fadeOut();
        
        return false;
    });
    
    //Next image
    $(gal_next).on("click", function() {
        
        $(gal_prev).show();
        var a_src  = $(gal_image).attr('mysrc'),
            this_a = $(gal_inite + '[mysrc=' + a_src + ']'),
            next_a = $(this_a).next('a'),
            next_a_attr = $(next_a).attr('mysrc');
        var next_div = $(this_a).parent('div').next('div'),
            inner_a = $(next_div).children('a:first-child'),
            inner_a_attr = $(inner_a).attr('mysrc');
        
        $(next_a).click();

        if(next_a_attr == null) {
            $(inner_a).click();
        }
        
        if(next_a_attr == null && inner_a_attr == null) {
            $(gal_next).hide();
        }
        
        return false;
    });
    
    //Prev image
    $(gal_prev).on("click", function() {
        
        $(gal_next).show();
        var a_src  = $(gal_image).attr('mysrc'),
            this_a = $(gal_inite + '[mysrc=' + a_src + ']'),
            prev_a = $(this_a).prev('a'),
            prev_a_attr = $(prev_a).attr('mysrc');
        var next_div = $(this_a).parent('div').prev('div'),
            inner_a = $(next_div).children('a:last-child'),
            inner_a_attr = $(inner_a).attr('mysrc');

        
        $(prev_a).click();
        
        if(prev_a_attr == null) {
            $(inner_a).click();
        }
        
        if(prev_a_attr == null && inner_a_attr == null) {
            $(gal_prev).hide();
        }
        
        return false;
    });
    
} 