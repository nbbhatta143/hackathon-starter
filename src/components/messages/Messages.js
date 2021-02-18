/** @format */

import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import { Button, IconButton, List, ListItem, Input } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Message.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { ThumbDown } from "@material-ui/icons";



class Messages extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [],
			message: "",
			count: 0,
			image: "",
		};
	}
	
	componentDidMount() {

        	this.fetchMessages();
	}


	fetchMessages = () => {
		this.props.getMessage(this.props.username).then((res) => {
			console.log(res.payload);
			this.setState({
				messages: res.payload.messages,
				count: res.payload.count,
			});
		});
	};

	newMessageHandler = () => {
		let text = this.state.message;
		this.props.createMessage(text).then(() => {
			this.fetchMessages();
			this.setState({
				message: "",
			});
		});
	};

	handleDelete = (messageId) => {
		// let messageId = e.target.id;
		this.props.deleteMessage(messageId).then(() => {
			this.fetchMessages();
			this.setState({
				message: "",
			})
		});
	};

	handleChange = (event) => {
		let data = { ...this.state };

		data[event.target.name] = event.target.value;

		this.setState(data);
	};

	render() {
		let display = <div>No Messages Found</div>;

		if (this.state.messages) {
			display = this.state.messages.map((value) => {
				return (
					<List>
						<ListItem key={value.id.toString()}>{value.text}
						<IconButton
							key={value.id}
							id={value.id.toString()}
						>
						<ThumbUpIcon />
						</IconButton>
						<IconButton
							key={value.id}
							
							
							id={value.id.toString()}
							// onClick={this.handleDelete}
							label="delete"
						> 
						<DeleteIcon onClick={()=>this.handleDelete(value.id)}></DeleteIcon>
						</IconButton>
						</ListItem>
					</List>
				);
			});
		}

		return (
			<div className="Messages">
				<div className="ListMessage">
					{display}
					{console.log(display.id)}

					
				</div>

				<div className="NewMessage">

					<Input placeholder="Type Message Here" name="message" onChange={this.handleChange} value={this.state.message} />

					<Button component="button" variant="contained" color="primary" onClick={this.newMessageHandler}>
						{" "}
						Send Message{" "}
					</Button>
					{/*This was here because componentDidMount was missing and messages were not showing up*/}	
					{/* <Button onClick={this.fetchMessages}>Show Messages</Button> */}
				</div>
			</div>
		);
	}
}

export default withAsyncAction("profile", "all")(Messages);
