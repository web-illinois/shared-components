window.addEventListener('load', (event) => {
    var target = document.querySelector('div.ils-status');
    if (target && target != null) {
        checkStatus();
        setInterval(function () { checkStatus(); }, 12000);
    }
});

function checkStatus() {
    var target = document.querySelector('div.ils-status');
    fetch('https://statushub.itpartners.illinois.edu/api/GetSimpleStatus?name=illinois', { method: 'GET', headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" } })
        .then(res => res.json())
        .then(data => {
            target.innerHTML = `<a id='ils-status-link' href='https://illinois.statushub.io' aria-label='Go to the Status at Illinois page'><span class='ils-status-row'>
            <span class='ils-status-bubble'><span class='ils-status-green'>${data.NumberUp}</span><span>up</span></span>
            <span class='ils-status-bubble'><span class='ils-status-yellow'>${data.NumberAffected}</span><span>affected</span></span>
            <span class='ils-status-bubble'><span class='ils-status-red'>${data.NumberDown}</span><span>down</span></span><span></a>`;
            if (data.DownServices.length > 0) {
                target.innerHTML += '<p>The following services are down: </p><ul>';
                data.DownServices.forEach(d => {
                    target.innerHTML += `<li><a href=${d.Url}>${d.Name}</a><br>${d.Incident}</li>`
                });
                target.innerHTML += '</ul>'
            }
            if (data.AffectedServices.length > 0) {
                target.innerHTML += '<p>The following services are affected: </p><ul>';
                data.AffectedServices.forEach(a => {
                    target.innerHTML += `<li><a href=${a.Url}>${a.Name}</a><br>${a.Incident}</li>`
                });
                target.innerHTML += '</ul>'
            }
    });
}
