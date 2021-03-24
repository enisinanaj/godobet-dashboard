import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";

import CardToDo from "../../../App/components/ToDo/CardToDo";
import BasicToDo from "../../../App/components/ToDo/BasicToDo";
import ModalToDo from "../../../App/components/ToDo/ModalToDo";

const initialCardTodo = [
    {
        note: 'Lorem Ipsum Dolor Sit Amet',
        complete: false
    },
    {
        note: 'Lorem Ipsum Dolor Sit Amet',
        complete: true
    },
    {
        note: 'Lorem Ipsum Dolor Sit Amet',
        complete: false
    },
    {
        note: 'Lorem Ipsum Dolor Sit Amet',
        complete: false
    },
    {
        note: 'Lorem Ipsum Dolor Sit Amet',
        complete: false
    },
    {
        note: 'Lorem Ipsum Dolor Sit Amet',
        complete: false
    }
];

const initialBasicTodo = [
    {
        note: 'Lorem Ipsum Dolor Sit Amet',
        complete: false
    },
    {
        note: 'Industry\'s standard dummy text ever since the 1500s',
        complete: true
    },
    {
        note: 'The point of using Lorem Ipsum is that it has a more-or-less',
        complete: false
    },
    {
        note: 'Contrary to popular belief',
        complete: false
    },
    {
        note: 'There are many variations of passages of Lorem Ipsum',
        complete: false
    },
    {
        note: 'Sed ut perspiciatis unde omnis iste natus',
        complete: false
    },
    {
        note: 'must explain to you how all this mistaken idea',
        complete: false
    }
];

const initialModalTodo = [
    {
        note: 'Lorem Ipsum Dolor Sit Amet',
        complete: false
    },
    {
        note: 'Contrary to popular belief',
        complete: true
    },
    {
        note: 'Lorem Ipsum Dolor Sit Amet',
        complete: false
    },
    {
        note: 'Sed ut perspiciatis unde omnis iste natus',
        complete: false
    }
];

class ToDo extends React.Component {

    render() {

        return (
            <Aux>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>To Do Card List</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <CardToDo todoList={initialCardTodo}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>To Do List</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <BasicToDo todoList={initialBasicTodo}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>To Do List in Modal</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ModalToDo todoList={initialModalTodo}/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ToDo;