// $(document).ready(function() {
    // $('.tez888-full-width-button').on('click', function(e) {
        // e.preventDefault();
        // let search_params = new URLSearchParams(window.location.search);
        // let affiliate = search_params.get('btag_dynamic_parameter_id');
        // window.location.href = 'https://tez888.live/' + affiliate + window.location.search
    // })
// });


$(document).ready(function(){
    $('.tez888-full-width-button').on('click', function(e){
        e.preventDefault();
        let params = new URLSearchParams(window.location.search);
        let dynamicParam = params.get('btag_dynamic_parameter_id');
        
        let affiliateLink = 'https://amigomedia11064574.o18.click/c?o=21129939&m=12618&a=598357&aff_click_id={replace_it}&sub_aff_id={replace_it}';
        
        affiliateLink = affiliateLink.replace('{replace_it}', dynamicParam);

        window.location.href = affiliateLink;
    });
});

