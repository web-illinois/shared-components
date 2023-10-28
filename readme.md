# Shared Components

## What is this? 

The [web-illinois Github organization](https://github.com/web-illinois) is meant for developers to share code. The traditional way to share client-side (JS and CSS) code is to [create and publish an NPM package](https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/). However, creating a package requires some skill on both the developer (to create the package) and the end user (to consume the package). You can also take your code on Github and [host your code on a cPanel instance](https://web.illinois.edu/). However, this requires some additional work to create the cPanel instance and copy the code from Github to cPanel, and there's no guarantee that the code on Github is the same as on the cPanel instance. 

This shared components repository is a low-effort way to put files in Github, and these files will be pushed to a Tech Services AWS S3 bucket. Unlike [Illinois Toolkit](https://go.illinois.edu/webtoolkit) and [the formal WIGG groups](https://webtheme.illinois.edu/about/), this is distributed and "bottom-up" -- a way to crowdsource and share solutions without having to merge these changes to a common codebase. 

An end user can then consume your code by adding HTML tags like the following (using *ils-input* as an example):

    <script src="//contrib.webtheme.illinois.edu/ils-input/input.min.js"></script>
    <link rel="stylesheet" href="//contrib.webtheme.illinois.edu/ils-input/input.min.css" media="all">

**Each folder in this repository is independent of each other.** This may mean that using multiple folders is "chatty" and requires multiple calls to the contrib.webtheme.illinois.edu URL, but that is a feature, not a bug. 

## Use and Expectations

**Everything is a *use as is*.** WIGG doesn't have any code review process in terms of accessibility, security, cross-platform use, or usability. 

Authors are responsible for their own components inside this github repository.

### Packages

The shared-components uses NPM and [`package.json`](https://github.com/web-illinois/shared-components/blob/main/package.json) to manage the build process. If you need to add additional packages, feel free. Ensure that any packages that are added don't interfere with other components, and try to use existing packages when possible. 

### Continuous Integration 

Any changes to the main branch gets pushed to the `https://contrib.webtheme.illinois.edu` site. Please make sure you create a branch, then merge to main. Do not make changes directly to the main branch. 

If you need the continuous integration to build your code, modify the `package.json` to add a script and [`deploy_main.yml`](https://github.com/web-illinois/shared-components/blob/main/.github/workflows/deploy_main.yml) to include your npm script in the build process. 

## How to get started

If you need a component, first check to see if someone else wants it! Go to the ["Need Component" issue section](https://github.com/web-illinois/shared-components/labels/need%20component) and the ["Have Component" issue section](https://github.com/web-illinois/shared-components/labels/have%20component) and scan if something there meets your needs. If nothing there works, then post an issue and give it the "Need Component" label. 

If you want to contribute a component, again, first check to see if someone else wants it or if someone else built it already. Go to the ["Need Component" issue section](https://github.com/web-illinois/shared-components/labels/need%20component) and scan if something there meets your needs. If no one needs it, [create an issue](https://github.com/web-illinois/shared-components/issues) and give it the "Have Component" label. 

If you wish to use an existing component, you can either access the files directly on `https://contrib.webtheme.illinois.edu`, or copy the files and host them on your website. 

## Rules (or "How to Get Along")

It's tempting, but do not contribute something just because it is cool. This is for collaboration, so make sure that another college or department needs the component you are committing. If you aren't sure, post an issue with the ["Have Component" label](https://github.com/web-illinois/shared-components/labels/have%20component) and see if someone else requests it. 

I recommend that shared components have a namespace of "ils-{xxxxxxxx}" for their web component, data tags, or CSS classes. All components, data tags, and CSS classes should use this namespace.

### Good examples of namespace use:

    customElements.define('ils-contentslider', Slider);
    <div class="ils-twitter"><div class="ils-twitter-block-flex"><div class="ils-twitter-item">...</div></div></div>
    <div class="ils-contact-info" data-ils-contact-info-name="EducationHR">...</div>

### Bad examples of namespace use:

    customElements.define('il-contentslider', Slider);
    <div class="ils-twitter"><div class="block-flex"><div class="item">...</div></div></div>
    <div class="ils-contactinfo" data-name="EducationHR">...</div>

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

## Run into problems?

If you run into any problems, please post a message to the [WIGG discussion on Teams](https://teams.microsoft.com/l/channel/19%3a2cc51acd22674e4988b0873980bfd20d%40thread.tacv2/General?groupId=7ecdbcb2-4a6c-438d-828c-70287b84f487&tenantId=44467e6f-462c-4ea2-823f-7800de5434e3)
