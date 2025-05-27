"use strict";
function showEvents(jsonstring)
{
	console.log(jsonstring);
	if (typeof(jsonstring) == typeof([]))
	{
		jsonstring.forEach(event => {
			document.getElementById("events-body").innerHTML += `
				<tr>
					<td>${event["startDate"]}<br></td>
					<td class="h3">${event["eventName"]}</td>
					<td>${event["about"]}</td>
					<td>${event["location"]}</td>
				</tr>
			`;
		});
	}
	else
	{
		document.getElementById("events-body").innerHTML = `
			<tr>
				<td>${jsonstring["startDate"]}<br></td>
				<td class="h3">${jsonstring["eventName"]}</td>
				<td>${jsonstring["about"]}</td>
				<td>${jsonstring["location"]}</td>
			</tr>
		`
	}
}

function getEvents(url)
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
			showEvents(JSON.parse(text))
		})
		.catch((error) => {
			console.error(error);
		});
}

getEvents("https://raw.githubusercontent.com/DragonsofFireValley/DragonsofFireValley.github.io/refs/heads/development/EventsSource/EventsSouce.json")