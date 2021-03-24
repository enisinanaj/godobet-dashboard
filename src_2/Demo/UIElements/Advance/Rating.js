import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import Rating from 'react-rating';

import Aux from "../../../hoc/_Aux";

class AdvanceRating extends React.Component {
    state = {
        blockRating: 7,
        movieRating: 1,
        squareRating: 3,
        pillRating: 4,
        reverseRating: 2,
        horizontalRating: 3,
        featherRating: 2,
        fractionalRating: 4.25
    };

    render() {
        const movieRate = ['Bad','Mediocre','Good','Awesome'];
        const reverseRate = ['Strongly Agree','Agree','Neither Agree or Disagree','Disagree','Strongly Disagree'];
        return (
            <Aux>
                <Row>
                    <Col sm={12} md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">1/10 Rating</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>Use <code>className='theme-bar-block'</code> with component <code>Rating</code> to see default rating.</Card.Text>
                                <Rating
                                    stop={10}
                                    initialRating={this.state.blockRating}
                                    emptySymbol={<span className="theme-bar-block"><span/></span>}
                                    fullSymbol={<span className="theme-bar-block"><span className="active"/></span>}
                                    onChange={(rate) => this.setState({blockRating: rate})}
                                    onHover={(rate) => document.getElementById('block-rating').innerHTML = rate || this.state.blockRating}
                                />
                                <span id="block-rating" className="current-rating-block">{this.state.blockRating}</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Pill Rating</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>Use <code>className='theme-bar-pill'</code> with component <code>Rating</code> to see pill rating.</Card.Text>
                                <div className="pill-rating">
                                    <Rating
                                        stop={6}
                                        initialRating={this.state.pillRating}
                                        emptySymbol={['A', 'B', 'C', 'D', 'E', 'F'].map(n =><span className="theme-bar-pill"><span>{n}</span></span>)}
                                        fullSymbol={['A', 'B', 'C', 'D', 'E', 'F'].map(n =><span className="theme-bar-pill"><span className="active">{n}</span></span>)}
                                        onChange={(rate) => this.setState({pillRating: rate})}
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Square Rating</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>Use <code>className='theme-bar-square'</code> with component <code>Rating</code> to see square rating.</Card.Text>
                                    <Rating
                                        initialRating={this.state.squareRating}
                                        emptySymbol={[1,2,3,4,5].map(n =><span className="theme-bar-square"><span>{n}</span></span>)}
                                        fullSymbol={[1,2,3,4,5].map(n =><span className="theme-bar-square"><span className="active">{n}</span></span>)}
                                        onChange={(rate) => this.setState({squareRating: rate})}
                                    />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Font Awesome Rating</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>Use font-awesome icons in <code>emptySymbol</code> and <code>fullSymbol</code> with component <code>Rating</code> to see font awesome rating.</Card.Text>
                                <Rating
                                    emptySymbol="fa fa-star-o fa-2x"
                                    fullSymbol="fa fa-star fa-2x"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Feather Icon Rating</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>Use feather icons in <code>emptySymbol</code> and <code>fullSymbol</code> with component <code>Rating</code> to see feather rating.</Card.Text>
                                <Rating
                                    initialRating={this.state.featherRating}
                                    emptySymbol={<span className='text-dark'><i className='feather icon-circle fa-2x' /></span>}
                                    fullSymbol={<span className='text-warning'><i className='feather icon-target fa-2x' /></span>}
                                    onChange={(rate) => this.setState({featherRating: rate})}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Fractional Star Rating</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>Use <code>fractions</code> with component <code>Rating</code> to see fractions rating.</Card.Text>
                                <div className="text-warning">
                                    <Rating
                                        stop={10}
                                        initialRating={this.state.fractionalRating}
                                        emptySymbol="fa fa-star-o fa-2x"
                                        fullSymbol="fa fa-star fa-2x"
                                        fractions={4}
                                        onChange={(rate) => this.setState({fractionalRating: rate})}
                                        onHover={(rate, ) => document.getElementById('fractional-rating').innerHTML = rate || this.state.fractionalRating}
                                    />
                                </div>
                                <Card.Text>Your Rating is : <span id="fractional-rating">{this.state.fractionalRating}</span></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Movie Rating</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>Use <code>className='theme-bar-movie'</code> with component <code>Rating</code> to see movie rating.</Card.Text>
                                <Rating
                                    stop={4}
                                    initialRating={this.state.movieRating}
                                    emptySymbol={<span className="theme-bar-movie"><span/></span>}
                                    fullSymbol={<span className="theme-bar-movie"><span className="active"/></span>}
                                    onChange={(rate) => this.setState({movieRating: rate})}
                                    onHover={(rate) => document.getElementById('movie-rating').innerHTML = movieRate[rate-1] || movieRate[this.state.movieRating-1]}
                                />
                                <div id="movie-rating" className="current-rating-movie">{movieRate[this.state.movieRating-1]}</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Reverse Rating</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>Use <code>className='theme-bar-reverse'</code> with component <code>Rating</code> to see reverse rating.</Card.Text>
                                <div className="reverse-rating">
                                    <Rating
                                        initialRating={this.state.reverseRating}
                                        emptySymbol={<span className="theme-bar-reverse"><span/></span>}
                                        fullSymbol={<span className="theme-bar-reverse"><span className="active"/></span>}
                                        onChange={(rate) => this.setState({reverseRating: rate})}
                                        onHover={(rate) => document.getElementById('reverse-rating').innerHTML = reverseRate[rate-1] || reverseRate[this.state.reverseRating-1]}
                                    />
                                </div>
                                <div id="reverse-rating" className="current-rating-reverse">{reverseRate[this.state.reverseRating-1]}</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Horizontal Rating</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>Use <code>className='theme-bar-horizontal'</code> with component <code>Rating</code> to see horizontal rating.</Card.Text>
                                <div className="horizontal-rating">
                                    <Rating
                                        stop={10}
                                        initialRating={this.state.horizontalRating}
                                        emptySymbol={<span className="theme-bar-horizontal"><span/></span>}
                                        fullSymbol={<span className="theme-bar-horizontal"><span className="active"/></span>}
                                        onChange={(rate) => this.setState({horizontalRating: rate})}
                                        onHover={(rate) => document.getElementById('horizontal-rating').innerHTML = rate || this.state.horizontalRating}
                                    />
                                </div>
                                <div id="horizontal-rating" className="current-rating-horizontal">{this.state.horizontalRating}</div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default AdvanceRating;