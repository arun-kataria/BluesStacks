import React from 'react';
import Paper from '@material-ui/core/Paper';
import CampaignRow from './camp-row';

export default function ReactVirtualizedTable(props) {
    return (
        <Paper style={{ height: 655, width: '100%' }}>
            <div className="table-header">
                <div className='table-header-item table-header-item-date'>Date</div>
                <div className='table-header-item table-header-item-campaign'>CAMPAGIN</div>
                <div className='table-header-item table-header-item-width'>VIEW</div>
                <div className='table-header-item table-header-item-width'>ACTIONS</div>
                {props.Items.map(element => <CampaignRow Item={element} />)}
            </div>
        </Paper>
    );
}