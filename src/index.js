import _ from 'lodash'
import './style.css'
import Buty from './buty.jpg'

function component() {
	var element = document.createElement('div')

	element.innerHTML = _.join(['hello','webpack'],' ');
	element.classList.add('hello')

	// add Image
	var myButy = new Image();
	myButy.src = Buty
	myButy.style.cssText = "width:200px;height:300px;"
	element.appendChild(myButy)

	return element
}

document.body.appendChild(component())