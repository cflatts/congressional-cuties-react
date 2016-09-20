// 'https://congress.api.sunlightfoundation.com/legislators?per_page=all&apikey=0e85724a8f924c6aba8bd576df364eb7'
import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'


const app = function() {

	const Header = React.createClass({
		render: () => {
			return <h1>YOLO</h1>
		}
	})

	ReactDOM.render(<Header/>,document.querySelector('.container'))
}

app()