generate-table
==============

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
data-source="json/plans.json"
```

The json file formatted by the name of the column as the key name and the value being the text for the column. Here is some example data for the json,

```json
[
   {
      "carrierName":"ProHealth",
      "planName":"Be Well Basic",
      "copay":40,
      "premium":100,
      "annualLimit":50000
   },
   {
      "carrierName":"ProHealth",
      "planName":"Be Well Extra",
      "copay":30,
      "premium":140,
      "annualLimit":100000
   },
   {
      "carrierName":"ProHealth",
      "planName":"Be Well Max",
      "copay":20,
      "premium":180,
      "annualLimit":200000
   },
   {
      "carrierName":"Assured",
      "planName":"Assurance One",
      "copay":35,
      "premium":135,
      "annualLimit":120000
   },
   {
      "carrierName":"Assured",
      "planName":"Assurance Two",
      "copay":25,
      "premium":200,
      "annualLimit":250000
   }
]
```

For this example the id of the table will be named "plans". So far you should have something like this,

```html
<table id="plans" class="generate-table" data-source="json/plans.json">
```

Add the headers for the table need to be added as the first row of the table.

```html
<thead>
	<tr>
		<td>carrierName</td>
		<td>planName</td>
		<td>copay</td>
		<td>premium</td>
		<td>annualLimit</td>
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
<select class="table-sort" data-table="plans">
```
You are able to sort files your table alphabetically or by number value. The value of your option tags should also tbe the name of your table head.

```html
<option value="carrierName" selected>carrierName</option>
<option value="planName">planName</option>
<option value="copay">copay</option>
<option value="premium">premium</option>
<option value="annualLimit" data-sort="reverse">annualLimit</option>
```
When your finished you should something like,

```html
<select class="table-sort" data-table="plans">
	<option value="carrierName" selected>carrierName</option>
	<option value="planName">planName</option>
	<option value="copay">copay</option>
	<option value="premium">premium</option>
	<option value="annualLimit" data-sort="reverse">annualLimit</option>
</select>
```
