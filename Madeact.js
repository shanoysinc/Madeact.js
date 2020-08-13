// create a function that return our object to place in the dom
// create a renderer to render that object to the dom

function createElement(nodeType, attribute, ...children) {
	return {
		nodeType,
		attributes: attribute,
		children: [].concat(children),
	};
}

function render(component, root) {
	const { nodeType, children, attributes } = component;
	let n = document.createElement(nodeType);

	if (attributes) {
		Object.keys(attributes).forEach((attri) => {
			n.setAttribute(attri, attributes[attri]);
		});
	}

	children.forEach((child) => {
		if (typeof child === "object") {
			root.appendChild(n);
			return render(child, n);
		}
		n.appendChild(document.createTextNode(child));
	});

	return root.appendChild(n);
}

const Madeact = {
	createElement,
};
const MadeactDOM = {
	render,
};

const element = Madeact.createElement(
	"div",
	{ id: "container" },
	Madeact.createElement(
		"div",
		{ id: "Jumbotron" },
		Madeact.createElement(
			"h1",
			{ class: "title" },
			"Made with React",
			Madeact.createElement("h1", null, "it work")
		)
	)
);

console.log(MadeactDOM.render(element, document.getElementById("root")));
