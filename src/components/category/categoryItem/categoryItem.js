import React from 'react';
import 'components/category/categoryItem/categoryItem.scss';
import { NavLink } from 'react-router-dom';

const CategoryItem = ({ item }) => {
    return (
        <div className='aem-GridColumn aem-GridColumn--phone--12 aem-GridColumn--tablet--6 aem-GridColumn--default--3 category-item-wrapper'>
            <NavLink to={item.link}>
                <div className='category-item'>
                    <div className='category-image'>
                        <figure>
                            <img src={item.source} alt={item.title} width={160} />
                        </figure>
                    </div>
                    <div className='category-label'>
                        <div>{item.title}</div>
                        <span>{item.description}</span>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}


export default CategoryItem;