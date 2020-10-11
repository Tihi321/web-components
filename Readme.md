## Web components

Pack of web components, Parcel is used in development


## Components

1.  **ForEach** - Adds option to create loops directly in html, copies templating similar to vue or svelte. Inside template tag variables are available inside double CurlyBraces with one space in between on each side {{ variable }}.

	*Element with Objects*<br/>
  **`<for-each keys='["name", "title"]' props='[{"name": "Marko", "title": "Firefighter"},{"name": "Pero", "title": "Jongler"}]'>`**<br/>
    **`<template>... {{ prop[name] }} {{ prop[title] }} {{ index }} ...</template>`**<br/>
  **`</for-each>`**

	*Element with Strings or Number*<br/>
  **`<for-each props='["Marko", "Pero"]'>`**<br/>
    **`<template>... {{ prop }} {{ index }} ...</template>`**<br/>
  **`</for-each>`**

	*Attributes*<br/>
	**props** - Properties for looping, can be array of objects, strings or numbers<br/>
	**keys** - if objects are used, array of keys needs to be provided<br/>
	
2.  **QuoteCard** - sample element to be used in for-each example, just a simple quote elemen.

	*Element*<br/>
  **`<quote-card image-text="Sample text"><slot slot="name">...</slot><slot slot="title">...</slot><slot slot="quote">...</slot></quote-card>`**

	*Attributes*<br/>
	**image-text** - text that goes over image <br/>
