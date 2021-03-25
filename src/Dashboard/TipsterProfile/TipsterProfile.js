import React, {useState, useEffect} from 'react'
import {Row, Col, Card } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import BASE_CONFIG from "../../store/config";
import TokenManager from '../../App/auth/TokenManager';

import CoverImage from '../../assets/images/godobet-placeholder.jpg'



function TipsterProfile(props) {
    const [currentUser, setCurrentUser] = useState({})

    let userId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

    useEffect(() => {
        TokenManager.getInstance().getToken().then(jwt => {
            fetch(BASE_CONFIG.API_URL + '/users/' + userId, {
                headers: {
                    'Content-Type': "application/json",
                    "X-Auth": jwt,
                },
            }).then((e) => e.json()).then(user => setCurrentUser(user))
        })
    }, [])

    const getLatestImage = (media) => {
        if (
          !media._embedded ||
          media.length === 0 ||
          !media._embedded.media
        ) {
          return CoverImage;
        }
    
        return media._embedded.media.sort((a, b) => b.id - a.id)[0].url;
      };

      console.log(currentUser)


    return (
        <Aux>
                <Row md={12}>
                    <Col md={4}>
                    <Card style={{minHeight: '800px'}}>
                        <Row className='p-5'>
                            <Col style={{textAlign: 'center'}}>
                            <img src={getLatestImage(currentUser)} height='200px' width='200px' />
                            <h3>{currentUser.name + currentUser.lastName}</h3>
                            </Col>
                        </Row>
                            <hr />
                    </Card>
                    </Col>
                </Row>
            </Aux>
    )
}

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default 
    connect(mapStateToProps, mapDispatchToProps)(TipsterProfile)
  ;
