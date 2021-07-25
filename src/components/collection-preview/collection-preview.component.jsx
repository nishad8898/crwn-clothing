import React from 'react';
import './collection-preview.styles.scss';
import ComponentItem from '../collection-item/collection-item.component';
import { withRouter } from 'react-router';

const CollectionPreview = ({title, items, history, match, routeName})=>(
    <div className='collection-preview'>
        <h1 className='title' 
            onClick={()=> history.push(`${match.path}/${routeName}`)} >{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item,idx)=> idx<4)
                .map((item)=>(
                    <ComponentItem key={item.id} item={item} />
                ))
            }
        </div> 
    </div>
);

export default withRouter(CollectionPreview);