import {Comp} from './Comp.jsx';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

var count = 0;   

var tree = Comp.render(count);
var rootNode = createElement(tree);
document.body.appendChild(rootNode);

setInterval(function () {
	count++;

	var newTree = Comp.render(count);
	var patches = diff(tree, newTree);
	rootNode = patch(rootNode, patches);
	tree = newTree;
}, 1000);