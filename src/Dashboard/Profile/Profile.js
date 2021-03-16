import React, {Component} from 'react';
import {Row, Col, Card } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import md5 from 'md5';

class Profile extends Component {
    state = {
        activeProfileTab: 'home',
        isPersonalEdit: false,
        isContactEdit: false,
        isOtherEdit: false,
        address: {}
    };

    avatar = (email) => {
        if (
            this.props.user._embedded &&
            this.props.user._embedded.media &&
            this.props.user._embedded.media.filter((m) => m.mediaType === "avatar").length > 0) {
            return this.props.user._embedded.media
                .filter((m) => m.mediaType === "avatar")
                .sort((a, b) => b.id - a.id)[0].url;
        }

        return ("http://www.gravatar.com/avatar/" + md5(email.toLowerCase().trim()) + "?s=32");
    }

    componentDidMount() {
        this.address();
    }

    address = () => {
        var sortedAddresses = this.props.user._embedded && this.props.user._embedded.addresses
            ? this.props.user._embedded.addresses.sort((a, b) => new Date(b.insertedOn).getTime() - new Date(a.insertedOn).getTime())
            : [];
        
        this.setState({address: sortedAddresses.length > 0 ? sortedAddresses[0] : {}});
    }

    render() {
        return (
            <Aux>
                <div className='user-profile user-card mb-4'>
                    <Card.Header className='border-0 p-0 pb-0 pt-10'>
                    </Card.Header>
                    <Card.Body className='py-0'>
                        <div className="user-about-block m-0">
                            <Row>
                                <Col md={4} className='text-center' style={{marginTop: -35}}>
                                    <div className="change-profile text-center">
                                        <div className='w-auto d-inline-block'>
                                            <div as='a' variant="link" id="dropdown-basic">
                                                <div className="profile-dp">
                                                    <div className="position-relative d-inline-block">
                                                        <img className="img-radius" src={this.avatar(this.props.user.email)} style={{objectFit: 'cover', width: 80, height: 80}} alt="User"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="mb-1">{this.props.user.name} {this.props.user.lastName}</h5>
                                    <p className="mb-2 text-muted"></p>
                                </Col>
                                <Col md={8} className='mt-md-4'>
                                    <Row>
                                        <Col>
                                            <a href={DEMO.BLANK_LINK} className="mb-1 text-muted d-flex align-items-end text-h-primary"><i className="feather icon-mail mr-2 f-18"/>{this.props.user.email}</a>
                                            <div className="clearfix"/>
                                            <a href={DEMO.BLANK_LINK} className="mb-1 text-muted d-flex align-items-end text-h-primary"><i className="feather icon-phone mr-2 f-18"/>{this.props.user.phoneNumber}</a>
                                        </Col>
                                        <Col>
                                            <div className="media">
                                                <i className="feather icon-map-pin mr-2 mt-1 f-18"/>
                                                <div className="media-body">
                                                    <p className="mb-0 text-muted">{this.state.address.street}</p>
                                                    <p className="mb-0 text-muted">{this.state.address.city},</p>
                                                    <p className="mb-0 text-muted">{this.state.address.zipCode} {this.state.address.state}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </div>
                <Row>
                    <Col md={4} className='order-md-1'>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);