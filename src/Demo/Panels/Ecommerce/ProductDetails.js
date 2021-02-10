import React from 'react';
import {
    Row,
    Col,
    Card,
    ProgressBar,
    Table
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import prod1 from '../../../assets/images/product/prod-big-1.jpg';
import prod2 from '../../../assets/images/product/prod-big-2.jpg';
import prod3 from '../../../assets/images/product/prod-big-3.jpg';
import prod4 from '../../../assets/images/product/prod-big-4.jpg';
import prod5 from '../../../assets/images/product/prod-big-5.jpg';

import DEMO from "../../../store/constant";


class ProductDetails extends React.Component {
    state = {
        isOpen: 1
    };

    render() {
        const isOpen = this.state.isOpen;
        const itemClass = 'carousel-item';
        const itemClassActive = 'carousel-item active';

        const productClass = 'w-25 h-auto';
        const productClassActive = 'w-25 h-auto active';
        return (
            <Aux>
                <Row className='btn-page'>
                    <Col sm={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col lg={5}>
                                        <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
                                            <div className="carousel-inner">
                                                <div className={isOpen === 1 ? itemClassActive : itemClass}>
                                                    <img src={prod1} className="d-block w-100" alt="Product"/>
                                                </div>
                                                <div className={isOpen === 2 ? itemClassActive : itemClass}>
                                                    <img src={prod2} className="d-block w-100" alt="Product"/>
                                                </div>
                                                <div className={isOpen === 3 ? itemClassActive : itemClass}>
                                                    <img src={prod3} className="d-block w-100" alt="Product"/>
                                                </div>
                                                <div className={isOpen === 4 ? itemClassActive : itemClass}>
                                                    <img src={prod4} className="d-block w-100" alt="Product"/>
                                                </div>
                                                <div className={isOpen === 5 ? itemClassActive : itemClass}>
                                                    <img src={prod5} className="d-block w-100" alt="Product"/>
                                                </div>
                                            </div>
                                            <ol className="carousel-indicators position-relative">
                                                <li data-target="#carouselExampleCaptions" data-slide-to="0" onClick={() => this.setState({isOpen: 1})} className={isOpen === 1 ? productClassActive : productClass}>
                                                    <img src={prod1} className="d-block wid-50" alt="Product"/>
                                                </li>
                                                <li data-target="#carouselExampleCaptions" data-slide-to="1" onClick={() => this.setState({isOpen: 2})} className={isOpen === 2 ? productClassActive : productClass}>
                                                    <img src={prod2} className="d-block wid-50" alt="Product"/>
                                                </li>
                                                <li data-target="#carouselExampleCaptions" data-slide-to="2" onClick={() => this.setState({isOpen: 3})} className={isOpen === 3 ? productClassActive : productClass}>
                                                    <img src={prod3} className="d-block wid-50" alt="Product"/>
                                                </li>
                                                <li data-target="#carouselExampleCaptions" data-slide-to="3" onClick={() => this.setState({isOpen: 4})} className={isOpen === 4 ? productClassActive : productClass}>
                                                    <img src={prod4} className="d-block wid-50" alt="Product"/>
                                                </li>
                                                <li data-target="#carouselExampleCaptions" data-slide-to="4" onClick={() => this.setState({isOpen: 5})} className={isOpen === 5 ? productClassActive : productClass}>
                                                    <img src={prod5} className="d-block wid-50" alt="Product"/>
                                                </li>
                                            </ol>
                                        </div>
                                    </Col>
                                    <Col lg={7}>
                                        <div className="pl-lg-4">
                                            <h6 className="text-muted">Jolyecart logistic</h6>
                                            <h3 className="mt-0">Women Purple Sling Bag <a href={DEMO.BLANK_LINK} className="text-muted"><i className="mdi mdi-square-edit-outline ml-2"/></a> </h3>
                                            <p className="mb-1">Added Date: 09/12/2018</p>
                                            <div className="mt-3">
                                                <h5><span className="badge badge-success">Instock</span></h5>
                                            </div>
                                            <div className="mt-4">
                                                <h6>Special price:</h6>
                                                <h3>$139.58 <del className="text-muted font-weight-normal h5"> <small>$322.53</small></del> <small className="text-success h5">86% off</small></h3>
                                                <h5><span className="badge badge-success">3.8 <i className="feather icon-star-on"/></span> 179 ratings and 43 reviews</h5>
                                            </div>
                                            <div className="mt-4">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <div className="media">
                                                            <i className="fas fa-tag text-success mr-2 mt-2"/>
                                                            <div className="media-body">
                                                                <strong className="">Bank Offer</strong>
                                                                <span>10% Instant Discount on ABCD Bank Credit &amp; Debit Cards</span>
                                                                <a href={DEMO.BLANK_LINK}>T&amp;C</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mt-2">
                                                        <div className="media">
                                                            <i className="fas fa-tag text-success mr-2 mt-2"/>
                                                            <div className="media-body">
                                                                <strong className="">Bank Offer</strong>
                                                                <span>5% Unlimited Cashback on Flipkart PQR Bank Credit Card</span>
                                                                <a href={DEMO.BLANK_LINK}>T&amp;C</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mt-2">
                                                        <div className="media">
                                                            <i className="fas fa-tag text-success mr-2 mt-2"/>
                                                            <div className="media-body">
                                                                <strong className="">Bank Offer</strong>
                                                                <span>Extra 5% off* with XYZ Bank Buzz Credit Card</span>
                                                                <a href={DEMO.BLANK_LINK}>T&amp;C</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <h6>Color</h6>
                                                    <div className="btn-group btn-group-toggle mb-3" data-toggle="buttons">
                                                        <label className="btn btn-primary hei-40 mr-2 active">
                                                            <input type="radio" name="options" id="option1" defaultChecked={true}/>
                                                        </label>
                                                        <label className="btn btn-success hei-40 mr-2">
                                                            <input type="radio" name="options" id="option2" />
                                                        </label>
                                                        <label className="btn btn-warning hei-40 mr-2">
                                                            <input type="radio" name="options" id="option3" />
                                                        </label>
                                                        <label className="btn btn-danger hei-40 mr-2">
                                                            <input type="radio" name="options" id="option3" />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 mt-md-0 mt-2">
                                                    <h6>Size</h6>
                                                    <button className="btn btn-outline-secondary btn-sm">XS</button>
                                                    <button className="btn btn-outline-secondary btn-sm">S</button>
                                                    <button className="btn btn-outline-secondary active btn-sm">M</button>
                                                    <button className="btn btn-outline-secondary btn-sm">L</button>
                                                    <button className="btn btn-outline-secondary btn-sm">XL</button>
                                                </div>
                                                <div className="col-sm-6 mt-md-0 mt-2">
                                                    <h6><i className="feather icon-map-pin"/> Deliver to</h6>
                                                    <div className="form-group fill">
                                                        <label className="floating-label" htmlFor="pincode">Enter delivery pincode</label>
                                                        <input type="password" className="form-control" id="pincode" placeholder="Enter delivery pincode"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 text-sm-right mt-md-0 mt-2">
                                                    <h6>Quantity</h6>
                                                    <div className="form-group">
                                                        <input type="number" min="1" defaultValue="1" className="form-control" placeholder="Qty"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 mt-md-0 mt-2">
                                                    <button type="button" className="btn btn-block btn-lg btn-warning"><i className="fas fa-cart-plus mr-1"/> Add to cart</button>
                                                </div>
                                                <div className="col-sm-6">
                                                    <button type="button" className="btn btn-block btn-lg btn-danger mt-md-0 mt-2"><i className="fas fa-bolt mr-1"/> Buy now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="mt-4">
                                            <h6>Description:</h6>
                                            <p>This stylish Sling Bag SAHAL FASHION from is best to carry to work to add an element of style to your office wear.Made from premium. It is compact to store your important things with ease.Made From outer
                                                material PU and inner material From Fabric. Furthermore, they feature Turnlock closure are best suited for a casual and partywear occasion.</p>
                                            <div className="w-100">
                                                <div className="row mb-2">
                                                    <div className="col-4">Material</div>
                                                    <div className="col-8">PU</div>
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-4">Number of Compartments</div>
                                                    <div className="col-8">2</div>
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-4">Model Name</div>
                                                    <div className="col-8">Sahalsling bag</div>
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-4">Bag Size</div>
                                                    <div className="col-8">Reguler</div>
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-4">Closure</div>
                                                    <div className="col-8">Magnetic Button</div>
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-4">Pattern</div>
                                                    <div className="col-8">Solid</div>
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-4">Pack of</div>
                                                    <div className="col-8">1</div>
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-4">Sales Package</div>
                                                    <div className="col-8">1 sling bag</div>
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-4">Width</div>
                                                    <div className="col-8">10 mm</div>
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-4">Height</div>
                                                    <div className="col-8">27 mm</div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-4">Weight</div>
                                                    <div className="col-8">250 g</div>
                                                </div>
                                            </div>
                                            <h6><a href={DEMO.BLANK_LINK}>Manufacturing, Packaging and Import Info</a></h6>
                                        </div>
                                    </Col>
                                </Row>
                                <Table responsive className="mb-0">
                                    <thead className="thead-light">
                                    <tr>
                                        <th>Seller</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Revenue</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Octroyee mall USA</td>
                                        <td>$139.50</td>
                                        <td>
                                            <div className="mb-0">
                                                <span>478 </span>
                                                <ProgressBar variant='success' now={56} />
                                            </div>
                                        </td>
                                        <td>$1,89,547</td>
                                    </tr>
                                    <tr>
                                        <td>Chromin - Brazil</td>
                                        <td>$149.99</td>
                                        <td>
                                            <div className="mb-0">
                                                <span>73 </span>
                                                <ProgressBar variant='danger' now={16} />
                                            </div>
                                        </td>
                                        <td>$87,245</td>
                                    </tr>
                                    <tr>
                                        <td>Milan - Navsari</td>
                                        <td>$106.87</td>
                                        <td>
                                            <div className="mb-0">
                                                <span>781 </span>
                                                <ProgressBar variant='success' now={72} />
                                            </div>
                                        </td>
                                        <td>$5,87,478</td>
                                    </tr>
                                    <tr>
                                        <td>Xendrasn - Japan</td>
                                        <td>$239.66</td>
                                        <td>
                                            <div className="mb-0">
                                                <span>815 </span>
                                                <ProgressBar variant='success' now={89} />
                                            </div>
                                        </td>
                                        <td>$55,781</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ProductDetails;