const predefinedStyles = {
	'AA': '#0000FF', // The key values can be any string and are not limited to two characters.
	'BB': '#008800',
	'CC': {color: '#CC8800', fontFamily: 'Times New Roman'},
};
const pages = [
	{
		title: 'Title.',
		// No panel image specified, defaults to #####.gif where the #s stand in for the page number.
		content: [
			{
				text: "Normal paragraph text is the default when \"type\" is unspecified.<br><br>Line breaks using &lt;br&gt;<!-- Remember to escape angle brackets when you want to show them in the text! -->.",
			},
			{
				type: 'log',
				logType: 'Anythinglog', // If left off, defaults to "Pesterlog".
				text:
					color('AA', "Text can be colored using predefined colors with short names.") + '<br>' +
					specificColor('#0055AC', "One off colors can be specified with an exact hex code or other valid CSS color.") + '<br>' +
					color('CC', "Custom fonts can also be predefined") + '<br>' +
				'',
			},
		],
	},
	{
		title: '==>',
		panels: '00002.png', // Overrides the default panel filename.
		content: [
			{
				text: `Paragraphs can have <i>styles</i> <strike>applied</strike> using <u>HTML tags</u>.<br><br>${ color('BB', "Colors work too!") }`,
			},
		],
	},
	{
		title: '==>',
		panelCount: 2, // Sets the number of panels on a page while still using default filenames.
		content: [
			{
				type: 'authorlog',
				text:
					`Authorlogs can be added using the ${ specificColor('#AA0000', 'authorlog') } type.` + '<br>' +
				'',
			},
			{
				type: 'log',
				logType: 'Anythinglog', // If left off, defaults to "Pesterlog".
				hideText: 'Custom hide text!!!',
				showText: 'Custom show text!',
				text: 'For normal logs, set hideText and showText for custom hide and show text.',
			},
		],
	},
	{
		title: '==>',
		panels: ['00004_1.png', '00004_2.png'], // Overrides the default panel filenames for pages with multiple panels.
		content: [
			{
				text: `Use type ${ specificColor('#AA0000', 'panel') } to move a panel into the middle of text.`,
			},
			{
				type: 'panel',
			},
		],
	},
	{
		title: '[S] ==>',
		soundPage: '00005.mp4',
		content: [
			{
				type: 'credit',
				text: 'Artist - Track Title',
				link: 'https://example.com',
			},
			{
				text: "This is just for an example on how to set up sound pages. No video displays here because no video file at this location is included.",
			},
		],
	},
];




// Page markup utilities
function color(textColorKey, text) {
	switch (typeof predefinedStyles[textColorKey]) {
		case 'string':
			return specificColor(predefinedStyles[textColorKey], text);
		case 'object':
			return styleText(predefinedStyles[textColorKey], text);
	}
}

function specificColor(textColor, text) {
	return `<span style="color:${ textColor }">${ text }</span>`;
}

function styleText(styles, text) {
	let css = '';
	for (const key in styles) {
		css += camelCaseToKebabCase(key) + ':' + styles[key] + ';';
	}
	return `<span style="${ css }">${ text }</span>`;
}

function htmlEscape(str) {
	return str.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

// Helper functions used in page markup utilities

function camelCaseToKebabCase(str) {
	return str.replaceAll(/([A-Z])/g, function(match) { return '-' + match.toLowerCase(); });
}
