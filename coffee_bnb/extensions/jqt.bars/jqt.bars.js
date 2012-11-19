/*

            _/    _/_/    _/_/_/_/_/                              _/
               _/    _/      _/      _/_/    _/    _/    _/_/_/  _/_/_/
          _/  _/  _/_/      _/    _/    _/  _/    _/  _/        _/    _/
         _/  _/    _/      _/    _/    _/  _/    _/  _/        _/    _/
        _/    _/_/  _/    _/      _/_/      _/_/_/    _/_/_/  _/    _/
       _/
    _/

    Created by David Kaneda <http://www.davidkaneda.com>
    Documentation and issue tracking on Google Code <http://code.google.com/p/jqtouch/>

    Special thanks to Jonathan Stark <http://jonathanstark.com/>
    and pinch/zoom <http://www.pinchzoom.com/>

    (c) 2009 by jQTouch project members.
    See LICENSE.txt for license.

================================================================================
jqt.bars.js - Daniel J. Pinter - DataZombies

DataZombies@gmail.com
http://twitter.com/HeadDZombie
https://github.com/DataZombies/

/*jslint bitwise: true, browser: true, devel: true, maxerr: 50, newcap: true, nomen: true, plusplus: true, regexp: true, sloppy: true, white: true */
/*global console, document, iScroll, jQuery, PhoneGap, setTimeout, window */
(function ($) {
  if ($.jQTouch) {
    $.jQTouch.addExtension(function bars(jQT) {
      var animations = ':dissolve:fade:pop:slidedown:slideleft:slideright:slideup:',
          d = document,
          lastTime = 0,
          scrollerRulez = {
            'box-flex': '1.0',
            'height': 'auto',
            'padding-bottom': '1px !important',
            'width': '100%',
            'z-index': '1'
          },
          win = window,
          wrapperRulez = {
            'display': 'box',
            'position': 'absolute',
            'overflow': 'auto',
            'width': '100%',
            'z-index': '1'
          };

      jQT.barsReady = false;

      jQT.barsSettings = {
        autoLoad_iScroll: true,
        debug: false,
        iscroll_lite: false,
        phonegap: false,
        wrapperClass: 's-scrollwrapper'
      };

      // "Borrowing" jQT's _debug function
      function _debug(message) {
        var now = (new Date()).getTime(),
            delta = now - lastTime;
        lastTime = now;
        if (jQT.barsSettings.debug) {
          if (message) {
            console.log(delta + ': ' + message);
          } else {
            console.log(delta + ': Called ' + arguments.callee.caller.name);
          }
        }
      }

      // Begin refresh_iScroll()
      function refresh_iScroll(obj) {
        _debug();
        if (obj !== null && typeof(obj) !== 'undefined') {
          _debug('->scroll.refresh(' + obj.wrapper.id + ')');
          setTimeout(function () {
            obj.refresh();
          }, 0);
        }
      }
      // End refresh_iScroll()

      // Begin setBarWidth()
      function setBarWidth($bars) {
        var h = win.innerHeight + (jQT.getOrientation() === 'portrait' ? 20 : 0),
            w = win.innerWidth;

        _debug();
        if ($bars === null || typeof($bars) === 'undefined') {
          $bars = $('#tabbar, .tabbar');
        }

        $bars.each(function () {
          var $bar = $(this),
              $pane = $('> div', $bar),
              $tab_first = $bar.html().indexOf('ul') > -1 ? $('ul li:first-child', $bar) : $('table td:first-child', $bar),
              $tab_last = $bar.html().indexOf('ul') > -1 ? $('ul li:last-child', $bar) : $('table td:last-child', $bar),
              min_w1 = parseFloat($('li, td', $bar).css('min-width')),
              min_w2 = 1.05 * min_w1,
              numOfTabs = $('a', $bar).length,
              refresh_iscroll = false,
              scroll = $bar.data('iscroll'),
              tab_w = parseFloat($('li, td', $bar).css('width')),
              tabWidthIsPercentage = function () {
                var b = 0,
                    c = 0,
                    d = 0;

                $pane.width(w + 'px');
                $('table, ul', $pane).width($pane.width());
                $('li, td', $pane).each(function (a) {
                  if (a + 1 === $('li, td', $pane).length) {
                    c = w - d;
                  } else {
                    b = (w / numOfTabs) * (a + 1);
                    c = ~~ ((w / numOfTabs) + ~~ (b + 0.5) - ~~ (b));
                    d += c;
                  }
                  $(this).width(c + 'px');
                });
              };

          _debug();
          _debug('  ' + numOfTabs + ' tabs');
          $bar.css({'display': 'box'});
          // Fixed tab width
          if ($bar.hasClass('fixed-tab-width')) {

            // Tab width <= screen width / number of tabs :: override fixed width - no scrolling
            if (tab_w <= w / numOfTabs) {
              _debug('  Tab width <= screen width / number of tabs :: override fixed width - no scrolling');
              tabWidthIsPercentage();

              // Fixed tab width - scrolling
            } else {
              _debug('  Fixed tab width - scrolling');
              $pane.width(tab_w * numOfTabs + 'px');
              $('table, ul', $pane).width($pane.width());
              refresh_iscroll = true;
            }
          } else {
            // Non-fixed tab width
            // Tab width is a percentage of tabbar width - no scrolling
            if (min_w1 <= w / numOfTabs) {
              _debug('  Tab width is a percentage of tabbar width - no scrolling');
              tabWidthIsPercentage();

              // Tab width based on longest dimension - scrolling
            } else if (w / numOfTabs < min_w1 && min_w1 <= h / numOfTabs) {
              _debug('  Tab width based on longest dimension - scrolling');
              $pane.width(h + 'px');
              $('table, ul', $pane).width($pane.width());
              $('li, td', $pane).width(h / numOfTabs + 'px');
              refresh_iscroll = true;

              // Tab width is min-width + 5% - scrolling
            } else {
              _debug('  Tab width is min-width + 5% - scrolling');
              $pane.width(min_w2 * numOfTabs + 'px');
              $('table, ul', $pane).width($pane.width());
              $('li, td', $pane).width(min_w2 + 'px');
              refresh_iscroll = true;
            }
          }

          $tab_first.width(parseFloat($tab_first.css('width')) - parseFloat($tab_first.css('margin-left')) + 'px');
          $tab_last.width(parseFloat($tab_last.css('width')) - parseFloat($tab_last.css('margin-right')) + 'px');

          if (refresh_iscroll) {
            if (scroll === null || typeof(scroll) === 'undefined') {
              $bar.data('iscroll', new iScroll($bar.attr('id'), {
                bounceLock: true,
                desktopCompatibility: true,
                hScrollbar: false,
                vScrollbar: false
              }));
            }
            refresh_iScroll($bar.data('iscroll'));
            _debug('Refresh done.');
          }
        });
      }
      // End setBarWidth()

      // Begin setPageHeight()
      function setPageHeight($current_page) {
        var fixed = 0,
            pGapAdjustment = (typeof(PhoneGap) !== 'undefined' && jQT.barsSettings.phonegap ? 20: 0),
            $tabbar, tabbarH, $toolbar, toolbarH;

        _debug();
        if ($current_page === null || typeof($current_page) === 'undefined') {
          $current_page = $('.current');
        }

        // Caclulate the fixed  divs' height (fixed divs are everything on the page EXCEPT the scroll wrapper)
        $(' > *', $current_page).not('.' + jQT.barsSettings.wrapperClass + ', .listIndex').each(function () {
          fixed += $(this).outerHeight();
        });

        // Tool Bar (tabbar class) <the toolbar class is already being used by jQT>
        $toolbar = $('.tabbar', $current_page);
        toolbarH = $toolbar.length > 0 ? ($toolbar.css('display') !== 'none' ? $toolbar.outerHeight() : 0) : 0;

        // Tab Bar (tabbar id)
        $tabbar = $('#tabbar');
        tabbarH = $tabbar.length > 0 ? ($tabbar.css('display') !== 'none' ? $tabbar.outerHeight() : 0) : 0;

        $('.' + jQT.barsSettings.wrapperClass, $current_page).each(function () {
          var $wrapper = $(this),
              $pane = $('div:first', $wrapper),
              pane = $wrapper.children().get(0),
              getLast = function (node, i) {
                var lastNode, lastNodeIndex = node.childNodes.length - 1,
                    lNStyle;

                for (lastNodeIndex; lastNodeIndex >= 0; --lastNodeIndex) {
                  lastNode = node.childNodes[lastNodeIndex];
                  if (lastNode.nodeType === 1) {
                    if (typeof(lastNode.style) !== 'undefined') {
                      lNStyle = window.getComputedStyle(lastNode, '');
                      if (lNStyle.display !== 'none' && lNStyle.visibility !== 'hidden' && lNStyle.height !== '0px') {
                        i = (parseFloat(lNStyle.lineHeight, 10) || 0) + (parseFloat(lNStyle.paddingBottom, 10) || 0);
                        break;
                      }
                    }
                  }
                }
                if (lastNode.childNodes.length) {
                  i = getLast(lastNode, i);
                }
                return i;
              };

          if ($wrapper.is(':visible')) {
            _debug(' #' + $(this).attr('id'));

            $wrapper.height(win.innerHeight - fixed - toolbarH - tabbarH - pGapAdjustment + 'px');
            $wrapper.css({'min-height': win.innerHeight - fixed - toolbarH - tabbarH - pGapAdjustment + 'px'});
            $pane.css('padding-bottom', getLast(pane, 0) + 'px !important');

            _debug(' window.innerHeight .... ' + win.innerHeight + 'px');
            _debug(' fixed ............... - ' + fixed + 'px');
            _debug(' toolbarH ............ - ' + toolbarH + 'px');
            _debug(' tabbarH ............. - ' + tabbarH + 'px');
            _debug(' $wrapper.height ..... = ' + $wrapper.height() + 'px');
            _debug(' $pane.padding-bottom .. ' + $pane.css('padding-bottom'));

            refresh_iScroll($wrapper.data('iscroll'));
            _debug('Refresh done.');
          }
        });
      }
      // End setPageHeight()

      // Begin initTabbar()
      function initTabbar() {
        _debug();
        if ($('#tabbar').length) {
          _debug('  #tabbar exists');

          // Find current class or 1st page in #jqt & the last stylesheet
          var firstPageID = '#' + ($('#jqt > .current').length === 0 ? $('#jqt > *:first') : $('#jqt > .current:first')).attr('id'),
              sheet = d.styleSheets[d.styleSheets.length - 1];

          // Make sure that the tabbar is not visible while its being built
          $('#tabbar').hide();
          $('#tabbar div:first').height($('#tabbar').height());
          _debug('  #tabbar height = ' + $('#tabbar').height() + 'px');
          $('#tabbar a').each(function (index) {
            var $me = $(this),
                mask2x = $me.attr('mask2x'),
                tabIcon = $me.attr('mask'),
                tabZoom = 1,
                parseJS = function(input) {return input.replace(/(\r\n|\n|\r)/gm,' ').replace(/\s+/g,' ').replace(/^javascript:\s*/i,'').replace(/return\s*[\(]*\s*false\s*[\)]*[;]*$|return\s*[\(]*\s*true\s*[\)]*[;]*$/i,'');};

            // PhoneGap integration
            if (typeof (PhoneGap) !== 'undefined' && jQT.barsSettings.phonegap) {
              $('body > #tabbar').css({
                bottom: '20px !important'
              });
            }

            // Enummerate the tabbar anchor tags
            $me.attr('id', 'tab_' + index);

            // If this is the button for the page with the current class then enable it
            if ($me.attr('href') === firstPageID) {
              $me.addClass('enabled');
            }

            // Create css masks from the anchor's mask property
            if (window.devicePixelRatio && window.devicePixelRatio === 2 && typeof (mask2x) !== 'undefined') {
              tabIcon = $(this).attr('mask2x');
              tabZoom = 0.5;
            }
            sheet.insertRule('a#tab_' + index + '::after, a#tab_' + index + '::before {-webkit-mask-image:url(\'' + tabIcon + '\');' + ' zoom: ' + tabZoom + ';}', sheet.cssRules.length);

            // Put page animation, if any, into data('animation')
            $me.data('animation', $me.attr('animation'));

            // Action code or url in href attribute
            if (typeof ($me.attr('href')) !== 'undefined' && $me.attr('href') !== null) {
              if ($me.attr('href').match(/^javascript:\s*/i) !== null) {
                // Put action code into data('action')...
                $me.data('action', parseJS($me.attr('href')));
                $me.addClass('action');
              } else {
                // Put href target into data('defaultTarget')...
                $me.data('defaultTarget', $me.attr('href'));
              }
              // ...and remove href
              $me.removeAttr('href');
            }

            // Action code in onClick event
            if (typeof ($me.attr('onClick')) !== 'undefined' && $me.attr('onClick') !== null) {
              $me.data('action', parseJS($me.attr('onClick')));
              $me.removeAttr('onclick');
              if (typeof ($me.data('defaultTarget')) === 'undefined' || $me.data('defaultTarget') === null) {
                $me.addClass('action');
              }
            }

            // Tabbar tap event
            // Action
            if (typeof ($me.data('action')) !== 'undefined' && $me.data('action') !== null) {
              $me.click(function () {
                setTimeout($me.data('action'), 0);
              });
            }

            // Navigation
            if (typeof ($me.data('defaultTarget')) !== 'undefined' && $me.data('defaultTarget') !== null) {
              $me.click(function () {
                var $referrerTab = $('#tabbar .enabled'),
                    $tabs = $('#tabbar a'),
                    $targetTab = $(this),
                    animation = animations.indexOf(':' + $me.data('animation') + ':') > -1 ? $me.data('animation') : '',
                    i,
                    referrerAnimation = animations.indexOf(':' + $referrerTab.data('animation') + ':') > -1 ? $referrerTab.data('animation') : '',
                    referrerPage = $referrerTab.data('defaultTarget'),
                    target = $me.data('defaultTarget'),
                    targetAnimation = animations.indexOf(':' + $targetTab.data('animation') + ':') > -1 ? $targetTab.data('animation') : '',
                    targetHist = $targetTab.data('hist'),
                    targetPage = $targetTab.data('defaultTarget'),
                    thisTab,
                    TARDIS = function (anime) {
                      var DW;
                      if (anime.indexOf('left') > 0) {
                        DW = anime.replace(/left/, 'right');
                      } else if (anime.indexOf('right') > 0) {
                        DW = anime.replace(/right/, 'left');
                      } else if (anime.indexOf('up') > 0) {
                        DW = anime.replace(/up/, 'down');
                      } else if (anime.indexOf('down') > 0) {
                        DW = anime.replace(/down/, 'up');
                      } else {
                        DW = anime;
                      }
                      return DW;
                    };

                if (!$targetTab.hasClass('enabled')) {
                  for (i = $('#tabbar a').length - 1; i >= 0; --i) {
                    thisTab = $tabs.eq(i);
                    thisTab.toggleClass('enabled', ($targetTab.get(0) === thisTab.get(0)));
                    if ($targetTab.get(0) === thisTab.get(0)) {
                      jQT.goTo(target, (targetAnimation === '' ? TARDIS(referrerAnimation) : targetAnimation));
                      _debug('tabbbar touch, new tab');
                      setPageHeight();
                    }
                  }
                } else {
                  jQT.goTo(target);
                  _debug('tabbar touch, same tab');
                  setPageHeight();
                }
              });
            }
          });

          // Hide tabbar when page has a form or any form element or .hide_tabbar class except when the page's parent div has the .keep_tabbar class.
          // Show tabbar when leaving a form or .hide_tabbar page except when going into a page with a form or .hide_tabbar class
          $('#jqt > div, #jqt > form').each(function () {
            $(this).bind('pageAnimationStart', function (e, data) {
              var $target = $(e.target),
                  isForm = function ($page) {
                    return $page.has('button, datalist, fieldset, form, keygen, label, legend, meter, optgroup, option, output, progress, select, textarea').length > 0 && !($(':input', $page).length !== $(':input:hidden', $page).length);
                  },
                  isHide = function ($page) {
                    return $page.hasClass('hide_tabbar') || $page.children().hasClass('hide_tabbar');
                  },
                  isKeep = function ($page) {
                    return $page.hasClass('keep_tabbar') || $page.children().hasClass('keep_tabbar');
                  };

              if (data.direction === 'in') {
                if ((!isForm($target) && !isHide($target)) || isKeep($target)) {
                  $('#tabbar').show(function () {
                    _debug('Show tabbar');
                    setPageHeight();
                  });
                } else {
                  $('#tabbar').hide(function () {
                    _debug('Hide tabbar');
                    setPageHeight();
                  });
                }
              }
            });
          });

          // Resize tabbar & scroll to enabled tab on rotation
          $('#jqt').bind('turn', function (e, data) {
            var $tabbar = $('#tabbar'),
                scroll = $tabbar.data('iscroll');
            if (scroll !== null && typeof (scroll) !== 'undefined') {
              setTimeout(function () {
                $tabbar.width = win.innerWidth;
                if ($('.enabled').offset().left + $('.enabled').width() >= win.innerWidth) {
                  scroll.scrollToElement('#' + $('.enabled').attr('id'), 0);
                }
              }, 0);
            }
          });

          // Show tabbar now that it's been built, maybe
          if (!$('.current').hasClass('hide_tabbar')) {
            $('#tabbar').show(0, function () {
              _debug('initTabbar hide tabbar');
              setPageHeight();
              setBarWidth();
            });
          } else {
            _debug('initTabbar show tabbar');
            setPageHeight();
            setBarWidth();
          }
        }
      }
      // End initTabbar()

      // Begin init_iScroll()
      function init_iScroll(page) {
        var $wrappers, pageID;

        if (page[0].nodeType === 1) {
          pageID = page.attr('id');
          $wrappers = $('.' + jQT.barsSettings.wrapperClass, page);

          _debug();
          _debug('  #' + pageID + ' nodeType: ' + page[0].nodeType);
          $wrappers.each(function (index) {
            var $this = $(this),
                i, iscroll, scroll = $this.data('iscroll'),
                scrollID = $this.attr('id') || pageID + '_wrapper_' + index;

            $this.css(wrapperRulez);
            $('div:first', this).css(scrollerRulez);

            $this.attr('id', scrollID);
            if (typeof(scroll) === 'undefined' || scroll === null) {
              iscroll = new iScroll(scrollID, {
                desktopCompatibility: true,
                // form compatibility
                onBeforeScrollStart:  function (e) {
                                      var target = e.target;
                                      while (target.nodeType != 1) {
                                        target = target.parentNode;
                                        if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
                                          e.preventDefault();
                                          e.stopPropagation();
                                        }
                                      }
                                    }

              });
              for (i in iscroll.options) {
                if (iscroll.options.hasOwnProperty(i)) {
                  if (typeof($this.attr(i)) !== 'undefined') {
                    iscroll.options[i] = $this.attr(i).toLowerCase() === 'true' ? true : false;
                  }
                }
              }
              $this.data('iscroll', iscroll);
              if ($('#' + pageID).hasClass('current')) {
                _debug('init_iScroll');
                setPageHeight($('#' + pageID));
              }
            }
          });

          // Prevent navbar pull-down
          $('#' + pageID + ' .toolbar ~ div').andSelf().not('.' + jQT.barsSettings.wrapperClass + ', .listIndex').bind('touchmove', function (e) {
            e.preventDefault();
            e.stopPropagation();
          });

          // Resize on animation event
          page.bind('pageAnimationEnd', function (e, data) {
            if (data.direction === 'in') {
              _debug('pageAnimationEnd: In: ' + $(this).attr('id'));
              setPageHeight($(this));
            }
          });

          // Scroll to the top of the page when <h1> is touched
          $('.toolbar h1', '#' + pageID).click(function () {
            var $wrappers = $(this).parents('#jqt > *').children('.' + jQT.barsSettings.wrapperClass);
            $wrappers.each(function () {
              if ($(this).is(':visible')) {
                $(this).data('iscroll').scrollTo(0, 0, 0);
              }
            });
          });
        }
      }
      // End init_iScroll()

      // Begin loading iscroll & initialization
      $(document).ready(function () {
        var getPath = (function() {
          var path;
          _debug();
          $('script').each(function () {
            var i;
            path = $(this).attr('src');
            if (path) {
              i = path.indexOf('/jqt.bars.js');
              if (i > 0) {
                path = path.substring(0, path.lastIndexOf('/')) + '/iscroll/dist/';
                return false;
              }
            }
          });
          return path;
        }());

        // Begin initializations
        function initializations() {
          jQT.barsReady = false;

          $('#jqt > *').each(function () {
            init_iScroll($(this));
          });
          initTabbar();
          //initToolbar();

          // Resize on rotation
          $('#jqt').bind('turn', function (e, data) {
            _debug('Rotation');
            setPageHeight();
            setBarWidth();
          });

          jQT.barsReady = true;

          // Bind intialization to pageInserted event
          $(document.body).bind('pageInserted', function (e, data) {
            if (typeof (data.page[0].innerHTML) !== 'undefined') {
              jQT.barsReady = false;
              init_iScroll(data.page);
              jQT.barsReady = true;
            }
          });
        }
        // End initializatons

        if (jQT.barsSettings.autoLoad_iScroll) {
          var filename = jQT.barsSettings.iscroll_lite ? 'iscroll-lite-min.js' : 'iscroll-min.js';
          _debug('Begin loading ' + filename);
          $.getScript(getPath + filename, function () {
            initializations();
          });
        } else {
          initializations();
        }
      });
      // End loading iscroll & initialization

      return {
        init_iScroll: init_iScroll,
        initTabbar: initTabbar,
        refresh_iScroll: refresh_iScroll,
        refreshTabbar: initTabbar,
        setPageHeight: setPageHeight
      };
    });
  }
})(jQuery);