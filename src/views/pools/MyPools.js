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
                {this.state.pools.map((pool) => <PoolCard id="77" description={pool.description} quote="4.50" stake={pool.stake} profit="100" bookmaker={pool.bookmaker} totalEvents="5" poolCreatedOn="05/07/2020 12:33" poolUpdatedOn="05/08/2020 07:26"></PoolCard>)}
            </ContentWrapper>
        )
    }
}

export default MyPools