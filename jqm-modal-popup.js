/**
 *Copyright (c) 2013 Fabrizio Fortunato, http://cortesconta.net/
 *
 *Permission is hereby granted, free of charge, to any person
 *obtaining a copy of this software and associated documentation
 *files (the "Software"), to deal in the Software without
 *restriction, including without limitation the rights to use,
 *copy, modify, merge, publish, distribute, sublicense, and/or sell
 *copies of the Software, and to permit persons to whom the
 *Software is furnished to do so, subject to the following
 *conditions:

 *The above copyright notice and this permission notice shall be
 *included in all copies or substantial portions of the Software.

 *THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 *EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 *OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 *HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 *WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 *OTHER DEALINGS IN THE SOFTWARE.
 */

(function ($) {
    var methods = {
        init : function (options) {
            var that = this;
            var i;
            this.options = {
                headerTheme: 'b',
                btnOkText: 'Ok',
                btnCancelText: 'Cancel',
                btnOkTheme: 'b',
                btnCancelTheme: 'c',
                oneButtonOnly: false,
                maxWidth: '400',
                title: 'ModalPopup',
                body: 'Insert text here',
                onCancel: function() {
                    $('#' + that.selector).popup('close');
                },
                onOk: function() {
                    $('#' + that.selector).popup('close');
                },
            }

            for (i in options) this.options[i] = options[i];

            //Options of popup
            $('#' + this.selector).attr('data-role','popup');
            $('#' + this.selector).attr('data-overlay-theme','a');
            $('#' + this.selector).attr('style','max-width:' + this.options.maxWidth + 'px');
            $('#' + this.selector).addClass('ui-corner-all');
            $('#' + this.selector).addClass('ui-popup');
            $('#' + this.selector).addClass('ui-body-c');
            $('#' + this.selector).addClass('ui-overlay-shadow');
            $('#' + this.selector).attr('aria-disabled','false');
            $('#' + this.selector).attr('data-disabled','false');
            $('#' + this.selector).attr('data-shadow','true');
            $('#' + this.selector).attr('data-corners','true');
            $('#' + this.selector).attr('data-transition','none');
            $('#' + this.selector).attr('data-position-to','origin');



            //Title
            $('#' + this.selector).html('');
            $('#' + this.selector).append('<div data-role="header" data-theme="'
                               + this.options.headerTheme
                               + '" class="ui-corner-top\
                              ui-header" role="banner">\
                              <h1 class="ui-title" role="heading" aria-level="1"></h1>\
                              </div>');

            //Body
            var body = '<div data-role="content" data-theme="d" class="ui-corner-bottom ui-content\
                              ui-body-d" role="main">\
                              <h3 class="ui-title"></h3>\
                              <p></p>\
                              <a data-role="button" id="' + this.selector + '_btnOk"\
                              data-inline="true"  data-theme="'
                            + this.options.btnOkTheme
                            + '">'+ this.options.btnOkText+ '</a>';
            if (!this.options.oneButtonOnly) {
                body += '<a data-theme="' + this.options.btnCancelTheme + '" id="' + this.selector + '_btnCancel"\
                              data-inline="true" data-role="button">' + this.options.btnCancelText + '</a>';
            }
            body += '</div>';
            $('#' + this.selector).append(body);

          $('#' + this.selector + ' h1').text(options.title);
          $('#' + this.selector + ' p').text(options.body);
          $('#' + this.selector + '_btnOk').on('vclick',function(e){
              e.preventDefault();
              that.options.onOk();
          });
          $('#' + this.selector + '_btnCancel').on('vclick',function(e){
              e.preventDefault();
              that.options.onCancel();
          });
          $("#" + this.selector).on({
              popupbeforeposition: function () {
                  $('.ui-popup-screen').off();
              }
          });
        },
        open: function(options){
          $('#' + this.selector).popup();
          $('#' + this.selector).trigger('create');
          $('#' + this.selector).popup("open");
        },
        close: function(options) {
            $('#' + this.selector).popup('close');
        },
    };

    $.fn.ModalPopup = function( method ) {
        // Method calling logic
        if ( $.mobile ) {
            if ( methods[method] ) {
                return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
            } else if ( typeof method === 'object' || ! method ) {
                return methods.init.apply( this, arguments );
            } else {
                $.error( 'Method ' +  method + ' does not exist on jQuery.confirmPopup' );
            }
        }
        else {
            $.error( 'ModalPopup require jquery-mobile to work' );
        }
    };

})( jQuery );
