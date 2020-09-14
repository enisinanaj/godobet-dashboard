import React, {Component} from 'react';
import PoolCard from './PoolCard';
import ContentWrapper from '../../components/layout/ContentWrapper';
import TokenManager from '../../components/auth/Token';

class MyPools extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            description: '',
            quote: '',
            stake: '',
            profit: '',
            bookmaker: '',
            pools: [],
        };
        this.getMyPools();
    }

    async getMyPools() {
        var token =  await TokenManager.getInstance().getToken();
        fetch('http://localhost:5005/pools', {method: 'GET', headers: {'Content-Type': 'application/json', 'X-Auth': token}}).then((response) => response.json()).then((response) => this.setState({pools: response._embedded.pools}));
    }

    render() {
        return (
            <ContentWrapper>
                {this.state.pools.map((pool) => <PoolCard id={pool.id} description={pool.description} totalQuote={pool.totalQuote} stake={pool.stake} profit={pool.profit} bookmaker={pool.bookmaker} totalEvents={pool.totalEvents} poolCreatedOn={pool.createdOn} poolUpdatedOn={pool.updatedOn}></PoolCard>)}
            </ContentWrapper>
        )
    }
}

export default MyPools