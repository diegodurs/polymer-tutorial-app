# Quick start readings

https://www.polymer-project.org/docs/start/tutorial/step-1.html

# Setup

> I followed:
> http://www.html5rocks.com/en/tutorials/webcomponents/yeoman/

Install Yo:
`npm install -g yo`

Install polymer generator:
`npm install generator-polymer -g`

Trigger your new app:
`yo polymer`

Now you can do this to generate a new HTMLCustomElement called `carousel`:
`yo polymer:element carousel`


# Launch

`grunt server`

Use `grunt build` to create a production-ready version of the app (from what is specified in `Gruntfile.js` at `grunt.registerTask('build', ...)`.

# Dependency Management

https://www.polymer-project.org/docs/start/getting-the-code.html#using-bower

`bower init` can help you for new simplistic projects (you'll need to create /app folder, index.html, etc). So `yo polymer` is much more powerfull.

## Move out bower directory if wanted

`touch .bowerrc` and set the content to
```
{
  "directory" : "components"
}
```

then `bower install` should do it. Don't forget to change the ignores...

## Basics depedencies setup

`bower install Polymer/polymer --save`
`bower install roboto-fontface --save`

## Add new custom element dependency

Add it to your bower dependency manager:
`bower install polymer-elements -S` or
`bower install polymer-elements --save`

Add it to your app:
`<link rel="import" href="../bower_components/polymer-jsonp/polymer-jsonp.html">`


