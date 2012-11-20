            _/    _/_/    _/_/_/_/_/                              _/
               _/    _/      _/      _/_/    _/    _/    _/_/_/  _/_/_/
          _/  _/  _/_/      _/    _/    _/  _/    _/  _/        _/    _/
         _/  _/    _/      _/    _/    _/  _/    _/  _/        _/    _/
        _/    _/_/  _/    _/      _/_/      _/_/_/    _/_/_/  _/    _/
       _/
    _/

Created by David Kaneda <http://www.davidkaneda.com>  
Maintained by Thomas Yip <http://beedesk.com/>  
Sponsored by Sencha Labs <http://www.sencha.com/>  
Special thanks to Jonathan Stark <http://www.jonathanstark.com/>  

Documentation and issue tracking on GitHub <http://github.com/senchalabs/jQTouch/>

(c) 2009-2011 Sencha Labs  
jQTouch may be freely distributed under the MIT license.

jqt.bars.js - Daniel J. Pinter - DataZombies

Integration of iScroll into jQT with tabbar and toolbar implementations

<DataZombies@gmail.com>  
<http://twitter.com/HeadDZombie>  
<https://github.com/DataZombies/>

#Dependencies
iscroll-min.js or iscroll-lite-min.js - autoloaded with jqt.bars.js.
#Change Log

2012-08-24 Fixed issue with iScroll script link.

2012-08-05 Updated to iScroll 4.2, jQuery 1.7.

2011-11-02 Updated to iScroll 1.4.9, iScroll lite 1.4.6

2011-07-21 JavaScript can now be executed from the tabbar. Insert JS code from either the href attribute or the onclick event.

2011-06-21 Pages can now be loaded dynamically with AJAX via the tabbar. Just use an external href attribute in the tab's anchor tab.

2011-05-04 Added `jQT.barsSettings.iscroll_lite (true|false)`. Set this to false to use the full-featured version of iScroll.

2011-04-16 Optimized setPageHeight. Added `jQT.barsSettings.phonegap`. This, along with `typeof(PhoneGap) !== 'undefined'` can be used to prepare app for PhoneGap.

2011-03-20 Since portions of jqt.bars.js have to be rewritten for iScroll v4 I decided to revamp the initialization process and get rid of some outstanding issues.

Initialization

* All iScroll parameters are available to you. See the demo's UI page and the example below.
* The only class that is needed is `s-scrollwrapper`. If you want a different class on the scroll wrapper div change jQT.barsSettings.wrapperClass.
* The iScroll object is now attached to the scroll wrapper instead of the top of the page. This allows you to have multiple scrolling areas on a page.
* All areas on a page EXCEPT the scroll wrapper will not move.
* The initalization function is attached to the pageInserted event. You no longer have to add anything to dynamically loaded pages to enable scrolling or the tabbar

Bugs Squishes / Enhancements

* Scroll bar was not sized correctly in AJAX loaded pages. See the demo's AJAX > Long GET example.
* Padding the bottom of the scrolling area is now calculated. You don't have to add `<div><br /><br /><br /></div>` to the bottom of pages anymore.
* The calculation to determine the height of the scrolling wrapper is now dynamic. All areas on the page EXCEPT the scroll wrapper, i.e. 'fixed areas', are included in the calculation. If you have a div for segmented controls or other non-scrollable objects you no longer have to modify jqt.bars.js.

2011-03-06 iScroll v4

2011-03-01 First and last tab's margin now subtracted from the tab's calculated width.

2011-02-28 Added hide_tabbar class to prevent the tabbar in specific pages. Use that class the same way that keep_tabbar is used.

2011-02-11 Android 2.2+ fix for `-webkit-mask-image` that don't show up for the party. Added retina display support to tabbar.

2011-01-19 Two options added: debug & autoLoad_iScroll. Both are boolean values. `debug = true` send messages to console.log(). `autoLoad_iScroll = true` finds this script's path and loads iscroll-min.js. They can be set manually or programmatically using jQT.barsSettings.

2010-12-30 As suggested by barts2108, you can refresh the tabbar by calling `refreshTabbar()`.

2010-12-23 Optimizations & code clean-up.

2010-12-16 2px #tabbar padding restored. Tab animations restored and limited to fade, pop & slideup.

2010-12-13 Preventing navbar pull-down (thanks Aaron Mc Adam); Added 2px padding inside #tabbar requested by @sennevdb; Added animations to tabs as requested by barts2108. See note below.

2010-11-18  Changed syntax on CSS section - Less code! Still works!;

