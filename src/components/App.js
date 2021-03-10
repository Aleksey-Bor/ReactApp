import React, { PureComponent } from 'react'
import ArticleList from './ArticleList/'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'


class App extends PureComponent {
  state = {
    reversed: false
  }

  render() {
    return (
      <div className="container">
        <div className="bg-secondary bg-gradient text-white">
          <h1 className="display-3 app-title__padding">
            News React
            <button className="btn btn-primary btn-lg float-end" onClick={this.revert}>Revert</button>
          </h1>
        </div>
        <ArticleList  articles = {this.state.reversed ? articles.slice().reverse() : articles}/>
      </div>
    )
  }

  revert = () => {
    this.setState({        
      reversed: !this.state.reversed
    })
  }
}
  
export default App