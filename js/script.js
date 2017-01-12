/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

(function ($, Drupal, window, document) {

  Drupal.behaviors.simply = {
    attach: function (context, settings) {

      $(window).resize(function () {
        // Execute code when the window is resized.
        if($(window).width() < 769) {
          $('#block-simply-main-menu > h2.visually-hidden').click(function() {
            if($('#block-simply-main-menu > .menu').hasClass('menushow') === true) {
              $('#block-simply-main-menu > .menu').removeClass('menushow', 'linear');
              $('#block-simply-main-menu > .menu').addClass('menuhide', 'linear');
            }
            else if($('#block-simply-main-menu > .menu').hasClass('menuhide') === true) {
              $('#block-simply-main-menu > .menu').removeClass('menuhide', 'linear');
              $('#block-simply-main-menu > .menu').addClass('menushow', 'linear');
            }
            else {
              $('#block-simply-main-menu > .menu').addClass('menushow', 'linear');
            }
          });
        }
        else {
          $('#block-simply-main-menu > .menu').show();
        }
      });

      $(document).ready(function () {
        // Execute code once the DOM is ready.
        // Mobile Menu Functionality Handled through Toggle
        if($(window).width() < 769) {
          $('#block-simply-main-menu > h2.visually-hidden').click(function() {
            if($('#block-simply-main-menu > .menu').hasClass('menushow') === true) {
              $('#block-simply-main-menu > .menu').removeClass('menushow', 'linear');
              $('#block-simply-main-menu > .menu').addClass('menuhide', 'linear');
            }
            else if($('#block-simply-main-menu > .menu').hasClass('menuhide') === true) {
              $('#block-simply-main-menu > .menu').removeClass('menuhide', 'linear');
              $('#block-simply-main-menu > .menu').addClass('menushow', 'linear');
            }
            else {
              $('#block-simply-main-menu > .menu').addClass('menushow', 'linear');
            }
          });
        }
        else {
          $('#block-simply-main-menu > .menu').show();
        }
      });
    }
  };

} (jQuery, Drupal, this, this.document));
