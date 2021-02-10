import React from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';
import { DropzoneComponent } from 'react-dropzone-component';

import Aux from "../../hoc/_Aux";

class FileUpload extends React.Component {
    constructor(props) {
        super(props);

        this.djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif",
            /*autoProcessQueue: false,
            uploadprogress: 100*/
        };

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: '/'
        };
    }

    render() {
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;

        const eventHandlers = {
            init: dz => this.dropzone = dz,
        };

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>File Upload</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                                <Row className='text-center m-t-10'>
                                    <Col>
                                        <Button>Upload Files</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default FileUpload;