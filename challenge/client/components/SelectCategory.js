import React from 'react';
import categories from './../utils/categories';

const SelectCategory = ({
    input: {
        value,
        onChange
    },
    id,
    name
}) => (
    <select
        className="form-control"
        id={ id }
        onChange={ onChange }
        value={ value }
    >
        <option value={ categories.INFO }>Info</option>
        <option value={ categories.WARNING }>Warning</option>
        <option value={ categories.ERROR }>Error</option>
    </select>
);

SelectCategory.propTypes = {
    input: React.PropTypes.shape({
        value: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired
    }).isRequired,
    id: React.PropTypes.string.isRequired
};

export default SelectCategory;
