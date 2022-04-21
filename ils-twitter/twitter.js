const templateTwitter = document.createElement('template');
templateTwitter.innerHTML = `<style>
.ils-twitter-block {
    display: flex;
    column-gap: 30px;
    row-gap: 30px;
    flex-column-gap: 30px;
    list-style: none;
}

.ils-twitter-block.grid {
    display: grid;
    grid-column-gap: 30px;
    grid-template-columns: repeat(auto-fill,350px);
}

@media only screen and (max-width: 1200px) {
    .ils-twitter-block {
        display: block;
    }
  }

.ils-twitter-header {
    font-size: 2rem;
    font-weight: bold;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    column-gap: 10px;
}

.ils-twitter-item {
    border: 1px solid var(--il-blue);
    margin-bottom: 20px;
    flex: 0 1 25%;
}

.ils-twitter-item p {
    padding: 0 30px;
}

.ils-twitter-user-image {
    float: left;
    width: 50px;
}
.ils-twitter-image {
    display: block;
    background-size: contain;
    max-height: 300px;
    max-width: 100%;
    margin: auto;
}

p.ils-twitter-name {
    padding-left: 65px;
    margin-top: 0;
    font-weight: 700;
    color: var(--il-blue);
    line-height: normal;
}

div.il-icon {
    font-family: var(--il-icons-solid);
    display: inline-block;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    letter-spacing: 0;
    speak: none;
    -webkit-font-feature-settings: "liga";
    -moz-font-feature-settings: "liga=1";
    -moz-font-feature-settings: "liga";
    -ms-font-feature-settings: "liga" 1;
    font-feature-settings: "liga";
    -webkit-font-variant-ligatures: discretionary-ligatures;
    font-variant-ligatures: discretionary-ligatures;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    text-rendering: optimizeLegibility;
}
</style>
<div class="ils-twitter-header"></div>
<div class="ils-twitter-block"></div>
<div class="ils-twitter-footer"></div>
`

class Twitter extends HTMLElement {
    static get observedAttributes() { return ['twittername', 'number', 'template']; }

    get twittername() { return this.getAttribute('twittername'); }
    set twittername(value) { this.setAttribute('twittername', value); }
    get number() { return this.getAttribute('number'); }
    set number(value) { this.setAttribute('number', value); }
    get template() { return this.getAttribute('template'); }
    set template(value) { this.setAttribute('template', value); }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(templateTwitter.content.cloneNode(true));
    }

    getTwitter() {
        let header = this.shadowRoot.querySelector('.ils-twitter-header');
        let main = this.shadowRoot.querySelector('.ils-twitter-block');
        if (this.template.includes('grid')) {
            main.classList.add('grid');
        }
        let footer = this.shadowRoot.querySelector('.ils-twitter-footer');
        let tweets = this.number == null ? 4 : parseInt(this.number);
        let src = 'https://digitalsigneditor.education.illinois.edu/api/data/Twitter/' + this.twittername;
        fetch(src, { method: 'GET', headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" } })
            .then(res => res.json())
            .then(data => {
                if (this.template.includes('noicon')) {
                    header.innerHTML = `<a href="https://twitter.com/intent/user?screen_name=${this.twittername}">Follow @${this.twittername} on Twitter</a>`;
                } else {
                    header.innerHTML = `<div class="il-icon ils-twitter-icon">twitter</div><a href="https://twitter.com/intent/user?screen_name=${this.twittername}">Follow @${this.twittername} on Twitter</a>`;
                }
                main.innerHTML = '';
                if (data.length > 0) {
                    footer.innerHTML = `Last Updated: ${data[0].datePulled}`;
                }
                for (let i = 0; i < tweets; i++) {
                    if (i < data.length) {
                        let item = document.createElement("div");
                        let userimage = document.createElement("img");
                        let name = document.createElement("p");
                        let body = document.createElement("p");
                        let time = document.createElement("p");
                        let image = document.createElement("img");
                        item.classList.add("ils-twitter-item");
                        userimage.classList.add("ils-twitter-user-image");
                        userimage.setAttribute('alt', '');
                        userimage.setAttribute('src', data[i].userImage);
                        name.classList.add("ils-twitter-name");
                        name.innerHTML = `${data[i].username}<br>@${data[i].handle}`;
                        body.innerHTML = data[i].text;
                        time.classList.add("ils-twitter-time");
                        time.innerHTML = data[i].time;
                        item.appendChild(userimage);
                        item.appendChild(name);
                        item.appendChild(body);
                        item.appendChild(time);
                        if (this.template.includes('picture') && data[i].image != '') {
                            image.classList.add("ils-twitter-image");
                            image.setAttribute('alt', '');
                            image.setAttribute('src', data[i].image);
                            item.appendChild(image);
                        }
                        main.appendChild(item);
                    }
                }
            });
    }
    connectedCallback() {
        this.getTwitter();
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === 'twittername' && oldValue != newValue) {
            this.twittername = newValue;
        }
        if (attrName === 'number' && oldValue != newValue) {
            this.number = newValue;
        }
        if (attrName === 'template' && oldValue != newValue) {
            this.template = newValue;
        }
        if (oldValue != null) this.getTwitter();
    }
}

customElements.define('ils-twitter', Twitter);