document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelectorAll('*:required').forEach(item => {
        var label = document.querySelector('label[for="' + item.id + '"]');
        if (label) {
            label.classList.add('ils-label-required');
        }
    });
    document.querySelectorAll('button[aria-pressed]').forEach(item => {
        let textSpan = document.createElement('span');
        let iconSpan = document.createElement('span');
        iconSpan.classList.add('il-icon');
        if (item.getAttribute('aria-pressed') == "true") {
            textSpan.innerText = item.getAttribute('data-ils-input-on');
            iconSpan.innerText = 'more';
        } else {
            textSpan.innerText = item.getAttribute('data-ils-input-off');
            iconSpan.innerText = 'cancel';
        }
        item.append(textSpan);
        item.append(iconSpan);
        item.addEventListener('click', function(event) {
            if (this.getAttribute('aria-pressed') == "true") {
                this.setAttribute('aria-pressed', "false");
                this.children[0].innerText = item.getAttribute('data-ils-input-off');
                this.children[1].innerText = 'cancel';
            } else {
                this.setAttribute('aria-pressed', "true");
                this.children[0].innerText = item.getAttribute('data-ils-input-on');
                this.children[1].innerText = 'more';
            }
        })
    });
});