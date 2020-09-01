import React, {Component} from 'react';
import PoolCard from './PoolCard';
import ContentWrapper from '../../components/layout/ContentWrapper';

class MyPools extends Component {

    render() {
        return (
            <ContentWrapper>
                <PoolCard id="77" description="Schedina Serie A" quote="4.50" stake="1%" profit="100" bookmaker="William Hill" totalEvents="5" poolCreatedOn="05/07/2020 12:33" poolUpdatedOn="05/08/2020 07:26"></PoolCard>
                <PoolCard id="16" description="Schedina Serie B" quote="6.30" stake="2%" profit="140" bookmaker="William Hill" totalEvents="7" poolCreatedOn="05/07/2019 13:35" poolUpdatedOn="08/08/2019 21:43"></PoolCard>
            </ContentWrapper>
        )
    }
}

export default MyPools