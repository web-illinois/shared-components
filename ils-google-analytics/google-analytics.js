document.addEventListener('DOMContentLoaded', function (event) {
    let gaDiv = document.getElementById('ils-google-analytics');
    let gaMeasurement = gaDiv ? gaDiv.getAttribute('data-ils-measurement') : null;
    if (gaDiv && gaMeasurement) {
        var gaIds = gaMeasurement.split(' ');
        var scriptHome = document.createElement('script');
        scriptHome.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=' + gaIds[0]);
        scriptHome.setAttribute('async', true);
        var scriptInline = document.createElement('script');
        scriptInline.innerText = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());";
        gaIds.forEach(id => { scriptInline.innerText = scriptInline.innerText + `gtag('config', '${gaMeasurement}');`; }); 
        gaDiv.appendChild(scriptHome);
        gaDiv.appendChild(scriptInline);
    }
});