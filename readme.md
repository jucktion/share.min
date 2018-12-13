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

Social Sites supported
======
Facebook,Twitter,Stumbleupon,Google,Pinterest

Adding additional sharing options
======
Addition currently needs a little work.
Many icons are available on the icons folder.

### In HTML
The `<span class="shr mstdn"></span>` is a placeholder for the sharing element to be loaded

### In CSS
```CSS
.mstdn a{
    background-image:url(../img/mastodon.svg);
}
```
allows you to display the svg icon to represent the social site

### In JavaScript (could be optimized)
```javascript
        {"shd":"mstdn",
        "link":"https://mastodon.social/share?text=%t+%l"}
```
shd is the shorthand to be used as CSS selector, which is used to reference a element in the html. Making it unique and same for HTML, CSS, and JS is important. 
Add a different shorthand for your new site, then link represents the format of share link on the said site.
The %t represents the title and %l represents the link. These are replaced accordingly through javascript. 


License
======
Free to use with attribution