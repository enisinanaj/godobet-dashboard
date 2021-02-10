import React from 'react';
import { Row, Col, Card, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Aux from "../../../hoc/_Aux";

class AdvanceAlert extends React.Component {
    state = {
        isBasic: false,
        isSuccess: false,
        isWarning: false,
        isError: false,
        isInfo: false,
        isConfirm: false,
        isConfirmSuccess: false,
        isConfirmCancel: false
    };

    sweetAlertHandler = (alert) => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: alert.title,
            text: alert.text,
            type: alert.type
        });
    };

    sweetConfirmHandler = () => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this imaginary file!',
            type: 'warning',
            showCloseButton: true,
            showCancelButton: true
        }).then((willDelete) => {
            if (willDelete.value) {
                return MySwal.fire('', 'Poof! Your imaginary file has been deleted!', 'success');
            } else {
                return MySwal.fire('', 'Your imaginary file is safe!', 'error');
            }
        });
    };

    sweetPromptHandler = () => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            text: 'Write something here:',
            input: 'text',
        }).then((result) => {
            if (result.value) {
                return MySwal.fire('', `You Typed: ${result.value}`);
            } else {
                return MySwal.fire('Invalid!', 'No message write', 'error');
            }
        });
    };

    sweetAjaxHandler = () => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            text: 'Submit your Github username',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                if (login) {
                    return fetch(`//api.github.com/users/${login}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(response.statusText);
                            }
                            return response.json();
                        })
                        .catch(error => {
                            Swal.showValidationMessage(
                                `Request failed: ${error}`
                            );
                        });
                } else {
                    return MySwal.fire('Invalid!', 'No name enter', 'error');
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.value && result.value.login !== undefined) {
                return MySwal.fire({
                    title: `${result.value.login}'s avatar`,
                    imageUrl: result.value.avatar_url
                });
            }
        });

    };

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title>Alerts</Card.Title>
                            </Card.Header>
                            <Card.Body className='btn-page'>
                                <Button onClick={() => this.sweetAlertHandler({title: '', type: '', text: 'Hello World!'})}>Basic</Button>
                                <Button variant="success" onClick={() => this.sweetAlertHandler({title: 'Good job!', type: 'success', text: 'You clicked the button!'})}>Success</Button>
                                <Button variant="danger" onClick={() => this.sweetAlertHandler({title: 'Good job!', type: 'error', text: 'You clicked the button!'})}>Error</Button>
                                <Button variant="warning" onClick={() => this.sweetAlertHandler({title: 'Good job!', type: 'warning', text: 'You clicked the button!'})}>Warning</Button>
                                <Button variant="info" onClick={() => this.sweetAlertHandler({title: 'Good job!', type: 'info', text: 'You clicked the button!'})}>Info</Button>
                                <Button onClick={this.sweetConfirmHandler}>Confirm</Button>
                                <Button onClick={this.sweetPromptHandler}>Prompt</Button>
                                <Button onClick={this.sweetAjaxHandler}>Ajax</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default AdvanceAlert;