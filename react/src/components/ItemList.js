import React from 'react';
import Item from './Item';

export default function ItemList({items, onItemClick}) {
    return (
      <div className='item-list'>
        <ul>
            {items.map(item => <Item
                key={item.id}
                title={item.title}
                thumb={item.thumbnail_url}
                active={item.active}
                onClick={e => onItemClick(item)}
            />)}
        </ul>
      </div>
    );
};
