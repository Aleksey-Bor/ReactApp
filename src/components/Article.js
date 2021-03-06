import React, {Component} from 'react'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }
    }
    
    render() {
        console.log(this.props);
        const {article} = this.props;
        console.log(this.state.isOpen);
        const body = this.state.isOpen && <section className="card-text:last-child">{article.text}</section>
        return (
            <div className = "card mx-auto" style={{width: '60%'}}>
                <div className="card-header">
                    <h2 className = "Title">
                        {article.title}
                        <button onClick = {this.handleClick} className="btn btn-primary btn-lg float-end">{this.state.isOpen ? 'Close' : 'Open'}</button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        Creation date: {(new Date(article.date)).toDateString()}
                    </h6>
                    {body}
                </div>
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