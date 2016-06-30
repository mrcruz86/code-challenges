import React from 'react';

export default function Item({title, thumb, active, onClick}) {
    let className = active ? "item-active" : null;
    return (
        <li className={className} onClick={e => onClick(e)}>
            <img src={thumb} />
            <h1>{title}</h1>
        </li>
    );
};
