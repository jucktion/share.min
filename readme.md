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
The `<span class="shr gp"></span>` is a placeholder for the sharing element to be loaded

### In CSS
```CSS
.gp a{
    background-image:url(../img/google_plus.svg);
}
```
allows you to display the svg icon to represent the social site

### In JavaScript (could be optimized)
```javascript
var gp = document.querySelector('.shr.gp');
var gph=document.createElement('a');
gph.href="https://plus.google.com/share?url="+link;
gp.appendChild(gph);
```
Every element is selected through CSS selectors and a 'href' element is created to reflect the share link for the said site


License
======
Free to use with attribution