# MicroMSPFA
MicroMSPFA is a lightweight tool for making MSPA-styled comics to be read offline without a local HTTP server. It was created specifically for camp entries in [Camp [Aspect]](https://campaspect.miraheze.org/wiki/Main_Page).

## Viewing
To view a MicroMSPA, simply open the HTML file in your web browser of choice.

## Creation
The data for each page's contents is located in `data/pages.js`. An example is placed in there with all the features displayed which should help guide you on how to set up pages.

All images and sound pages should be placed in `data/images/panels`.

You can replace the logo image at `data/images/mspalogo.png` with anything you'd like.

To change the title, you can rename the main HTML file to whatever you'd like and change the contents of the `<title>` tag at the top of said file.

## Currently unsupported features
- Flash pages
- Custom UI colors
