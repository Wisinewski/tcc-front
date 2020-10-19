import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import List from "./list.jsx";

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            type:'',
            description:'',
            id:'',
            movies: [],

        }
    }

    handleChangeOne = e => {
        this.setState({
            name:e.target.value
        })
    }
    handleChangeTwo = e => {
        this.setState({
            type:e.target.value
        })
    }
    handleChangeThree = e => {
        this.setState({
            description:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const url = `http://localhost:3000/movies/`;
        axios.post(url, {
            name: this.state.name,
            type: this.state.type,
            description:this.state.description,
            id:this.state.id
        })
            .then(res => {
                // console.log(res);
                // console.log(res.data);
                this.setState({
                    movies:[this.state.name,this.state.type,this.state.description, this.state.id]
                })
            })
    }

    handleRemove = (e) => {
        const id = this.state.id;
        const url = `http://localhost:3000/movies/`;
        // const id = document.querySelectorAll("li").props['data-id'];
        e.preventDefault();
        axios.delete(url + id)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // editMovie = e => {
    //     const url = `http://localhost:3000/movies/`;
    //     e.preventDefault();
    //     const id = e.target.data("id");
    //     axios.put(url + id, {
    //             name: this.state.name,
    //             type: this.state.type,
    //             description:this.state.description,
    //     })
    //         .then(res => {
    //             console.log(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }


    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="movie" onChange={this.handleChangeOne}/>
                <input type="text" placeholder="type of movie" onChange={this.handleChangeTwo}/>
                <textarea cols={40} rows={5} placeholder="description of the movie" onChange={this.handleChangeThree}></textarea>
                <input type="submit" value="Add movie"></input>
                <List removeClick={this.handleRemove} editClick={this.editMovie}/>
            </form>
        )
    }
}

export default Form