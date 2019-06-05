Minimal floating share buttons
======

- Minimal JavaScript, CSS, HTML
- Mobile Responsive with JS event listener
- Doesn't load anything thirdparty on load
- Mutation observer loads pinterest share js file only when button is clicked.
- Compressed/Minified SVG icons by SuperTinyIcons (https://github.com/edent/SuperTinyIcons)


Demo
======
https://www.jucktion.com/share/

### Installation: Place on your site
Upload the contents on a folder inside your server. Fix the paths to work properly

```html
<link rel="stylesheet" type="text/css" href="css/sharer.min.css">

<h1>This is a web page</h1>
<div id="shrme" class="fb rdt mstdn twt pint"><div>
<script src="js/sharer.min.js"></script>
```

Social Sites supported
======
Facebook,Twitter,Mastodon,Reddit,Pinterest

Adding additional sharing options
======
Addition currently needs a little work.
Many SVG icons are available on the icons folder.

### In HTML
The `<div id="shrme" class="fb rdt mstdn twt pint">` is a placeholder for the sharing elements to be loaded. Follows the sequence to place icons in order (left to right).

### In CSS
```CSS
.mstdn a{
    background-image:url(../img/mastodon.svg);
}
```
allows you to display the svg icon to represent the social site

### In JavaScript
```javascript
        {"shd":"mstdn",
        "link":"https://mastodon.social/share?text=%t+%l"}
```
shd is the shorthand to be used as CSS selector, which is used to reference a element in the html. Making it unique and same for HTML, CSS, and JS is important. 
Add a different shorthand for your new site, then link represents the format of share link on the said site.
The **%t** represents the **page title** and **%l** represents the **link**. These are replaced accordingly through javascript. 


License
======
Free to use with attribution