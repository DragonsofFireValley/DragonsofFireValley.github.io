"use strict";
function getEvents(url, outputid)
{
	fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error: ${response.status}`);
			}
			return response.text();
		})
		.then((text) => {
			// Output Goes Here
			console.log(JSON.parse("[{'name':'Cool Event'}]"))
		})
		.catch((error) => {
			alert(error);
		});
}

function showEvents(jsonstring)
{
	console.log(jsonstring);
	document.getElementById("events-body").innerHTML = `
		<tr>
			<td>Mar 20 2025 <br /> Mar 23 2025</td>
			<td class="h3"><abbr title="Northern Lights Coronation Campout">NLCC</abbr> 2025</td>
			<td>NLCC is a Kingdom event hosted for the transferring of the crown, where the Monarch, Regent, and Champion seats of the kingdom are transferred to new occupants.</td>
			<td><a href="https://maps.app.goo.gl/gqZFre39NXt74iv16" target="_blank">Panhandle Lake 4-H Camp <br /> 370 W Panhandle Lake Rd, Shelton, WA 98584</a></td>
		</tr>
	`
}

showEvents(JSON.parse(`[{"name":"Cool Event"}]`));