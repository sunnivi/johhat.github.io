A github pages page. It is based on the standard jekyll template. Gulp used as build system.

## To test locally
1. Install jekyll following the [github pages guide][gh-pages-jekyll-guide].
2. Install server side dev dependencies using `npm install`
3. Install client side dependencies using `bower install`
4. Start server using `gulp` when in the project root.

You need nodejs and a global install of the npm packages less, gulp, BrowserSync and bower to do this.

## Keeping packages up to date
Three usefull commands
* `npm update` to update npm packages
* `bower update` to update bower packages
* `bundle update` to update Github-pages jekyll dependencies

## Favico
In lack of a logo, the favicon is now a [Font Awesome][3] paper plane converted to png with [this great web app][1] and then converted to favicon with [this other great web app][2].

## Placeholder images
I've used [placehold.it](http://placehold.it/).

[1]:http://fa2png.io/
[2]:http://realfavicongenerator.net/
[3]:http://fortawesome.github.io/Font-Awesome/
[gh-pages-jekyll-guide]: https://help.github.com/articles/using-jekyll-with-pages/
