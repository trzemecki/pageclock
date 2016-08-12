# Pageclock
*Simple wall clock imitation for website.*

PageClock is simple html/css/js project for displaying wall clock on Your pages.

## Project website:

To see sample clock visit project website at: https://trzemecki.github.io/pageclock/

## Instalation

- [download .zip file](https://github.com/trzemecki/pageclock/zipball/master) (or clone repositiory)
- unzip file inside your website project `<project-dir>/pageclock/`
- in Your html file insert in head tag clock style

```html
<link rel="stylesheet" href="<project-dir>/pageclock/themes/orange/style.css">
```

for *orange* theme or

```html
<link rel="stylesheet" href="<project-dir>/pageclock/themes/classic/style.css">
```

for *classic* theme. 

- in the same file, in place where clock should be displayed, insert:

```html
<div id="clock"></div>
<script src="<project-dir>/pageclock/js/clock.js"></script>
```

And that's it.

**Remember to replace `<project-dir>` by your path to your project**!

## Customization

Customization is pretty easy. If you want to change background or hands replace it with your own images.
- create new folder in `<project-dir>/pageclock/themes/` or copy one of existed folders (here called `<new-theme>`)

```
themes/
  <new-theme>/
    background.png
    hour.png
    minute.png
    second.png
    style.css
```
- replace .png images by your own
- for more advanced options change style.css
- change style link in html file with clock to

```html
<link rel="stylesheet" href="<project-dir>/pageclock/themes/<new-theme>/style.css">
```

Enjoy.

## License
BSD 2-clause

For details see **LICENSE** file

## Contact
If You have any question or suggestion mail to: leszek.trzemecki@gmali.com
