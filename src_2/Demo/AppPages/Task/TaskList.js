import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;


$.DataTable = require( 'datatables.net-bs' );
require( 'datatables.net-responsive-bs' );

const tasks = [
    {
        "id": "12",
        "task": "Add Proper Cursor In Sortable Page",
        "date": "2017-08-01",
        "status":"opt5",
        "images": [avatar1, avatar2]
    },
    {
        "id": "56",
        "task": "Checkbox Design issue",
        "date": "2017-08-05",
        "status":"opt3",
        "images": [avatar1]
    },
    {
        "id": "78",
        "task": "Create UI design model",
        "date": "2017-08-12",
        "status":"opt2",
        "images": [avatar2, avatar3]
    },
    {
        "id": "20",
        "task": "Create UI design model",
        "date": "2017-08-12",
        "status":"opt2",
        "images": [avatar1, avatar2, avatar3]
    },
    {
        "id": "35",
        "task": "Edit the draft for the icons",
        "date": "2017-08-18",
        "status":"opt4",
        "images": [avatar1, avatar3]
    }
];

function atable() {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';

    $(tableZero).DataTable({
        data: tasks,
        order: [[0, "desc"]],
        columns: [
            {
                "data": "id", render: function (data, type, row) {
                    return '#'+data;
                }
            },
            {
                "data": "task", render: function (data, type, row) {
                    return data;
                }
            },
            {
                "data": "date", render: function (data, type, row) {
                    return `<div class="form-group form-primary mb-0">
                            <input type="date" class="form-control" value="`+data+`" />
                            <span class="form-bar"/>
                        </div>`;

                }
            },
            {
                "data": "status", render: function (data, type, row) {
                    return `<div class="form-group form-primary mb-0">
                              <select name="select" class="form-control form-control-sm">
                                `+getOption('opt1', data, 'Open')+`
                                `+getOption('opt2', data, 'Resolved')+`
                                `+getOption('opt3', data, 'Invalid')+`
                                `+getOption('opt4', data, 'On hold')+`
                                `+getOption('opt5', data, 'Close')+`
                              </select>
                              <span class="form-bar"/>
                            </div>`;
                }
            },
            {
                "data": "images", render: function (data, type, row) {
                    let html = ``;
                    for (let i = 0; i < data.length; i++) {
                        html += `<a href="javascript:;">
                                    <img class="img-fluid img-radius m-r-5" src="`+data[i]+`" alt="Task List">
                                </a>`;
                    }

                    html += `<a href="javascript:;"><i class="fa fa-plus f-w-600 m-l-5"/></a>`;

                    return html;
                }
            },
            {
                "data": "id", render: function (data, type, row) {
                    return `<a href="javascript:" class="btn btn-icon btn-rounded btn-outline-primary"><span class="fa fa-book"/></a>
                            <a href="javascript:" class="btn btn-icon btn-rounded btn-outline-warning"><span class="fa fa-edit"/></a>
                            <a href="javascript:" class="btn btn-icon btn-rounded btn-outline-danger"><span class="fa fa-trash"/></a>`;
                }
            }
        ],
        responsive: {
            responsive: {
                details: {
                    display: $.fn.dataTable.Responsive.display.childRowImmediate,
                        type: ''
                }
            }
        }
    });

    function getOption(value, selected, label) {
        if (value === selected) {
            return `<option value="`+value+`" selected>`+label+`</option>`;
        } else {
            return `<option value="`+value+`">`+label+`</option>`;
        }
    }
}

class TaskList extends React.Component {
    state = {
        selectedTask: []
    };

    componentDidMount() {
        atable();
    }

    handleClick = (e) => {
        const clickedValue = e.target.value;
        if (e.target.checked) {
            this.setState(prevState => {
                return {
                    selectedTask: [...prevState.selectedTask, parseInt(clickedValue)]
                };
            })
        } else {
            this.setState(prevState => {
                return {
                    selectedTask: (this.state.selectedTask).filter(item => item !== parseInt(clickedValue))
                };
            })
        }

    };

    render() {
        const {selectedTask} = this.state;
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Task List</Card.Title>
                            </Card.Header>
                            <Card.Body className='task-data'>
                                <Table ref="tbl" striped hover responsive bordered id="data-table-zero">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Task List</th>
                                        <th>Last Commit</th>
                                        <th>Status</th>
                                        <th>Assigned User</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                                        <th>#</th>
                                        <th>Task List</th>
                                        <th>Last Commit</th>
                                        <th>Status</th>
                                        <th>Assigned User</th>
                                        <th>Action</th>
                                    </tr>
                                    </tfoot>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>To Do List</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control add_task_todo" placeholder="Create your task list" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary btn-msg-send" type="button"><i className="fa fa-plus"/></button>
                                    </div>
                                </div>
                                <div className="new-task">
                                    <div className="to-do-list mb-4">
                                        <div className="checkbox-fade fade-in-primary">
                                            <label className={(selectedTask.findIndex(item => item === 1) > -1) ? 'check-task done-task' : 'check-task'}>
                                                <input type="checkbox" value={1} defaultChecked={(selectedTask.findIndex(item => item === 1) > -1)} onClick={(e) => this.handleClick(e)} />
                                                <span className="cr mr-3">
                                                    <i className="cr-icon fa fa-check txt-primary"/>
                                                </span>
                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="to-do-list mb-4">
                                        <div className="checkbox-fade fade-in-primary">
                                            <label className={(selectedTask.findIndex(item => item === 2) > -1) ? 'check-task done-task' : 'check-task'}>
                                                <input type="checkbox" value={2} defaultChecked={(selectedTask.findIndex(item => item === 2) > -1)} onClick={(e) => this.handleClick(e)} />
                                                <span className="cr mr-3">
                                                    <i className="cr-icon fa fa-check txt-primary"/>
                                                </span>
                                                <span>scrambled it to make a type specimen book. It has survived not only five centuries</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="to-do-list mb-4">
                                        <div className="checkbox-fade fade-in-primary">
                                            <label className={(selectedTask.findIndex(item => item === 3) > -1) ? 'check-task done-task' : 'check-task'}>
                                                <input type="checkbox" value={3} defaultChecked={(selectedTask.findIndex(item => item === 3) > -1)} onClick={(e) => this.handleClick(e)} />
                                                <span className="cr mr-3">
                                                    <i className="cr-icon fa fa-check txt-primary"/>
                                                </span>
                                                <span>It is a long established fact that a reader will be distracted by the readable content of a page</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="to-do-list mb-4">
                                        <div className="checkbox-fade fade-in-primary">
                                            <label className={(selectedTask.findIndex(item => item === 4) > -1) ? 'check-task done-task' : 'check-task'}>
                                                <input type="checkbox" value={4} defaultChecked={(selectedTask.findIndex(item => item === 4) > -1)} onClick={(e) => this.handleClick(e)} />
                                                <span className="cr mr-3">
                                                    <i className="cr-icon fa fa-check txt-primary"/>
                                                </span>
                                                <span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="to-do-list mb-4">
                                        <div className="checkbox-fade fade-in-primary">
                                            <label className={(selectedTask.findIndex(item => item === 5) > -1) ? 'check-task done-task' : 'check-task'}>
                                                <input type="checkbox" value={5} defaultChecked={(selectedTask.findIndex(item => item === 5) > -1)} onClick={(e) => this.handleClick(e)} />
                                                <span className="cr mr-3">
                                                    <i className="cr-icon fa fa-check txt-primary"/>
                                                </span>
                                                <span>The standard chunk of Lorem Ipsum used since the 1500s is reproduced</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default TaskList;