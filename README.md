# zigbeelogo

There are three versions for the zigbee logo in this repo:

# JS

This is a canvas implementation encapsulated in a JQuery Plugin. The code accounts for offsets and keeps the logo intact independant of the parent's container size.

Simply create a container div and call the plugin:

```javascript
	$('#logo').zigbee();
```

# SVG

Simply include as SVG in an img tag or paste directly into your html to modify.

```html
	<div id="logo">
		<img src="images/zigbee_logo.svg">
	</div>
```

# CSS

Still working on it