import React from 'react';
import PropTypes from 'prop-types';

import './listItem.css';
import './checkbox.css';

const ListItem = ({ children, id, check, onChange }) => {
  return (
    <div className="listItem">
      <input type="checkbox" checked={check} onChange={onChange} id={id} />
      <label htmlFor={id} className={check ? 'isCheck' : 'isNotCheck'}>
        {children}
      </label>
    </div>
  );
};

ListItem.propTypes = {
  children: PropTypes.string.isRequired,
  check: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ListItem;
