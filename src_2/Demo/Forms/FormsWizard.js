import React from 'react';
import {Row, Col, Card, ButtonGroup, Button} from 'react-bootstrap';
import Loki from 'react-loki';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import FormWizard from "./wizard-loki/index";

const Step1 = () => {
  return (
      <div className="sw-container tab-content">
          <div className="step-content">
              <h5>Title Step 1</h5>
              <hr/>
              <h6>Sub title 1</h6>
              <p><strong>@Title content 1!.. </strong> Lorem Ipsum is simply dummy text of the printing <strong>@Content content 1 </strong> and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.</p>
              <h6 className="mt-3">Sub title 2</h6>
              <p><strong>@Title content 2!.. </strong> Lorem Ipsum is simply dummy text and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          </div>
      </div>
  );
};

const Step2 = () => {
  return (
      <div className="sw-container tab-content">
          <div className="step-content">
              <h5>Title Step 2</h5>
              <hr/>
              <h6>Sub title 1</h6>
              <p><strong>@Title content 1!.. </strong> Lorem Ipsum is simply dummy text of the printing <strong>@Content content 1 </strong> and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.</p>
              <h6 className="mt-3">Sub title 2</h6>
              <p><strong>@Title content 2!.. </strong> Lorem Ipsum is simply dummy text and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          </div>
      </div>
  );
};

const Step3 = () => {
  return (
      <div className="sw-container tab-content">
          <div className="step-content">
              <h5>Title Step 3</h5>
              <hr/>
              <h6>Sub title 1</h6>
              <p><strong>@Title content 1!.. </strong> Lorem Ipsum is simply dummy text of the printing <strong>@Content content 1 </strong> and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.</p>
              <h6 className="mt-3">Sub title 2</h6>
              <p><strong>@Title content 2!.. </strong> Lorem Ipsum is simply dummy text and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          </div>
      </div>
  );
};

const Step4 = () => {
  return (
      <div className="sw-container tab-content">
          <div className="step-content">
              <h5>Title Step 4</h5>
              <hr/>
              <h6>Sub title 1</h6>
              <p><strong>@Title content 1!.. </strong> Lorem Ipsum is simply dummy text of the printing <strong>@Content content 1 </strong> and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.</p>
              <h6 className="mt-3">Sub title 2</h6>
              <p><strong>@Title content 2!.. </strong> Lorem Ipsum is simply dummy text and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          </div>
      </div>
  );
};

const customSteps = [
    {
        label: 'Step 1',
        caption: 'This is step description',
        icon: <i className="fa fa-user" />,
        component: <Step1/>,
    },
    {
        label: 'Step 2',
        caption: 'This is step content',
        icon: <i className="fa fa-lock" />,
        component: <Step2/>,
    },
    {
        label: 'Step 3',
        caption: 'This is step text',
        icon: <i className="fa fa-envelope" />,
        component: <Step3/>,
    },
    {
        label: 'Step 4',
        caption: 'This is step content',
        icon: <i className="fa fa-lock" />,
        component: <Step4/>,
    }
];

class FormsWizard extends React.Component {
    state = {
        isFinished: false
    };

    customRenderer = ({ currentStep, stepIndex, cantBack, isInFinalStep, backHandler, nextHandler }) => {
        let i = 0;
        const steps = customSteps.map((step, index) => {
            const isActive = currentStep === index + 1;
            let itemLinkClass = ['nav-item mb-10'];
            if (isActive) {
                itemLinkClass = [...itemLinkClass, 'active'];
                i=1;
            } else if (i === 0 || this.state.isFinished) {
                itemLinkClass = [...itemLinkClass, 'done'];
            }

            return (
                <li key={index} className={itemLinkClass.join(' ')}>
                    <a href={DEMO.BLANK_LINK} className="nav-link disabled">
                        <h6>{step.label}</h6>
                        <p className="m-0">{step.caption}</p>
                    </a>
                </li>
            );
        });

        return <ul className="nav nav-tabs step-anchor">{steps}</ul>;
    };

    customActions = ({ currentStep, stepIndex, cantBack, isInFinalStep, backHandler, nextHandler }) => {
        return (
            <div className="btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-end">
                <ButtonGroup className="sw-btn-group" aria-label="Wizard Buttons">
                    <Button variant="secondary" onClick={backHandler} disabled={cantBack}>Previous</Button>
                    <Button variant="secondary" onClick={nextHandler} disabled={this.state.isFinished && isInFinalStep}>{isInFinalStep ? 'Finish' : 'Next'}</Button>
                </ButtonGroup>
            </div>
        );
    };

    customComponents = ({currentStep}) => {
        return customSteps.map((step, index) => {
            if (currentStep === index + 1) {
                return <div key={index}>{step.component}</div>
            }
            return false;
        });
    };

    onFinish = () => {
        this.setState({isFinished: true});
    };

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Simple Wizard</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className='sw-main sw-theme-default'>
                                    <Loki steps={customSteps} currentStep={2} renderComponents={this.customComponents} renderSteps={this.customRenderer} renderActions={this.customActions} onFinish={this.onFinish} />
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Form Wizard</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <FormWizard />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default FormsWizard;