import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'


function App() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">News</h1>
        </div>
        <ArticleList articles = {articles}/>
        <hr></hr>
      </div>
    )
}
  
export default App