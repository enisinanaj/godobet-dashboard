import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';

import Prism from "../../../App/components/Prism";
import Aux from "../../../hoc/_Aux";

class SyntaxHighlighter extends React.Component {
    render() {
        const basicCode = (
`<div class="card">
    <div class="card-header">
        <h5>Hello card</h5>
        <span> lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
        <div class="card-header-right">
            <i class="icofont icofont-rounded-down"/>
            <i class="icofont icofont-refresh"/>
            <i class="icofont icofont-close-circled"/>
        </div>
    </div>
    <div class="card-block">
        <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
    </div>
</div>`);

        const basicCss = (
`a:active{
    color:#1abc9c;
}
p{
    font-size:13px;
}
.btn-primary{
    color: #1abc9c;
    background-color: #fff;
}
.label-primary {
    background-color: #1abc9c;
}
.badge-primary {
    background-color: #1abc9c;
}
.bg-primary {
    background-color: #1abc9c !important;
    color: #fff;
}
.panel-primary {
    border-color: #1abc9c;
}`);
        const basicTypeScript = (
`import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';

import Prism from "../../../App/components/Prism";
import Aux from "../../../hoc/_Aux";

class SyntaxHighlighter extends React.Component {
    render() {
        /* render method */
    }
}
export default SyntaxHighlighter;
`);
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">HTML Highlighter</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Prism code={basicCode} language="html" />
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">SCSS Highlighter</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Prism code={basicCss} language="scss" />
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">JSX Highlighter</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Prism code={basicTypeScript} language="jsx" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default SyntaxHighlighter;