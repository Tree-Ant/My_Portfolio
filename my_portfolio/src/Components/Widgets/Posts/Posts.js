import React, { Component } from 'react';
import Axios from 'axios';

import Post from './Post/Post';

import './Posts.css';

const apiKEY = 'fGRG49ynFM5qLqvQkAYKYZwkp9AAH6Ba';

class Posts extends Component{   
    state = {
        articles: []
    }

    componentDidMount() {
    Axios.get(
        "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=" + apiKEY
        ).then(res => {
            console.log(res.data.results);
            // var title = res.data.results[23].title;
            // var abstract = res.data.results[23].abstract;
            // var img1 = res.data.results[23].multimedia[0].url;

            const fetchedarticles = [];

            for (let i = 0; i < res.data.results.length; i++) {
                fetchedarticles.push({
                    key: i,
                    title: res.data.results[i].title,
                    abstract: res.data.results[i].abstract,
                    img: res.data.results[i].multimedia[0].url
                })                
            }

            console.log(fetchedarticles);

            this.setState({articles: fetchedarticles})

        })

    }

    

    render() {
        return(
            <div className='Posts'> 
            <h1>New York Times Top Stories</h1>          
                {this.state.articles.map(article => (
                    <Post 
                        key={article.key}
                        img={article.img}
                        title={article.title}
                        abstract={article.abstract} />
                ))}
            </div>
        );
    }
}

export default Posts;