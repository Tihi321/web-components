## Web components

Pack of web components, Parcel is used in development

### Components

1.  **ForEach** - Adds option to create loops directly in html, copies templating similar to vue or svelte. Inside template tag variables are available inside double CurlyBraces with one space in between on each side {{ variable }}.<br/><br/>

	*Element with Objects*<br/>
  **`<for-each keys='["name", "title"]' props='[{"name": "Marko", "title": "Firefighter"},{"name": "Pero", "title": "Jongler"}]'>`**<br/>
    **`<template>... {{ prop[name] }} {{ prop[title] }} {{ index }} ...</template>`**<br/>
  **`</for-each>`**

	*Element with Strings or Number*<br/>
  **`<for-each props='["Marko", "Pero"]'>`**<br/>
    **`<template>... {{ prop }} {{ index }} ...</template>`**<br/>
  **`</for-each>`**<br/><br/>

	*Attributes*<br/>
	**props** - Properties for looping, can be array of objects, strings or numbers<br/>
	**keys** - if objects are used, array of keys needs to be provided<br/><br/>
	
2.  **QuoteCard** - sample element to be used in for-each example, just a simple quote element.<br/><br/>

	*Element*<br/>
  **`<quote-card image-text="Sample text">`**<br/>
  **`<slot slot="name">...</slot>`**<br/>
  **`<slot slot="title">...</slot>`**<br/>
  **`<slot slot="quote">...</slot>`**<br/>
  **`</quote-card>`**<br/><br/>

	*Attributes*<br/>
	**image-text** - text that goes over image <br/>
	
2.  **StylizedImage** - component accepts image source and effect attribute, and returns stylized image, with optional title in the middle.<br/><br/>

	*Element*<br/>
  **`<stylized-image src="" effect="vignette">`**<br/>
  **`<slot slot="title">...</slot>`**<br/>
  **`</stylized-image>`**<br/><br/>

	*Attributes*<br/>
	**src** - source/url of the image <br/>
	**effect** - effect that needs to be applied, list of effects can be extended, at the moment there is chewie, empire, ingrid, nightwing, sepia, noire, frame and vignette effect<br/>
