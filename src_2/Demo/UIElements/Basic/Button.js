import React from 'react';
import {
    Row,
    Col,
    Button,
    OverlayTrigger,
    Tooltip,
    ButtonToolbar,
    ToggleButtonGroup,
    ToggleButton,
    Dropdown,
    DropdownButton,
    SplitButton,
    ButtonGroup
} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import Card from "../../../App/components/MainCard";
import UcFirst from "../../../App/components/UcFirst";

class BasicButton extends React.Component {
    render() {
        const buttonVariants = [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ];

        const buttonOptions = [
            {variant: 'primary', icon:'feather icon-thumbs-up'},
            {variant: 'secondary', icon:'feather icon-camera'},
            {variant: 'success', icon:'feather icon-check-circle'},
            {variant: 'danger', icon:'feather icon-slash'},
            {variant: 'warning', icon:'feather icon-alert-triangle'},
            {variant: 'info', icon:'feather icon-info'}
        ];

        const basicButtons = buttonVariants.map((variant, idx) => (
            <OverlayTrigger key={idx} overlay={<Tooltip>{variant}</Tooltip>}>
                <Button variant={variant}><UcFirst text={variant} /></Button>
            </OverlayTrigger>
        ));

        const outlineButtons = buttonVariants.map((variant, idx) => (
            <OverlayTrigger key={idx} overlay={<Tooltip>{'outline-'+variant}</Tooltip>}>
                <Button variant={'outline-'+variant}><UcFirst text={variant} /></Button>
            </OverlayTrigger>
        ));

        const squareButtons = buttonVariants.map((variant, idx) => <Button key={idx} className='btn-square' variant={variant}><UcFirst text={variant} /></Button>);
        const disabledButtons = buttonVariants.map((variant, idx) => <Button key={idx} disabled variant={variant}><UcFirst text={variant} /></Button>);
        const roundedButtons = buttonVariants.map((variant, idx) => <Button key={idx} className='btn-rounded' variant={variant}><UcFirst text={variant} /></Button>);

        const glowButtons = buttonVariants.map((variant, idx) => (
            <OverlayTrigger key={idx} overlay={<Tooltip>{'btn-glow-'+variant}</Tooltip>}>
                <Button className={'btn-glow-'+variant} variant={variant}><UcFirst text={variant} /></Button>
            </OverlayTrigger>
        ));

        const iconButtons = buttonOptions.map((button, idx) => (
                <Button key={idx} variant={button.variant}>
                    <i className={button.icon} />
                    <UcFirst text={button.variant} />
                </Button>
            )
        );

        const outlineIconButtons = buttonOptions.map((button, idx) => (
                <Button key={idx} variant={'outline-'+button.variant}>
                    <i className={button.icon} />
                    <UcFirst text={button.variant} />
                </Button>
            )
        );

        const onlyIconButtons = buttonOptions.map((button, idx) => (
                <Button className='btn-icon' key={idx} variant={button.variant}>
                    <i className={button.icon} />
                </Button>
            )
        );

        const onlyOutlineIconButtons = buttonOptions.map((button, idx) => (
                <Button className='btn-icon' key={idx} variant={'outline-'+button.variant}>
                    <i className={button.icon} />
                </Button>
            )
        );

        const onlyIconRoundedButtons = buttonOptions.map((button, idx) => (
                <Button className='btn-icon btn-rounded' key={idx} variant={button.variant}>
                    <i className={button.icon} />
                </Button>
            )
        );

        const onlyOutlineIconRoundedButtons = buttonOptions.map((button, idx) => (
                <Button className='btn-icon btn-rounded' key={idx} variant={'outline-'+button.variant}>
                    <i className={button.icon} />
                </Button>
            )
        );

        const basicDropdownButton = buttonOptions.map(
            button => {
                const title = <UcFirst text={button.variant} />;
                return (
                <DropdownButton
                    title={title}
                    variant={button.variant}
                    id={`dropdown-variants-${button.variant}`}
                    key={button.variant}
                >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
                </DropdownButton>
            );
        });

        const splitDropdownButton = buttonOptions.map(
            button => {
                const title = <UcFirst text={button.variant} />;
                return (
                <SplitButton
                    title={title}
                    variant={button.variant}
                    id={`dropdown-split-variants-${button.variant}`}
                    key={button.variant}
                    className="mr-2 mb-2"
                >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </SplitButton>
            );
        });

        const basicOutlineDropdownButton = buttonOptions.map(
            button => {
                const title = <UcFirst text={button.variant} />;
                return (
                <DropdownButton
                    title={title}
                    variant={'outline-'+button.variant}
                    id={`dropdown-variants-${button.variant}`}
                    key={button.variant}
                >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
                </DropdownButton>
            );
        });

        const splitOutlineDropdownButton = buttonOptions.map(
            button => {
                const title = <UcFirst text={button.variant} />;
                return (
                <SplitButton
                    title={title}
                    variant={'outline-'+button.variant}
                    id={`dropdown-split-variants-${button.variant}`}
                    key={button.variant}
                    className="mr-2 mb-2"
                >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </SplitButton>
            );
        });

        const basicIconDropdownButton = buttonOptions.map(
            button => {
                const title = <i className={button.icon} />;
                return (
                    <DropdownButton
                        title={title}
                        variant={button.variant}
                        id={`dropdown-variants-${button.variant}`}
                        key={button.variant}
                        className='drp-icon'
                    >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
                    </DropdownButton>
                );
            });

        const outlineIconDropdownButton = buttonOptions.map(
            button => {
                const title = <i className={button.icon} />;
                return (
                    <DropdownButton
                        title={title}
                        variant={'outline-'+button.variant}
                        id={`dropdown-variants-${button.variant}`}
                        key={button.variant}
                        className='drp-icon'
                    >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
                    </DropdownButton>
                );
            });

        const basicIconDropdownRoundedButton = buttonOptions.map(
            button => {
                const title = <i className={button.icon} />;
                return (
                    <DropdownButton
                        title={title}
                        variant={button.variant}
                        id={`dropdown-variants-${button.variant}`}
                        key={button.variant}
                        className='drp-icon btn-rounded'
                    >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
                    </DropdownButton>
                );
            });

        const outlineIconDropdownRoundedButton = buttonOptions.map(
            button => {
                const title = <i className={button.icon} />;
                return (
                    <DropdownButton
                        title={title}
                        variant={'outline-'+button.variant}
                        id={`dropdown-variants-${button.variant}`}
                        key={button.variant}
                        className='drp-icon btn-rounded'
                    >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else hear</Dropdown.Item>
                    </DropdownButton>
                );
            });

        return (
            <Aux>
                <Row className='btn-page'>
                    <Col>
                        <Card title="Default">
                            <p>use <code>variant="*"</code> props in component <code>Button</code> to get various button</p>
                            {basicButtons}
                            <OverlayTrigger overlay={<Tooltip>link</Tooltip>}>
                                <Button variant="link">Link</Button>
                            </OverlayTrigger>
                        </Card>
                        <Card title="Outline">
                            <p>use <code>variant="outline-*"</code> props in component <code>Button</code> to get various outline button</p>
                            {outlineButtons}
                        </Card>
                        <Card title="Square Button">
                            <p>use <code>className="btn-square"</code> props in component <code>Button</code> to get square button</p>
                            {squareButtons}
                        </Card>
                        <Card title="Disabled Button">
                            <p>use <code>disabled</code> props in component <code>Button</code> to get disabled button</p>
                            {disabledButtons}
                        </Card>
                        <Card title="Rounded Button">
                            <p>use <code>className="btn-rounded"</code> props in component <code>Button</code> to get rounded button</p>
                            {roundedButtons}
                        </Card>
                        <Card title="Glow Button">
                            <p>use <code>className="btn-glow"</code> props in component <code>Button</code> to get glow button</p>
                            {glowButtons}
                        </Card>
                        <Card title="Shadow Button">
                            <p>use <code>className=".shadow-[ 1 / 2 / 3 / 4 / 5 ]"</code> props in component <code>Button</code> to get shadow button</p>
                            <OverlayTrigger overlay={<Tooltip>shadow-1</Tooltip>}>
                                <Button className="shadow-1" variant='primary'>Shadow 1</Button>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip>shadow-2</Tooltip>}>
                                <Button className="shadow-2" variant='success'>Shadow 2</Button>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip>shadow-3</Tooltip>}>
                                <Button className="shadow-3" variant='danger'>Shadow 3</Button>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip>shadow-4</Tooltip>}>
                                <Button className="shadow-4" variant='warning'>Shadow 4</Button>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip>shadow-5</Tooltip>}>
                                <Button className="shadow-5" variant='info'>Shadow 5</Button>
                            </OverlayTrigger>
                        </Card>
                    </Col>
                </Row>
                <Row className='btn-page'>
                    <Col md={6}>
                        <Card title="Sizes [ Large ]">
                            <p>use <code>size="lg"</code> props in component <code>Button</code> to get large button</p>
                            <Button variant='primary' size='lg'>Large Button</Button>
                            <Button variant='secondary' size='lg'>Large Button</Button>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card title="Sizes [ Small ]">
                            <p>use <code>size="sm"</code> props in component <code>Button</code> to get small button</p>
                            <Button variant='primary' size='sm'>Small Button</Button>
                            <Button variant='secondary' size='sm'>Small Button</Button>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card title="Checkbox Button">
                            <ButtonToolbar>
                                <ToggleButtonGroup type="checkbox" defaultValue={1}>
                                    <ToggleButton variant='secondary' value={1}>Checkbox</ToggleButton>
                                    <ToggleButton variant='secondary' value={2}>Checkbox</ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card title="Radio Button">
                            <ButtonToolbar>
                                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                    <ToggleButton variant='secondary' value={1}>Active</ToggleButton>
                                    <ToggleButton variant='secondary' value={2}>Radio</ToggleButton>
                                    <ToggleButton variant='secondary' value={3}>Radio</ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card title="Button With Icon">
                            {iconButtons}
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card title="Outline Icon Buttons">
                            {outlineIconButtons}
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card title="Only Icon">
                            {onlyIconButtons}
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card title="Outline Icon">
                            {onlyOutlineIconButtons}
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card title="Icon Button Rounded">
                            {onlyIconRoundedButtons}
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card title="Icon Outline Button Rounded">
                            {onlyOutlineIconRoundedButtons}
                        </Card>
                    </Col>
                </Row>
                <Row className='btn-page'>
                    <Col>
                        <Card title="Basic Dropdown Button">
                            <ButtonToolbar>
                                {basicDropdownButton}
                            </ButtonToolbar>
                        </Card>
                        <Card title="Split Dropdown Button">
                            <ButtonToolbar>
                                {splitDropdownButton}
                            </ButtonToolbar>
                        </Card>
                        <Card title="Basic Outline Dropdown Button">
                            <ButtonToolbar>
                                {basicOutlineDropdownButton}
                            </ButtonToolbar>
                        </Card>
                        <Card title="Split Outline Dropdown Button">
                            <ButtonToolbar>
                                {splitOutlineDropdownButton}
                            </ButtonToolbar>
                        </Card>
                    </Col>
                </Row>
                <Row className='btn-page'>
                    <Col md={6}>
                        <Card title="Basic Icon Dropdown">
                            <ButtonToolbar>
                                {basicIconDropdownButton}
                            </ButtonToolbar>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card title="Outline Icon Dropdown">
                            <ButtonToolbar>
                                {outlineIconDropdownButton}
                            </ButtonToolbar>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card title="Basic Rounded Icon Dropdown">
                            <ButtonToolbar>
                                {basicIconDropdownRoundedButton}
                            </ButtonToolbar>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card title="Outline Rounded Icon Dropdown">
                            <ButtonToolbar>
                                {outlineIconDropdownRoundedButton}
                            </ButtonToolbar>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card title="Basic Button Group">
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary">Left</Button>
                                <Button variant="secondary">Middle</Button>
                                <Button variant="secondary">Right</Button>
                            </ButtonGroup>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card title="Button Toolbar">
                            <ButtonToolbar aria-label="Toolbar with button groups">
                                <ButtonGroup className="mr-2" aria-label="First group">
                                    <Button variant="secondary">1</Button>
                                    <Button variant="secondary">2</Button>
                                    <Button variant="secondary">3</Button>
                                    <Button variant="secondary">4</Button>
                                </ButtonGroup>

                                <ButtonGroup className="mr-2" aria-label="Second group">
                                    <Button variant="secondary">5</Button>
                                    <Button variant="secondary">6</Button>
                                    <Button variant="secondary">7</Button>
                                </ButtonGroup>

                                <ButtonGroup aria-label="Third group">
                                    <Button variant="secondary">8</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Card>
                    </Col>
                </Row>
                <Row className='btn-page'>
                    <Col>
                        <Card title="Button Toolbar Size">
                            <Row>
                                <Col xl={4} md={12}>
                                    <p>use <code>size="lg"</code> props in component <code>ButtonGroup</code> to get large button toolbar</p>
                                    <ButtonGroup size="lg">
                                        <Button variant="secondary">Left</Button>
                                        <Button variant="secondary">Middle</Button>
                                        <Button variant="secondary">Right</Button>
                                    </ButtonGroup>
                                </Col>
                                <Col xl={4} md={6}>
                                    <p>default toolbar size</p>
                                    <ButtonGroup>
                                        <Button variant="secondary">Left</Button>
                                        <Button variant="secondary">Middle</Button>
                                        <Button variant="secondary">Right</Button>
                                    </ButtonGroup>
                                </Col>
                                <Col xl={4} md={6}>
                                    <p>use <code>size="sm"</code> props in component <code>ButtonGroup</code> to get small button toolbar</p>
                                    <ButtonGroup size="sm">
                                        <Button variant="secondary">Left</Button>
                                        <Button variant="secondary">Middle</Button>
                                        <Button variant="secondary">Right</Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row className='btn-page'>
                    <Col md={6}>
                        <Card title="Nesting">
                            <ButtonGroup>
                                <Button variant='secondary'>1</Button>
                                <Button variant='secondary'>2</Button>
                                <DropdownButton variant='secondary' as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                </DropdownButton>
                            </ButtonGroup>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card title="Vertical Variation">
                            <Row>
                                <Col>
                                    <ButtonGroup vertical>
                                        <Button variant='secondary' className="mr-0 mb-0">1</Button>
                                        <Button variant='secondary' className="mr-0 mb-0">2</Button>
                                        <Button variant='secondary' className="mr-0 mb-0">3</Button>
                                    </ButtonGroup>
                                </Col>
                                <Col>
                                    <ButtonGroup vertical>
                                        <Button variant='secondary' className="mr-0 mb-0">1</Button>
                                        <Button variant='secondary' className="mr-0 mb-0">2</Button>
                                        <DropdownButton variant='secondary' as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                        </DropdownButton>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BasicButton;
