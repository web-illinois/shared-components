// initialize html input combo-box and ul to store results
var searchBox = document.getElementById('search-box');
var searchResults = document.getElementById('search-results');

//can modify to select all text elements
function grabTermHeadingElements() {
    return document.querySelectorAll('h2, h3');
}

//preformed on each key input 
function performTextSearch() {
    var searchTerm = searchBox.value.toLowerCase();
    var termHeadingElements = grabTermHeadingElements();
    var resultsList = searchResults;
    resultsList.innerHTML = '';
    
    var hasResults = false;

//Set an id anchors for each termHeadingElement and highlight all text that corresponds to the user input
    termHeadingElements.forEach(function (element) {
        var text = element.innerText;
        var originalText = text;
        var startIndex = text.toLowerCase().indexOf(searchTerm);
        if (startIndex !== -1) {
            
            hasResults = true;

            var key = originalText.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, '') + startIndex;
            var highlightedText = originalText.substr(0, startIndex) + '<span class="highlighted" id="' + key + '">' + originalText.substr(startIndex, searchTerm.length) + '</span>' + originalText.substr(startIndex + searchTerm.length);
            element.innerHTML = highlightedText;

            var listItem = document.createElement('li');
            var anchor = document.createElement('a');
            anchor.href = '#' + key;
            anchor.innerText = element.innerText;
            listItem.appendChild(anchor);
            resultsList.appendChild(listItem);
        } else {
            removeHighlight(element);
        }
    });

    if (!hasResults) {
        var noResultsItem = document.createElement('li');
        noResultsItem.innerText = 'No matching terms found';
        resultsList.appendChild(noResultsItem);
    }

    searchResults.style.display = 'block';
}


function removeHighlight(element) {
    element.innerHTML = element.innerText;
}

function scrollToElement(key) {
    var termHeadingElements = grabTermHeadingElements();
    termHeadingElements.forEach(function (element) {
        var text = element.innerText;
        var originalText = text;
        var startIndex = originalText.indexOf(key);
        if (startIndex !== -1) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    });
}


function resultKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        var currentResult = document.activeElement;
        scrollToElement(currentResult.firstElementChild);
    }
}

function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        searchBox.focus(); // Set focus back to the search box
    }
}

document.addEventListener('click', function (event) {
    if (!searchResults.contains(event.target)) {
        searchResults.style.display = 'none';
    }
});

searchResults.addEventListener('keydown', handleEscapeKey);

searchBox.addEventListener('keydown', function (event) {
    var searchResultItems = searchResults.querySelectorAll('li');
    if (searchResultItems.length === 0) {
        return;
    }

    // Handle Escape key
    if (event.key === 'Escape') {
        searchBox.value = ''; // Clear the search box
        searchResults.style.display = 'none';
        return;
    }

    // Check if the user pressed Control + Option + Space
    if (event.ctrlKey && event.altKey && event.key === ' ') {
        var termHeadingElements = grabElements();
        var resultsList = searchResults;
        resultsList.innerHTML = '';

        termHeadingElements.forEach(function (element) {
            var listItem = document.createElement('li');
            var anchor = document.createElement('a');
            anchor.href = '#' + element.id; // Assuming each text element has an id attribute
            anchor.innerText = element.innerText;
            listItem.appendChild(anchor);
            resultsList.appendChild(listItem);
        });

        searchResults.style.display = 'block';
        event.preventDefault(); // Prevent the default behavior of Control + Option + Space
    }
});