Added a check for existing iScroll object in init_iScroll();

Added fixed-tab-width class code. Adding `class="fixed-tab-width"` and setting `#tabbar li, #tabbar td {width: <some value>em;}` will prevent the tabs from being resized EXCEPT if the tab width <= screen width / number of tabs. In that case the tabs will be resized to fill the screen width.

2010-10-05  Really fixed the "Non-iScroll page not scrolling". jqt.bars used `e.preventDefault()` as per iScroll directions. This is already used in jQT, causing a conflict. `e.preventDefault()` has been removed from jqt.bars.

2010-10-04  "Non-iScroll page not scrolling" fix.

2010-10-02  Horizontal scrolling tabbar! Merged jqt.iscroll into jqt.bars. Table & UL tabbar example. More tabbar css tweaking.

2010-09-19  Changes made to automate tabbar creation. On launch jqt.bars resizes the tabbar. If there are 6 or less iPhone tabs, 7 or less for iPad tabs, they are distributed evenly across the tabbar. Code for 7 or more iPhone, 8 or more iPad, tabs is commented out because I'm working towards a scrolling tabbar. jqt.bars then looks for the first occurrence of .current (uses 1st page if not found) and enables the tab for that page.

2010-09-14  Abstracted tabbar code into extension jqt.bars.js. iScroll integration.

2010-09-08  Squished tabbar icon border bug; replaced more.png; laid groundwork for horizontally-scrolling tabbar; updated iPhone sizing guidelines in tabbar.css; replaced `$header` and `headerH` in jqt.iscroll.js with `$navbar` and `navbarH` to match the iOS HIG.


2010-09-05  Abstracted jQT-iScroll code & styles to /extensions/jqt.iscroll/jqt.iscroll.js. Added scroll to top when the header is touched. Updated ajax_long.html and ajax_post.php. Added iscroll-min.js. Dynamically load iscroll.js (or iscroll-min.js). Thanks to BeeDesk for inspiration.

#jQT page format

    <div id="jqt">
      <div id="ui" class="current">
        <div class="toolbar">
          <h1>UI Demos</h1>
        </div>
        <div class="s-scrollwrapper" momentum="false" vScrollbar="false">
          <div>
            ...a bunch of stuff...
          </div>
        </div>
      </div>
      ...more pages...
    </div>

This script will auto-load iscroll-min.js as long as that file is in the same directory as this script. It will also auto-instantiate iScroll for the entire app.

All iScroll parameters can be used by including them in the scroll wrapper div. The above example turns momentum and vScrollbar off. See <http://cubiq.org> for the current list.

To resize a page after an event, like the ones in #events, use...

    jQT.setPageHeight();

See the swipe or tap functions in index.html.

#Tabbar Actions

    <li>
      <!-- Action from the href attribute -->
      <a href="javascript:alert('This alert was triggered from the href attribute');return false;" mask="bar_img/alert.png" mask2x="bar_img/alert@2x.png" animation="slidedown">
        <strong>Alert1</strong>
      </a>
    </li>
    <li>
      <!-- Action from the onclick event -->
      <a mask="bar_img/alert.png" mask2x="bar_img/alert@2x.png" animation="slidedown" onclick="alert('This alert was triggered with an onclick event');return(true);">
        <strong>Alert2</strong>
      </a>
    </li>
    <li>
      <!-- Action & navigation -->
      <a href="#about" mask="bar_img/jqt.png" mask2x="bar_img/jqt@2x.png" animation="slidedown" onclick="alert('Navigating to the About page'); return (false)">
        <strong>About</strong>
      </a>
    </li>

#Tabbar Animations

Animations between tabs are marked-up in the anchor tag like so:

    <div id="tabbar">
      <div>
        <ul>
          <li>
            <a href="#about" mask="bar_img/jqt.png" mask2x="bar_img/jqt@2x.png" animation="slideup"> <!-- this line -->
              <strong>About</strong>
            </a>
          </li>
            ...more tabs...
        </ul>
      </div>
    </div>

Only seven jQT animations are supported (dissolve, fade, pop, slidedown, slideleft, slideright & slideup). If an animation is not recognized, like...

    animation="bugsBunny"

...then the default tab animation (none) will be used.

#Tabbar Dynamically Loaded Pages

    <li>
      <!-- Navigation to an AJAX loaded page -->
      <a href="ajax_page.html" mask="bar_img/ajax.png" mask2x="bar_img/ajax@2x.png" animation="pop">
        <small class="badge right">4</small>
        <strong>AJAX</strong>
      </a>
    </li>