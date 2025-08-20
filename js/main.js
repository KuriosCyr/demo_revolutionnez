

$(function () {
   
    $('.button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
            }
            else {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default');
            }
        }

        // Initialization
        function init() {

            updateDisplay();

            // Inject the icon if applicable
            if ($button.find('.state-icon').length == 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
            }
        }
        init();
    });
});

$(document).ready(function() {
            
            $('#myModal .modal-dialog').css({
                top: 0,
                left: 0
            });
        
            $('#myModal .modal-content')
            .resizable({
                minWidth: 25,
                minHeight: 75,
                handles: 'n, e, s, w, ne, sw, se, nw',
            })
            .draggable({
                handle: '.modal-header'
            });
      
          $("#slider").slider({
              animate: true,
              value:1,
              min: 0,
              max: 100,
              step: 1,
              slide: function(event, ui) {
                  update(1,ui.value); //changed
              }
          });

          $("#slider2").slider({
              animate: true,
              value:0,
              min: 0,
              max: 100,
              step: 1,
              slide: function(event, ui) {
                  update(2,ui.value); //changed
              }
          });
          
          $("#slider3").slider({
              animate: true,
              value:0,
              min: 0,
              max: 100,
              step: 1,
              slide: function(event, ui) {
                  update(3,ui.value); //changed
              }
          });
          
          $("#slider4").slider({
              animate: true,
              value:0,
              min: 0,
              max: 100,
              step: 1,
              slide: function(event, ui) {
                  update(4,ui.value); //changed
              }
          });
          
    	  $("#slider5").slider({
              animate: true,
              value:0,
              min: 0,
              max: 100,
              step: 1,
              slide: function(event, ui) {
                  update(5,ui.value); //changed
              }
          });
          
		  $("#slider6").slider({
              animate: true,
              value:0,
              min: 0,
              max: 100,
              step: 1,
              slide: function(event, ui) {
                  update(6,ui.value); //changed
              }
          });

		  $("#slider7").slider({
              animate: true,
              value:0,
              min: 0,
              max: 100,
              step: 1,
              slide: function(event, ui) {
                  update(7,ui.value); //changed
              }
          });

		  $("#slider8").slider({
              animate: true,
              value:0,
              min: 0,
              max: 100,
              step: 1,
              slide: function(event, ui) {
                  update(8,ui.value); //changed
              }
          });

		  $("#slider9").slider({
              animate: true,
              value:0,
              min: 0,
              max: 100,
              step: 1,
              slide: function(event, ui) {
                  update(9,ui.value); //changed
              }
          });

		  $("#slider10").slider({
              animate: true,
              value:0,
              min: 0,
              max: 100,
              step: 1,
              slide: function(event, ui) {
                  update(10,ui.value); //changed
              }
          });

		  $("#slider11").slider({
              animate: true,
              value:0,
              min: 0,
              max: 100,
              step: 1,
              slide: function(event, ui) {
                  update(11,ui.value); //changed
              }
          });
          
          //Added, set initial value.
          $("#amount").val(0);
          $("#amount4").val(0);
          $("#amount2").val(0);
          $("#amount3").val(0);
          $("#amount5").val(0);
          $("#amount6").val(0);
          $("#amount7").val(0);
          $("#amount8").val(0);
          $("#amount9").val(0);
          $("#amount10").val(0);
          $("#amount11").val(0);
          $("#amount-label").text(0);
          $("#amount2-label").text(0)
          $("#amount3-label").text(0);
          $("#amount4-label").text(0);
          $("#amount5-label").text(0);
          $("#amount6-label").text(0);
          $("#amount7-label").text(0);
          $("#amount8-label").text(0);
          $("#amount9-label").text(0);
          $("#amount10-label").text(0);
          $("#amount11-label").text(0);



          
          update();
      });

      //changed. now with parameter
      function update(slider,val) {
        //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
        var $amount = slider == 1?val:$("#amount").val();
        var $amount2 = slider == 3?val:$("#amount2").val();
        var $amount3 = slider == 4?val:$("#amount3").val();
        var $amount4 = slider == 2?val:$("#amount4").val();
        var $amount5 = slider == 5?val:$("#amount5").val();
        var $amount6 = slider == 6?val:$("#amount6").val();
        var $amount7 = slider == 7?val:$("#amount7").val();
        var $amount8 = slider == 8?val:$("#amount8").val();
        var $amount9 = slider == 9?val:$("#amount9").val();
        var $amount10 = slider == 10?val:$("#amount10").val();
        var $amount11 = slider == 11?val:$("#amount11").val();


        /* commented
        $amount = $( "#slider" ).slider( "value" );
        $duration = $( "#slider2" ).slider( "value" );
         */

         $( "#amount" ).val($amount);
         $( "#amount-label" ).text($amount);
         $( "#amount2" ).val($amount2);
         $( "#amount2-label" ).text($amount2);
         $( "#amount3" ).val($amount3);
         $( "#amount3-label" ).text($amount3);
         $( "#amount4" ).val($amount4);
         $( "#amount4-label" ).text($amount4);
         $( "#amount5" ).val($amount5);
         $( "#amount5-label" ).text($amount5);
         $( "#amount6" ).val($amount6);
         $( "#amount6-label" ).text($amount6);
         $( "#amount7" ).val($amount7);
         $( "#amount7-label" ).text($amount7);
         $( "#amount8" ).val($amount8);
         $( "#amount8-label" ).text($amount8);
         $( "#amount9" ).val($amount9);
         $( "#amount9-label" ).text($amount9);
         $( "#amount10" ).val($amount10);
         $( "#amount10-label" ).text($amount10);
         $( "#amount11" ).val($amount11);
         $( "#amount11-label" ).text($amount11);





         $('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         $('#slider2 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount4+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         $('#slider3 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount2+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         $('#slider4 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount3+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         $('#slider5 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount5+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         $('#slider6 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount6+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         $('#slider7 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount7+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         $('#slider8 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount8+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         $('#slider9 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount9+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         $('#slider10 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount10+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         $('#slider11 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount11+' <span class="glyphicon glyphicon-chevron-right"></span></label>');




      }
      function readURL(input) {
        if (input.files && input.files[0]) {
      
          var reader = new FileReader();
      
          reader.onload = function(e) {
            $('.image-upload-wrap').hide();
      
            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();
      
            $('.image-title').html(input.files[0].name);
          };
      
          reader.readAsDataURL(input.files[0]);
      
        } else {
          removeUpload();
        }
      }
      
      function removeUpload() {
        $('.file-upload-input').replaceWith($('.file-upload-input').clone());
        $('.file-upload-content').hide();
        $('.image-upload-wrap').show();
      }
      $('.image-upload-wrap').bind('dragover', function () {
              $('.image-upload-wrap').addClass('image-dropping');
          });
          $('.image-upload-wrap').bind('dragleave', function () {
              $('.image-upload-wrap').removeClass('image-dropping');
      });
      
    $(document).ready(function() {
        $('#radioBtn a').on('click', function(){
            var sel = $(this).data('title');
            var tog = $(this).data('toggle');
            $('#'+tog).prop('value', sel);
            
            $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
            $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
        })
        // $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        //     e.preventDefault();
        //     $(this).siblings('a.active').removeClass("active");
        //     $(this).addClass("active");
        //     var index = $(this).index();
        //     $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        //     $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
        // });
    });


    