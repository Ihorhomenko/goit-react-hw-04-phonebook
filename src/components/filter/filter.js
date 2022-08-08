import React, { Component } from 'react';
import './filter.css'

class Filter extends Component {
    handleInputFilter = e => {
        const filterValue = e.currentTarget.value;
        this.props.onFilter(filterValue)
    }

    render () {
        return (
            <label className='filter'>
                Find contacts by name
                <input className='filter-input' onChange={this.handleInputFilter}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"/>
            </label>
        )
        }
    }


export default Filter;