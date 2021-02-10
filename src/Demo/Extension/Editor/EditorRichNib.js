import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import Editor from "nib-core";

import Aux from "../../../hoc/_Aux";

const content = {
    type: "doc",
    content: [
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
            ]
        }
    ]
};

class EditorRichNib extends React.Component {

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Rich Text Editor</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Editor defaultValue={content} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default EditorRichNib;