import React, {Component} from 'react'

class Article extends Component {
    state = {
        isOpen: true
    }
    
    render() {
        const {article} = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div className = "Wrapper__article">
                <h2 className = "Title">
                    {article.title}
                    <button onClick = {this.handleClick}>{this.state.isOpen ? 'Close' : 'Open'}</button>
                </h2>
                {body}
                <h3>Creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        );
    }

    handleClick = () => {
        this.setState({        
            isOpen: !this.state.isOpen
        })
    }
}




export default Article