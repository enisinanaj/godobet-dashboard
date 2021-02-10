import React, { Component } from "react";
import { Row, Col, Card, InputGroup, FormControl } from "react-bootstrap";
import Cropper from "react-cropper";
import previewImage from "../../assets/images/light-box/l1.jpg";
import "cropperjs/dist/cropper.css";

class ImageCropper extends Component {
  constructor(props) {
    super(props);
    this.crop = this.crop.bind(this);
    this.state = {
      image: previewImage,
      dataX: "",
      dataY: "",
      dataHeight: "",
      dataWidth: "",
      dataRotate: "",
      dataScaleX: "",
      dataScaleY: ""
    };
  }
  crop(event) {
    let dataUrl = this.refs.myRef.getCroppedCanvas().toDataURL();
    this.setState({
      image: dataUrl,
      dataX: Math.round(event.detail.x),
      dataY: Math.round(event.detail.y),
      dataHeight: Math.round(event.detail.height),
      dataWidth: Math.round(event.detail.width),
      dataRotate: Math.round(event.detail.rotate),
      dataScaleX: Math.round(event.detail.scaleX),
      dataScaleY: Math.round(event.detail.scaleY)
    });
  }
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <h5>Image Cropper Plugin</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={9}>
                  <div className="m-b-4">
                    <Cropper
                      ref="myRef"
                      src={previewImage}
                      style={{ height: 420, width: "100%" }}
                      // Cropper.js options
                      aspectRatio={16 / 9}
                      guides={true}
                      crop={this.crop}
                    />
                  </div>
                </Col>
                <Col md={3}>
                  <div className="docs-preview clearfix">
                    <div className="img-preview preview-md">
                      <img src={this.state.image} alt="s" />
                    </div>
                    <div className="img-preview preview-sm">
                      <img src={this.state.image} alt="s" />
                    </div>
                    <div className="img-preview preview-xs">
                      <img src={this.state.image} alt="s" />
                    </div>
                  </div>
                  <div className="docs-data">
                      <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                              <InputGroup.Text id="cropper-x">X</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl defaultValue={this.state.dataX} readOnly
                          />
                      </InputGroup>
                      <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                              <InputGroup.Text id="cropper-y">Y</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl defaultValue={this.state.dataY} readOnly
                          />
                      </InputGroup>
                      <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                              <InputGroup.Text id="cropper-width">Width</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl defaultValue={this.state.dataWidth} readOnly
                          />
                      </InputGroup>
                      <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                              <InputGroup.Text id="cropper-height">Height</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl defaultValue={this.state.dataHeight} readOnly
                          />
                      </InputGroup>
                      <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                              <InputGroup.Text id="cropper-rotate">Rotate</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl defaultValue={this.state.dataRotate} readOnly
                          />
                      </InputGroup>
                      <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                              <InputGroup.Text id="cropper-scale-x">ScaleX</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl defaultValue={this.state.dataScaleX} readOnly
                          />
                      </InputGroup>
                      <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                              <InputGroup.Text id="cropper-scale-y">ScaleY</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl defaultValue={this.state.dataScaleY} readOnly
                          />
                      </InputGroup>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ImageCropper;
