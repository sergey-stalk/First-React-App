import React, {Component} from 'react'
import ArticleList from './ArticleList'
import article from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
	state = {
		reverted: false
	}
	render() {
		return (
			<div className='container'>
				<div className='jumbotron'>
					<h1 className='display3'>
						App name
						<button className="btn" onClick= {this.revert}>Revert</button>
					</h1>
				</div>
				<ArticleList article={this.state.reverted ? article.reverse() : article}/>
			</div>
	)}

	revert = () => this.setState({
		reverted: !this.state.reverted
	})
}


export default App