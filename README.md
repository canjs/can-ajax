# can-ajax

[![Greenkeeper badge](https://badges.greenkeeper.io/canjs/can-ajax.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/canjs/can-ajax.png?branch=master)](https://travis-ci.org/canjs/can-ajax)

jQuery-inspired AJAX request library.

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'can-ajax';
```

### CommonJS use

Use `require` to load `can-ajax` and everything else
needed to create a template that uses `can-ajax`:

```js
var plugin = require("can-ajax");
```

## AMD use

Configure the `can` and `jquery` paths and the `can-ajax` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'can-ajax',
		    	location: 'node_modules/can-ajax/dist/amd',
		    	main: 'lib/can-ajax'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/can-ajax/dist/global/can-ajax.js'></script>
```
