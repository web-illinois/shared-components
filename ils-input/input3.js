document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelectorAll('*:required').forEach(item => {
        var label = document.querySelector('label[for="' + item.id + '"]');
        if (label) {
            label.classList.add('ils-label-required');
        }
    });
    document.querySelectorAll('button[aria-pressed]').forEach(item => {
        if (item.childNodes.length == 0) {
            let textSpan = document.createElement('span');
            let iconSpan = document.createElement('ilw-icon');
            iconSpan.setAttribute('size', '18px');
            iconSpan.setAttribute('style', 'padding-left: 5px; vertical-align: middle;');
            if (item.getAttribute('aria-pressed') == "true") {
                textSpan.innerText = item.getAttribute('data-ils-input-on');
                iconSpan.setAttribute('icon', 'more');
            } else {
                textSpan.innerText = item.getAttribute('data-ils-input-off');
                iconSpan.setAttribute('icon', 'cancel');
            }
            item.append(textSpan);
            item.append(iconSpan);
            item.addEventListener('click', function(event) {
                if (this.getAttribute('aria-pressed') == "true") {
                    this.setAttribute('aria-pressed', "false");
                    this.children[0].innerText = item.getAttribute('data-ils-input-off');
                    this.children[1].setAttribute('icon', 'cancel');
                } else {
                    this.setAttribute('aria-pressed', "true");
                    this.children[0].innerText = item.getAttribute('data-ils-input-on');
                    this.children[1].setAttribute('icon', 'more');
                }
            })
        }
    });
});