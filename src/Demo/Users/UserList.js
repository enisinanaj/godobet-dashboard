import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../assets/images/user/avatar-4.jpg';
import avatar5 from '../../assets/images/user/avatar-5.jpg';

import Aux from "../../hoc/_Aux";
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

$.DataTable = require( 'datatables.net-bs' );

const names = [
    {
        "id": 1,
        "image": avatar1,
        "name": "System Architect",
        "email": 'sa@domain.com',
        "position": "Edinburgh",
        "office": "Tiger Nixon",
        "age": 61,
        "date": "2011/04/25",
        "salary":"$320,800",
        "status":1
    },
    {
        "id": 3,
        "image": avatar3,
        "name": "Ashton Cox",
        "email": 'ac@domain.com',
        "position": "Junior Technical Author",
        "office": "San Francisco",
        "age": 66,
        "date": "2009/01/12",
        "salary":"$86,000",
        "status":1
    },
    {
        "id": 4,
        "image": avatar2,
        "name": "Cedric Kelly",
        "email": 'ck@domain.com',
        "position": "Senior Javascript Developer",
        "office": "Edinburgh",
        "age": 22,
        "date": "2012/03/29",
        "salary":"$433,060",
        "status":0
    },
    {
        "id": 5,
        "image": avatar4,
        "name": "Airi Satou",
        "email": 'as@domain.com',
        "position": "Accountant",
        "office": "Tokyo",
        "age": 33,
        "date": "2008/11/28",
        "salary":"$162,700",
        "status":1
    },
    {
        "id": 6,
        "image": avatar5,
        "name": "Brielle Williamson",
        "email": 'bw@domain.com',
        "position": "Integration Specialist",
        "office": "New York",
        "age": 61,
        "date": "2012/12/02",
        "salary":"$372,000",
        "status":1
    },
    {
        "id": 7,
        "image": avatar3,
        "name": "Herrod Chandler",
        "email": 'hc@domain.com',
        "position": "Sales Assistant",
        "office": "San Francisco",
        "age": 59,
        "date": "2012/08/06",
        "salary":"$137,500",
        "status":0
    },
    {
        "id": 8,
        "image": avatar2,
        "name": "Garrett Winters",
        "email": 'gw@domain.com',
        "position": "Accountant",
        "office": "Tokyo",
        "age": 63,
        "date": "2011/07/25",
        "salary":"$170,750",
        "status":1
    }
];

function atable() {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';

    $(tableZero).DataTable({
        data: names,
        order: [[3, "asc"]],
        columns: [
            {
                "data": "image", render: function (data, type, row) {
                    const html = '<div class="d-inline-block align-middle">'+
                        '<img src='+data+' alt="user" class="img-radius align-top m-r-15" style="width:40px" />'+
                        '<div class="d-inline-block">'+
                        '<h6 class="m-b-0">'+row.name+'</h6>'+
                        '<p class="m-b-0">'+row.email+'</p>'+
                        '</div>'+
                        '</div>';
                    return html;
                }
            },
            {
                "data": "position", render: function (data, type, row) {
                    return data;
                }
            },
            {
                "data": "office", render: function (data, type, row) {
                    return data;
                }
            },
            {
                "data": "age", render: function (data, type, row) {
                    return data;
                }
            },
            {
                "data": "date", render: function (data, type, row) {
                    return data;
                }
            },
            {
                "data": "salary", render: function (data, type, row) {
                    return data;
                }
            },
            {
                "data": "status",
                render: function (data, type, row) {
                    let html;
                    if (data === 1) {
                        html = '<span class="badge badge-light-success">Active</span>' +
                            '<div class="overlay-edit">' +
                            '<button type="button" class="btn btn-icon btn-success"><i class="feather icon-check-circle"> <span class="sr-only"/> </i></button>' +
                            '<button type="button" class="btn btn-icon btn-danger"><i class="feather icon-trash-2"><span class="sr-only"/></i></button>' +
                            '</div>';
                    } else {
                        html = '<span class="badge badge-light-danger">Inactive</span>' +
                            '<div class="overlay-edit">' +
                            '<button type="button" class="btn btn-icon btn-success"><i class="feather icon-check-circle"><span class="sr-only"/></i></button>' +
                            '<button type="button" class="btn btn-icon btn-danger"><i class="feather icon-trash-2"><span class="sr-only"/></i></button>' +
                            '</div>';
                    }
                    return html;
                }
            }
        ]
    });
}

class UserList extends React.Component {

    componentDidMount() {
        atable()
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col sm={12} className='btn-page'>
                        <Card className='user-profile-list'>
                            <Card.Body>
                                <Table ref="tbl" striped hover responsive id="data-table-zero">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Date</th>
                                            <th>Salary</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Date</th>
                                            <th>Salary</th>
                                            <th>Status</th>
                                        </tr>
                                    </tfoot>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default UserList
