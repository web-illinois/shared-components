# WIGG Shared Components

## What is this? 

This contains code that small groups have built to make their life easier in coordination with the [Illinois Toolkit](https://go.illinois.edu/webtoolkit). Unlike [the formal WIGG groups](https://webtheme.illinois.edu/about/), this is distributed and "bottom-up" -- a way to crowdsource and share solutions without having to merge these changes to a common codebase.

Shared components may be formal web components, javascript that checks for "data-" tags, or CSS classes that help with formatting (or all three). Shared components should be usable across multiple platforms. We recommend keeping the dependencies needed to use a shared component to a minimum. 

Because this is distributed, WIGG doesn't have any code review process in terms of accessibility, security, cross-platform use, or usability. 

## How to get started

If you need a component, first check to see if someone else wants it! Go to the ["Need Component" issue section](https://github.com/web-illinois/shared-components/labels/need%20component) and the ["Have Component" issue section](https://github.com/web-illinois/shared-components/labels/have%20component) and scan if something there meets your needs. If nothing there works, then post an issue and give it the "Need Component" label. 

If you want to contribute a component, again, first check to see if someone else wants it or if someone else built it already. Go to the ["Need Component" issue section](https://github.com/web-illinois/shared-components/labels/need%20component) and scan if something there meets your needs. If no one needs it, [create an issue](https://github.com/web-illinois/shared-components/issues) and give it the "Have Component" label. 

If you wish to use an existing component, you can either access the files directly on https://community.webtheme.illinois.edu, or copy the files and host them on your website. Because this is tied to the Illinois Toolkit, you should have this installed on your website. 

## Rules (or "How to Get Along")

It's tempting, but do not post something just because it is cool. This is for collaboration, so make sure that another college or department needs the component you are committing. If you aren't sure, post an issue with the ["Have Component" label](https://github.com/web-illinois/shared-components/labels/have%20component) and see if someone else requests it. 

Shared components should have a namespace of "ils-{xxxxxxxx}" for their web component, data tags, or CSS classes. All components, data tags, and CSS classes should use this namespace.

### Good examples of namespace use:

    customElements.define('ils-contentslider', Slider);
    <div class="ils-twitter"><div class="ils-twitter-block-flex"><div class="ils-twitter-item">...</div></div></div>
    <div class="ils-contact-info" data-ils-contact-info-name="EducationHR">...</div>

### Bad examples of namespace use:

    customElements.define('il-contentslider', Slider);
    <div class="ils-twitter"><div class="block-flex"><div class="item">...</div></div></div>
    <div class="ils-contactinfo" data-name="EducationHR">...</div>

Shared components should be self-contained in a single folder -- you shouldn't have one shared component dependent on another shared component. The folder name should be the namespace of the shared component.

Shared components should have a README.md file at their root directory. 

### README.md file contents

* The namespace of this component (ils-{xxxxxxxxxxx}).
* The author of this component.
* The state of the project. The available states are:
    * Development on xx/yy/zzzz: Use at your own risk; things may change without warning. 
    * Production on xx/yy/zzzz: This is stable and can be used. The interface to this will not change drastically. 
    * Depreciated on xx/yy/zzzz: This is no longer supported. This may be because it has been transferred to a campus service, it is no longer used, or a newer version has been developed. 
    * Abandoned on xx/yy/zzzz: This never met production status and should not be used. 
* Any dependencies this component needs (a specific version of the Illinois Toolkit, bootstrap, jQuery, etc.).  
* Examples or information on how to use this. Include code snippets of what files need to be included.
* A userlist of other developers that use this.

## Continuous Integration and Gulp

Any changes to the main branch gets pushed to the https://community.webtheme.illinois.edu site. Please make sure you create a branch with your Net ID, merge to develop, then merge to main. Do not make changes directly to the main branch or develop branch. 

This project has a gulp project. As more projects get built, you can use this to run gulp tasks. Do not add tasks directly to the gulp file -- include the gulp file in the main gulp file, then trigger it in the main gulp file. 

## Run into problems?

If you run into any problems, please post a message to the [WIGG discussion on Teams](https://teams.microsoft.com/l/channel/19%3a2cc51acd22674e4988b0873980bfd20d%40thread.tacv2/General?groupId=7ecdbcb2-4a6c-438d-828c-70287b84f487&tenantId=44467e6f-462c-4ea2-823f-7800de5434e3)