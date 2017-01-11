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
          if($('#block-simply-main-menu > .menu').hasClass('menushow') === true) {
            $('#block-simply-main-menu > h2.visually-hidden').click(function() {
              $('#block-simply-main-menu > .menu').toggleClass('menuhide', 1000, 'linear');
            });
          }
          else if($('#block-simply-main-menu > .menu').hasClass('menuhide') === true) {
            $('#block-simply-main-menu > h2.visually-hidden').click(function() {
              $('#block-simply-main-menu > .menu').toggleClass('menushow', 1000, 'linear');
            });
          }
          else {
            $('#block-simply-main-menu > h2.visually-hidden').click(function() {
              $('#block-simply-main-menu > .menu').toggleClass('menushow', 1000, 'linear');
            });
          }
        }
        else {
          $('#block-simply-main-menu > .menu').show();
        }
      });

      $(document).ready(function () {
        // Execute code once the DOM is ready.
        // Mobile Menu Functionality Handled through Toggle
        if($(window).width() < 769) {
          if($('#block-simply-main-menu > .menu').hasClass('menushow') === true) {
            $('#block-simply-main-menu > h2.visually-hidden').click(function() {
              $('#block-simply-main-menu > .menu').toggleClass('menuhide', 'linear');
            });
          }
          else if($('#block-simply-main-menu > .menu').hasClass('menuhide') === true) {
            $('#block-simply-main-menu > h2.visually-hidden').click(function() {
              $('#block-simply-main-menu > .menu').toggleClass('menushow', 'linear');
            });
          }
          else {
            $('#block-simply-main-menu > h2.visually-hidden').click(function() {
              $('#block-simply-main-menu > .menu').toggleClass('menushow', 'linear');
            });
          }
        }
        else {
          $('#block-simply-main-menu > .menu').show();
        }
      });
    }
  };

} (jQuery, Drupal, this, this.document));
