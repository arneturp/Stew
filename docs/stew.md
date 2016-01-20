Stew
====

The index file
--------------

At the root you'll find index.html. It contains the code for the following:
* Including the necessary CSS and JS files
* Providing a sample navigation bar
* Including the most useful meta-tags

The config file (Sass)
----------------------

Go to `css/stew/_config.sass` and you'll find the sass-file. In this file, the most important settings are stored in variables you can easily change to your preference. Play with them to see which impact they have on the webpage. Most of them are self-explanatory.

` // GRID -------------------------------------------------------------------------
$gutter: 30px
$lg-container-width: 1170px
$md-container-width: 80%
$sm-container-width: 95%
$xs-container-width: 95%
$lg-breakpoint: 1200px
$md-breakpoint: 992px
$sm-breakpoint: 768px
$xs-breakpoint: 480px

// NAVIGATION -------------------------------------------------------------------
$navbar-background-color: #444
$navbar-background-hover-color: #333
$navbar-background-active-color: #333
$navbar-color: #f2f2f2
$navbar-hover-color: #f2f2f2
$navbar-active-color: #f2f2f2
$navbar-font-family: "Open Sans", sans-serif
$navbar-font-size: 18px
$navbar-item-padding-top-bottom: 15px
$navbar-item-padding-left-right: 20px
$navbar-breakpoint: 600px
$hamburger-line-width: 3px
$slide-down-duration: 300ms
$divider-color: #555

// DEBUG ------------------------------------------------------------------------
$lg-debug-color: #e74c3c
$md-debug-color: #e67e22
$sm-debug-color: #9b59b6
$xs-debug-color: hsl(204, 69%, 53%) `

Files provided for you
----------------------

There are two files, that I included, so I wouldn't have to make them anymore:
* `css/style.sass`
* `js/script.js`

The `script.js` contains the basic code I use when writing a script for a webpage.
