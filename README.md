#About

This repo contains the files used to develop and publish the [fronty-end style guide] (http://24ways.org/2011/front-end-style-guides/)
for my blog. The style guide is developed using the tool [Pattern Lab] (http://patternlab.io/) and it's associated
[Atomic Design] (http://css-tricks.com/design-systems-building-future/) philosophy.

## Mockups

###Narrow Viewport
<img alt="Narrow Viewport Style Guide Mockup" src="https://223c1abd7147c465e6bb04d84f4898b455bfb575.googledrive.com/host/0BzeRIFydrcV6V3VMMGM1a2hwOUk/mobile-home.jpg" width="300"/>

### Wide Viewport

![Wide Viewport Style Guide Mockup] (https://223c1abd7147c465e6bb04d84f4898b455bfb575.googledrive.com/host/0BzeRIFydrcV6V3VMMGM1a2hwOUk/desktop-home.jpg)

#Style Guide Demo

[http://www.Carlos-Reynosa.com/personal-website-styleguide/] (http://www.Carlos-Reynosa.com/personal-website-styleguide/)

#Development Tasks

##Set up the web server

`grunt server`

- The command uses PHP's simple http server for serving files

##Set up livereload

`grunt livereload`

- The command uses the node implementation of Livereload

##Set up blog builder watch

`grunt build-site`

- The command watches for changes in the source folder and rebuilds the blog

## Watch assets that need to be compiled (i.e. Sass)

`grunt watch-assets`

#Github Pages Publishing

##Publish Style Guide

The following command pushes the built style guide into the gh-pages branch where it is published:

`git subtree push --prefix public origin gh-pages`

The command must be run every time a new version is built.
