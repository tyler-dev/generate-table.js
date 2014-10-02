generate-table.js
=================

This jQuery plugin is used to generate html tables from a json datatype. Also includes sorting functionality.
Its very basic and was created for a project I had to complete. All it does is read from a json file and sort it into an html table.

Guides
------

**Table Loading from JSON File**

Create a html table with the class

```
generate-table
```

And add this custom attribute. The value of this attribute is the location of the JSON file.

```
data-source="json/data.json"
```

The json file formatted by the name of the column as the key name and the value being the text for the column. Here is some example data for the json,

```json
[
   {
      "name":"Item 1",
      "description":"Desc 1",
      "number1":40,
      "number2":100,
      "number3":50000
   },
   {
      "name":"Item 2",
      "description":"Desc 2",
      "number1":40,
      "number2":100,
      "number3":50000
   },
   {
      "name":"Item 3",
      "description":"Desc 3",
      "number1":40,
      "number2":100,
      "number3":50000
   },
   {
      "name":"Item 4",
      "description":"Desc 4",
      "number1":40,
      "number2":100,
      "number3":50000
   },
   {
      "name":"Item 5",
      "description":"Desc 5",
      "number1":40,
      "number2":100,
      "number3":50000
   }
]
```

For this example the id of the table will be named "plans". So far you should have something like this,

```html
<table id="data" class="generate-table" data-source="json/data.json">
```

Add the headers for the table need to be added as the first row of the table.

```html
<thead>
	<tr>
		<td>name</td>
		<td>description</td>
		<td>number1</td>
		<td>number2</td>
		<td>number3</td>
	</tr>
</thead>
```
Then after the thead add a tbody tag. This is where the generated html will be added

```html
<tbody></tbody>
```

**Add custom sorting Drop Down**

After creating your table add the class "table-sort" and the custom attribute data-table with the value of the id of your table in this case it is "plans",

```html
<select class="table-sort" data-table="data">
```
You are able to sort files your table alphabetically or by number value. The value of your option tags should also tbe the name of your table head.

```html
<option value="name" selected>Namee</option>
<option value="description">Description</option>
<option value="number1">Number1</option>
<option value="number2">Number2</option>
<option value="number3">Number3</option>
```
When your finished you should something like,

```html
<select class="table-sort" data-table="data">
	<option value="name" selected>Namee</option>
	<option value="description">Description</option>
	<option value="number1">Number1</option>
	<option value="number2">Number2</option>
	<option value="number3">Number3</option>
</select>
```

Optional:
You may add the following attribute to sort items in reverse (Ex: 3, 2, 1 or c, b ,a)
```html
	<coption value="number3" data-sort="reverse">Number3</option>
```
