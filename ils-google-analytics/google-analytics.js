class GoogleAnalytics extends HTMLElement {
    static get observedAttributes() { return ['measurement']; }

    get measurement() { return this.getAttribute('measurement'); }
    set measurement(value) { this.setAttribute('measurement', value); }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    addGoogleAnalytics() {
        var gaIds = this.measurement.split(' ');
        var scriptHome = document.createElement('script');
        scriptHome.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=' + gaIds[0]);
        scriptHome.setAttribute('async', true);
        var scriptInline = document.createElement('script');
        scriptInline.innerText = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());";
        gaIds.forEach(id => { scriptInline.innerText = scriptInline.innerText + `gtag('config', '${id}');`; }); 
        this.shadowRoot.appendChild(scriptHome);
        this.shadowRoot.appendChild(scriptInline);
    }

    connectedCallback() {
        this.addGoogleAnalytics();
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === 'measurement' && oldValue != newValue) {
            this.measurement = newValue;
        }
        if (oldValue != null) this.addGoogleAnalytics();
    }
}

customElements.define('ils-google-analytics', GoogleAnalytics);