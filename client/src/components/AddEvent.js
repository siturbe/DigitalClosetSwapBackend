import React, { Component } from 'react';
import axios from 'axios';
import {Input} from "../components/Form";
import { Container } from "../components/Grid";

let eventVar = "";

export default class AddEvents extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            events: ""
        }
    }


    onSubmit(e) {
        e.preventDefault()
        let currentUser = localStorage.getItem("currentUser") || "";
        let currentTop = localStorage.getItem("currentTop");
        let colorFilter = localStorage.getItem("colorFilter");
        let colorVar = localStorage.getItem("colorVar");
        let id;

        if(colorFilter == "true"){
            axios.get("/api/get-tops/" + currentUser + "/" + colorVar).then(function (res) {
                id = res.data[currentTop]._id;
                console.log(id);

                let dataToSend = {
                    events: eventVar
                }

                console.log(dataToSend);
                
                axios.post("/api/add-event/" + id, dataToSend, {
                }).then(res => {
                    console.log(res);
            
                })
            }).catch(err => console.log(err));
        } else {
            axios.get("/api/get-tops/" + currentUser).then(function (res) {
                id = res.data[currentTop]._id;
                console.log(id);

                let dataToSend = {
                    events: eventVar
                }

                console.log(dataToSend);
                
                axios.post("/api/add-event/" + id, dataToSend, {
                }).then(res => {
                    console.log(res);
            
                })
            }).catch(err => console.log(err));
        }
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        eventVar = value;
    };


    render() {
        return (
        <Container fluid>
            <h2>Add Event Worn To</h2>
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group"></div>
                        <Input
                            name="events"
                            ref="fieldEvent"
                            value={this.state.events}
                            placeholder="ie. New Years Party"
                            onChange={this.handleInputChange}
                        />
                        <div className="form-group">
                            <button className="btn btn-primar purple" color="inherit" type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
        )
    }
}