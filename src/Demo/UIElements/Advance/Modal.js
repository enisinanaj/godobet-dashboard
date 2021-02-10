import React from 'react';
import {Row, Col, Button, Card} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import AnimatedModal from "../../../App/components/AnimatedModal";

class AdvanceModal extends React.Component {
    state = {
        showModal: false,
        animation: ''
    };

    render() {
        const animationVariant = ['pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello', 'bounceIn',
            'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInLeft',
            'fadeInRight', 'fadeInUp', 'flip', 'flipInX', 'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft',
            'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'slideInUp', 'slideInDown', 'slideInLeft',
            'slideInRight', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'hinge', 'jackInTheBox',
            'rollIn', 'bounce', 'flash'];

        const {showModal, animation} = this.state;

        const modal = animationVariant.map((variant, idx) => {
            return <Button key={idx} onClick={() => this.setState({ showModal: true, animation: variant })}>{variant}</Button>
        });

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Animeted Model</Card.Title>
                            </Card.Header>
                            <Card.Body className='btn-page'>
                                {modal}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <AnimatedModal animation={animation} showModal={showModal} modalClosed={() => this.setState({ showModal: false })}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Modal Dialog 1</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>This is a modal window. You can do the following things with it:</p>
                            <ul>
                                <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                                <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                                <li><strong>Close:</strong> click on the button below to close the modal.</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <button onClick={() => this.setState({ showModal: false })} className="btn btn-primary md-close">Close Me!!</button>
                        </Card.Footer>
                    </Card>
                </AnimatedModal>
            </Aux>
        );
    }
}

export default AdvanceModal;