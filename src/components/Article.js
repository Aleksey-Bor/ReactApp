import React, {PureComponent} from 'react'

class Article extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

   /* shouldComponentUpdate(nextProps, nextState) {
        return this.state.isOpen !== nextState.isOpen
    }*/

    UNSAFE_componentWillMount() {
    }

   /* UNSAFE_componentWillReceiveProps(nextProps) {
       if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        }) 
    }*/
    
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('***', 'Will Update')
    }
    
    render() {
        const {article, isOpen, onButtonClick} = this.props;
        const body = isOpen && <section className="card-text:last-child">{article.text}</section>
        return (
            <div className = "card mx-auto" style={{width: '80%'}}>
                <div className="card-header">
                    <h2 className = "Title" onClick={this.incrementCounter}>
                        {article.title}
                        <span className="fs-6 text-decoration-underline ms-3">clicked {this.state.count}</span>
                        <button onClick = {onButtonClick} className="btn btn-primary btn-lg float-end">{isOpen ? 'Close' : 'Open'}</button>
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

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    /*handleClick = () => {
       this.setState({        
            isOpen: !this.state.isOpen
        })
    }*/
}




export default Article