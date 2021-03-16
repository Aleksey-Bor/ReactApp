import React, {PureComponent} from 'react'
import Article from '../Article'
import './style.css'

class ArticleList extends PureComponent {
    state = {
        openArticleId: null
    }

    render() {
        const articleElements = this.props.articles.map((article, index) => 
            <li key={article.id} className="article-list__li">
                <Article 
                    article = {article} 
                    isOpen = {this.state.openArticleId === article.id}
                    onButtonClick = {this.handlerClick.bind(this, article.id)}
                />
            </li>
        )

        return (
            <ul>
                {articleElements}
             </ul>
        )
    }

    handlerClick = openArticleId => this.setState({openArticleId})
}


export default ArticleList