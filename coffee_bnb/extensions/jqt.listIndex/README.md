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

jqt.listIndex.js - Daniel J. Pinter - DataZombies

Implementation of the cubiq.org's list index for jQT.

<DataZombies@gmail.com>  
<http://twitter.com/HeadDZombie>  
<https://github.com/DataZombies/>

#Dependencies

jqt.bars.js

#Change Log

2012-08-24 Fixed a bug that prevented the listIndex from appearing in Safari 6.0.

2011-03-20 - 1st production version

#listIndex

Add the 'indexed' class to any element on a page with a `<ul><li>...</li></ul>` list you want to add a list index to. The index is automatically build and attached to that page. Any dynamically loaded page with the indexed class on the page's top div will also automatically get a listIndex.

The listIndex's class is `listIndex` if you want to add your own styles.

#Settings

`jQT.listIndexSettings.index`: An array that contains the alphabetic characters used to build the index.
`jQT.listIndexSettings.listSeperatorClass`: The class name that is used in the list for the separators. In this example the listSeperatorCLass is `sep`.

    <!-- UI - Edge -->
     <div id="edge">
       <div class="toolbar">
         <h1></h1>
         <a href="#" class="back"></a>
       </div>
       <div class="s-scrollwrapper indexed">
         <div>
           <ul class="edgetoedge">
             <li class="sep">F</li>
             <li><a href="#">Flintstone, <em>Fred</em></a></li>
             <li><a href="#">Flintstone, <em>Pebble</em></a></li>
             <li><a href="#">Flintstone, <em>Wilma</em></a></li>
             <li class="sep">J</li>
             <li><a href="#">Jetson, <em>Elroy</em></a></li>
             <li><a href="#">Jetson, <em>George</em></a></li>
             <li><a href="#">Jetson, <em>Jane</em></a></li>
             <li><a href="#">Jetson, <em>Judy</em></a></li>
             <li class="sep">R</li>
             <li><a href="#">Rubble, <em>Bambam</em></a></li>
             <li><a href="#">Rubble, <em>Barney</em></a></li>
             <li><a href="#">Rubble, <em>Betty</em></a></li>
           </ul>
         </div>
       </div>
     </div>
     
To manually instantiate a listIndex do one of the following:

    //multiple pages
    $(document).ready(function () {
      initListIndices();
    });
    
    //single page
    $(document).ready(function () {
      initListIndex('bigList');
    });