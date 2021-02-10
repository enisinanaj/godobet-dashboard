import React from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap';
import { ValidationForm, TextInputGroup } from 'react-bootstrap4-form-validation';

import Aux from "../../../hoc/_Aux";

import complete from "../../../assets/images/complete.png";

class CardToDo extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }

    state = {
        newNote: '',
        cardTodo: []
    };

    UNSAFE_componentWillMount() {
        const {todoList} = (this.props.todoList) ? this.props : [];
        todoList.map(single => {
            this.add(single.note, single.complete);
            return false;
        });
    }

    nextId() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }

    add(text, complete) {
        const { cardTodo } = this.state;
        cardTodo.push({
            id: this.nextId(this),
            note: text,
            complete: complete
        });
    }

    completeHandler = (i) => {
        let newCard = this.state.cardTodo;
        let item = newCard[i];
        item.complete = !item.complete;
        newCard[i] = item;

        this.setState({cardTodo: newCard});
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        this.add(this.state.newNote, false);
        this.setState({newNote: ''});
        this.resetForm();
    };

    resetForm = () => {
        let formRef = this.formRef.current;
        formRef.resetValidationState(true);
    };

    handleErrorSubmit = (e, formData, errorInputs) => {
        //console.log(errorInputs);
    };

    render() {
        const completeStyle = {
            backgroundImage: `url(${complete})`,
            position: 'absolute',
            top: '5px',
            right: '5px',
            content: "",
            width: '55px',
            height: '55px',
            backgroundSize: '100%'
        };

        const todoList = this.state.cardTodo.map((item, index) => {
            return (
                <li key={index} className={item.complete ? 'complete' : ''} onClick={() => this.completeHandler(index)}>
                    {item.complete ? <span style={completeStyle} /> : ''}
                    <p>{item.note}</p>
                </li>
            );
        });

        return (
            <Aux>
                <Row>
                    <Col>
                        <ValidationForm ref={this.formRef} onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <TextInputGroup
                                        name="newNote"
                                        id="newNote"
                                        placeholder="Create your task list"
                                        required
                                        append={<Button type="submit" variant="primary"><i className="fa fa-plus"/></Button>}
                                        value={this.state.newNote}
                                        onChange={this.handleChange}
                                        autoComplete="off"
                                    />
                                </Form.Group>
                            </Form.Row>
                        </ValidationForm>
                        <section id="task-container">
                            <ul id="task-list">
                                {todoList}
                            </ul>
                        </section>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default CardToDo;