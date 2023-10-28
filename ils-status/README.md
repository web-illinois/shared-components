# ils-status

## Author

jonker@illinois.edu

## State

Development on 3/1/2023

Production on 3/9/2023

## Dependencies and Examples

Requires Illinois Toolkit, any version. Everything else is vanilla javascript/CSS.

This will add a component that queries a hosted Illinois API to get information from the campus statushub.io. 

[Example of use](https://contrib.webtheme.illinois.edu/ils-status/example.html)

Required code to use in the header:

    <script src="//contrib.webtheme.illinois.edu/ils-status/status.min.js"></script>
    <link rel="stylesheet" href="//contrib.webtheme.illinois.edu/ils-status/status.min.css" media="all">

Required code to use in the body:

    <div class="ils-status"></div>

To display alert cards for maintenance, affected, and down services, add the following parameters:
- **data-ils-status-serviceids**: A list of the service IDs you want to display separated by commas.
- **data-ils-status-template**: The value options are maintenance, affected, and down. If the parameter is missing, the down services will be displayed by default.
- **data-ils-status-daysahead**: Use an integer to determine how much to look ahead (so "10" has everything from today to 10 days ahead). If the parameter is missing, it will include everything (including past events).

Example

    <div class="ils-status" data-ils-status-serviceids="65281,65280,64985" data-ils-status-template="maintenance" data-ils-status-daysahead="12"></div>

The passthrough query is at https://statushub.itpartners.illinois.edu/api/GetSimpleStatus?name=illinois 

The github for this middleware project is at https://github.com/itpartnersillinois/StatusSupport.

## Usage Note

If this is a free-standing area in your page, make sure you add "Status at Illinois" header using the appropriate heading level (h2, h3, h4, etc.)

## Possible expansions

Right now, this is just an simple passthrough of the status with caching enabled. We can add additional components in this to alter the JSON feed and display it appropriately. 

This is hardcoded to use the Illinois status hub. We can change it to check other status hub information. 

## Userlist

Tech Services will be using this in their websites, along with the TDX page. 
