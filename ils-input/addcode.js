document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelectorAll('pre').forEach(item => {
        var node = item.previousElementSibling;
        var code = document.createElement('code');
        code.textContent = '        ' + node.outerHTML;
        item.appendChild(code);        
    });
});