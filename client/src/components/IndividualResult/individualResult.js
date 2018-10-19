import React, {Component} from "react";
import API from '../../utils/API';
import './individual.css';

export default class individualResult extends Component {

    constructor(){
        super();
        this.state={
            saved: null
        }
        this.save = this.save.bind(this)
    }

    save(){
        console.log("Saved article clicked")
        API.saveArticle({
            articleID: this.props.id,
            url: this.props.url,
            title: this.props.title,
            date: this.props.date,
            image: this.props.image
        }).then(this.setState({
            saved: true
        }));
    }

    render() {
        return (
            <li className="collection-item">
                <img className="img-fluid img-thumbnail rounded right sizing" src={this.props.image}/>
                <br/>
                <strong> Title: </strong> {this.props.title}
                <br/>
                <strong> URL: </strong> <a href={this.props.url} target="_blank">
                {this.props.url} </a>
                {this.props.date? (<strong><br/>{`Date: ${this.props.date}`}</strong>) : ""}
                <br/>
                <strong> ID: </strong> {this.props.id}
                <br/>
                {this.state.saved? (<button id={this.props.id} className="btn btn-primary right-align button"> Article Saved </button>) : (<button id={this.props.id} onClick={this.save} className="btn btn-success right-align button"> Save </button>)}
            </li>
        );
    }





}