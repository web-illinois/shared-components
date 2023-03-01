# ils-status

## Author

jonker@illinois.edu

## State

Development on 3/1/2023

## Dependencies and Examples

Requires Illinois Toolkit, any version. Everything else is vanilla javascript/CSS.

This will add a component that queries a hosted Illinois API to get information from the campus statushub.io. 

[Example of use](https://contrib.webtheme.illinois.edu/ils-status/example.html)

Required code to use

    <script src="//contrib.webtheme.illinois.edu/ils-status/status.min.js"></script>
    <link rel="stylesheet" href="//contrib.webtheme.illinois.edu/ils-status/status.min.css" media="all">

The passthrough query is at https://statushub.itpartners.illinois.edu/api/GetSimpleStatus?name=illinois 

The github is at https://github.com/itpartnersillinois/StatusSupport.

## Possible expansions

Right now, this is just an simple passthrough of the public status with a one minute cache. We can add additional components in this to alter the JSON feed and display it appropriately. 

## Userlist

Tech Services will be using this in their websites, along with the TDX page. 
