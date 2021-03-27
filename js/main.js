


$(document).ready(function(){

    /*==== scroll js for header ======*/
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.site-header').addClass('fixed-top',500);
      $('.page-heading').addClass('hidden',500);
    } else {
      $('.site-header').removeClass('fixed-top',500);
      $('.page-heading').removeClass('hidden',500);
    }
  });
  /*=== for testimonial slider ======*/
  $('.testimonial-section .carousel').on('slide.bs.carousel', function (e) {
    var offeringclass = e.relatedTarget.classList[1];
     $(".testimonial-section").removeClass('oghs pentecost peaceGlobal-witness christmas-joy');
      $(".testimonial-section").addClass(offeringclass);
  });

  /*=== to close menu ----*/
  $('.navbar-collapse .btn-close').click(function(){
    $('.navbar-collapse').removeClass('show',300);
  });

  /*==== change content in select drodown *======*/

  $(function() {
    $('.select-content').hide();
    $("#option1").show();
    //listen to dropdown for change
    $(".selectOffering").change(function(){
      $('.select-content').hide();
      $('#'+$(this).val()).show();
    });
  });

/*==== pagination *======*/

  $('.pagination-wrapper .tab-pane').each(function() {
    if($(this).hasClass('active')){
      var items =$(this).find('.pagination-wrap .item-in');
      console.log(items);
      var numItems = items.length;
      var perPage = 9;
      if($('.pagination-wrap').hasClass('stories-wrap')) {
        var perPage = 12;
      }
      items.slice(perPage).hide();
      $(this).find('.pagination-container').pagination({
            items: numItems,
            itemsOnPage: perPage,
            prevText: "<",
            nextText: ">",
            onPageClick: function (pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                items.hide().slice(showFrom, showTo).show();
            }
        });
      }
  });

  $('span[data-toggle="tab"]').on('shown.bs.tab', function (e)  {
    var currId = $(e.target).attr("data-target");
    var items = $(currId).find('.pagination-wrap .item-in');
    items.show();
    console.log(items);
    var numItems = items.length;
    var perPage = 9;
      if($('.pagination-wrap').hasClass('stories-wrap')) {
    var perPage = 12;
  }
    items.slice(perPage).hide();
   
    $(currId).find('.pagination-container').pagination({
          items: numItems,
          itemsOnPage: perPage,
          prevText: "<",
          nextText: ">",
          onPageClick: function (pageNumber) {
              var showFrom = perPage * (pageNumber - 1);
              var showTo = showFrom + perPage;
              items.hide().slice(showFrom, showTo).show();
          }
    });
    });
  
});

