#About

This repo contains the file used to develop and publish the [fronty-end style guide] (http://24ways.org/2011/front-end-style-guides/)
for my blog. The style guide is developed using the tool [Pattern Lab] (http://patternlab.io/) and it's associated
[Atomic Design] (http://css-tricks.com/design-systems-building-future/) philosophy.

#Style Site Demo

[Style Guide Live Link] (http://carlos-reynosa.github.io/personal-website-styleguide/)

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

##Publish Built Style Guide Site

The following command pushes the built style guide into the gh-pages branch where it is published:

`git subtree push --prefix public origin gh-pages`

The command must be run every time a new version is published.