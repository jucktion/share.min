/*
//Minimal sharing floating element generator
//Uses minified svg icons provided by SuperTinyIcons
//External file loaded only when required
//@Nirose @ https://www.jucktion.com 
*/
var shrme = document.getElementById('shrme');
[].forEach.call(shrme.classList, function(e) {
    d = document.createElement('span');
    d.classList.add('shr', e);
    shrme.appendChild(d);
})
shrme.removeAttribute('class');

var title = encodeURIComponent(document.title),
    link = encodeURIComponent(document.location.href);

shr = {
    "list": [
        {
            "shd": "fb",
            "link": "https://www.facebook.com/sharer.php?u=%l"
        },
        {
            "shd": "twt",
            "link": "https://twitter.com/intent/tweet?url=%l&text=%t"
        },
        {
            "shd": "mstdn",
            "link": "https://mastodon.social/share?text=%t+%l"
        },
        {
            "shd": "pint",
            "link": "https://www.pinterest.com/pin/create/button/"
        },
        {
            "shd": "rdt",
            "link": "http://www.reddit.com/submit?url=%l&title=%t"
        }
    ]
};

[].forEach.call(shr.list, function (e) {
    sel = '.shr.' + e.shd;
    if (document.querySelectorAll(sel).length > 0) {
        var es = document.querySelector(sel);
        var esa = document.createElement('a');
        esa.href = (e.link.indexOf('%l') != -1 || e.link.indexOf('%t') != -1) ? e.link.replace('%l', link).replace('%t', title) : e.link;
        if (e.shd == 'pint') {
            esa.setAttribute("data-pin-log", "button_pinit");
            esa.setAttribute("data-pin-custom", "true");
        }
        esa.target = "_blank";
        //if () esa.href = e.link.replace('%t',title);
        es.appendChild(esa);
    }
});

//reposition elements to be mobile responsive
function repos() {
    var shrelm = document.querySelector('#shrme');

    if (document.body.offsetWidth > 468) {
        shrelm.style = '';
        shrelm.style.top = 'calc(50% - ' + shrelm.offsetHeight / 2 + 'px)'
    } else {
        shrelm.style = '';
        shrelm.style.left = 'calc(50% - ' + shrelm.offsetWidth / 2 + 'px)';
    }

}

//Observe click on pinterest icon to only load the required pinterest share javascript file when required
//not at the first load
var pinh = document.querySelector('.shr.pint a');

function pinIt(e) {
    e.preventDefault();
    ! function (a, b, c) {
        var d, e, f;
        d = "PIN_" + ~~((new Date).getTime() / 864e5), a[d] ? a[d] += 1 : (a[d] = 1, a.setTimeout(function () {
            e = b.getElementsByTagName("SCRIPT")[0], f = b.createElement("SCRIPT"), f.type = "text/javascript", f.async = !0, f.src = c.mainUrl + "?" + Math.random(), e.parentNode.insertBefore(f, e)
        }, 10))
    }(window, document, {
        mainUrl: "//assets.pinterest.com/js/pinit_main.js"
    });

    //
    //?https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#Example_usage
    //
    var config = {
        attributes: true
    };
    // Callback function to execute when mutations are observed
    var callback = function (mutations) {
        for (var m = 0; m < mutations.length; m++) {
            if (mutations[m].type == 'attributes') {
                //console.log('The ' + mutation.attributeName + ' attribute was modified.');
                pinh.click();
                observer.disconnect();
            }
        }
    };
    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);
    // Start observing the target node for configured mutations
    observer.observe(pinh, config);
}
//?Position on load and reposition to window resize
window.onload = repos();
pinh.onclick = pinIt;
window.addEventListener("resize", function () {
    repos();
});