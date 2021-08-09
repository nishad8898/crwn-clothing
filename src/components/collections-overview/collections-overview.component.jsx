import React from 'react';
import './collections-overview.styles.scss';

import CollectionsPreview from '../collections-preview/collections-preview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({collections}) => (
    <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollectionsProps})=>(
                <CollectionsPreview key={id} {...otherCollectionsProps}/>
            ))
        }
    </div>
)


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);