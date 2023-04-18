window.addEventListener('load', (event) => {
    let target = document.querySelector('div.ils-status');
    if (target && target != null) {
        checkStatus();
        setInterval(function () { checkStatus(); }, 12000);
    }
});

const dataSourceSimple = 'https://statushub.itpartners.illinois.edu/api/GetSimpleStatus?name=illinois';
const dataSourceDetailed = 'https://statushub.itpartners.illinois.edu/api/GetDetailedStatus?name=illinois';

async function fetchData(dataSource){ 
    const response = await fetch(dataSource, { method: 'GET', headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" } });
    const data = await response.json(); 
    return data;
}

async function checkStatus() {
    let target = document.querySelector('div.ils-status');
    let serviceids = target.getAttribute('data-ils-status-serviceids');
    if (serviceids && serviceids != null) {
        let daysahead = target.getAttribute('data-ils-status-daysahead');
        let daysaheadString = daysahead == null ? '' : '&daysAhead='+daysahead;
        let template = target.getAttribute('data-ils-status-template');
        let url = dataSourceDetailed + '&serviceIds='+serviceids+daysaheadString;
        let data = await fetchData(url);
        alertTemplate(target, data, template);
    }else{
        let data = await fetchData(dataSourceSimple);
        simpleStatusTemplate(target, data);
    }
}

function simpleStatusTemplate(target, data) {
    target.innerHTML = `<a id='ils-status-link' href='https://illinois.statushub.io' aria-label='Go to the Status at Illinois page'><ul class='ils-status-row'>
    <li class='ils-status-bubble'><span class='ils-status-green'>${data.NumberUp}</span><span>up</span></li>
    <li class='ils-status-bubble'><span class='ils-status-yellow'>${data.NumberAffected}</span><span>affected</span></li>
    <li class='ils-status-bubble'><span class='ils-status-red'>${data.NumberDown}</span><span>down</span></li>
    </ul></a>`;
    if (data.DownServices.length > 0) {
        target.innerHTML += '<p>The following services are down: </p><ul>';
        data.DownServices.forEach(d => {
            target.innerHTML += `<li><a href='${d.Url}'>${d.Name}</a><br>${d.Incident}</li>`;
        });
        target.innerHTML += '</ul>';

        let downHeader = document.createElement('p');
        downHeader.innerHTML = 'Down services:';
        let down = document.createElement('ul');
        data.AffectedServices.forEach(d => {
            let li = document.createElement('li');
            li.innerHTML = `<a href='${d.Url}'>${d.Name}</a><br>${d.Incident}`;
            down.appendChild(li);
        });
        target.appendChild(downHeader);
        target.appendChild(down);

    }
    if (data.AffectedServices.length > 0) {
        let affectedHeader = document.createElement('p');
        affectedHeader.innerHTML = 'Affected services:';
        let affected = document.createElement('ul');
        data.AffectedServices.forEach(a => {
            let li = document.createElement('li');
            li.innerHTML = `<a href='${a.Url}'>${a.Name}</a><br>${a.Incident}`;
            affected.appendChild(li);
        });
        target.appendChild(affectedHeader);
        target.appendChild(affected);
    }
}

function alertTemplate(target, data, templateName){
    let template = data.DownServices;
    let alert ='';
    if(templateName == 'maintenance'){template = data.MaintenanceServices;}
    if(templateName == 'affected'){template = data.AffectedServices;}
    template.forEach(d => {
        alert += `
        <div class="ils-status-alert ils-status-alert-warning">
            <h2 class="ils-status-sr-only">Status alert announcement</h2>
            <span>${d.Incident}. Click <a title="Alert information" href="${d.Url}">here</a> for more information.</span>
        </div>`;
    })
  
    target.innerHTML = alert;
}