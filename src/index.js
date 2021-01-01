import _ from 'lodash'
import PMe from './print.js'

function component() {
	var element = document.createElement('div')
	var btn = document.createElement('button')

	element.innerHTML = _.join(['hello','webpack!'],' ');

	btn.textContent = 'Click me check the console'
	btn.onclick = PMe

	element.appendChild(btn)

	return element
}

document.body.appendChild(component())

if (module.hot) {
	module.hot.accept('./print.js',function() {
		console.log('Accept the updated printMe module!')
		PMe()
	})
}