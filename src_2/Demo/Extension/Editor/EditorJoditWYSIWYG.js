import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

import Aux from "../../../hoc/_Aux";

class EditorJoditWYSIWYG extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'Hello...',
        }
    }

    updateContent = (value) => {
        this.setState({content:value})
    };

    jodit;
    setRef = jodit => this.jodit = jodit;

    config = {
        readonly: false
    };

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Jodit WYSIWYG Editor</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <JoditEditor
                                    editorRef={this.setRef}
                                    value={this.state.content}
                                    config={this.config}
                                    onChange={this.updateContent}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default EditorJoditWYSIWYG;