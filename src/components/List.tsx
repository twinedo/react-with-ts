import React from 'react';
import { IState as IProps } from '../App';

const List: React.FC<IProps> = ({ people }) => {
    const renderList = () => {
        return people.map((obj) => {
            return (
                <li className='List'>
                    <div className='List-header'>
                        <img className='List-img' src={obj.url} alt='img' />
                        <h2>{obj.name}</h2>
                    </div>
                    <p>{obj.age} years old</p>
                    <p className='List-note'>{obj.note}</p>
                </li>
            );
        });
    };
    return <ul>{renderList()}</ul>;
};

export default List;
