import React, {Component} from 'react'

class Article extends Component {
	constructor (props){
		super(props)

		this.state = {
			isOpen: props.defaultOpen
		}

		this.handleClick = handleClick.bind(this)
	}

	componentWillMount() {
		console.log('---', 'mounting')
	}

	componentWillReceiveProps(nextProps) {
		
	}
	render () {
		const style = {width: '50%'}
		const {article} = this.props
		const body = this.state.isOpen &&<section className='card-text'>{article.text}</section>
		return (
			<div className='card mx-auto' style = {style}>
				<div className='card-header'>
					<h2>
						{article.title}
						<button className='btn btn-primary btn-lg float-right' onClick={this.handleClick}>{this.state.isOpen ? 'close' : 'open'}</button>
					</h2>
				</div>
				<div className='card-body'>	
					{body}
					<h6 className='card-subtitle text-muted'>
						creation date: {(new Date(article.date).toDateString())}
					</h6>
				</div>
			</div>
		)
	}
}


function handleClick() {
	this.setState ({
		isOpen: !this.state.isOpen
	})
}

export default Article