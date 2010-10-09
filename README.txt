Type Browser
by Per Sandström

http://helloper.net/typebrowser
http://github.com/persand/Type-Browser

-----------------------------------------------------------------------------

ABOUT

Type Browser helps you get a good overview of how a font looks on the web.

It's all HTML/CSS/JavaScript and can easily be used on locally on your 
computer.

Please fork me on GitHub and help make it better.

-----------------------------------------------------------------------------

USAGE

Convert your fonts to the various web formats using FontSquirrels @font-face 
generator (http://www.fontsquirrel.com/fontface/generator).

Use the files in the config dir to add/remove fonts and/or make changes to
the CSS. See comments in each file for a more comprehensive guide.

config.js
Configuration and font listing.

custom.css
Use this to override the main CSS with your own if that's necessary.

custom-ie.css
IE won't load the fonts via the JavaScript. This needs to be fixed (fork on 
GitHub!). Until then you must specify the @font-face rules manually here.

Add all the files above and the fonts directory to your gitignore if you're 
using git to pull the source from GitHub. That way your modifications will 
stay put when Type Browser is updated.

-----------------------------------------------------------------------------

LICENSE

Type Browser
Creative Commons By 3.0
http://creativecommons.org/licenses/by/3.0/us/

Fonts
Open Font License
http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL

-----------------------------------------------------------------------------

CREDITS

See info in Type Browser.