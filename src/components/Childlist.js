import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem.js';

import './childlists.css';

export default class Childlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      listName: 'Todo List',
      itemsInput: '',
      elements: {},
    };
  }

  onChange = (typeOfInput, { target: { value } }) =>
    this.setState({
      [typeOfInput]: value,
    });

  onKeyDown = e => {
    const hasText = this.state.itemsInput.length !== 0;
    const isEnterKeyDown = e.key === 'Enter';

    const { elements, itemsInput } = this.state;

    if (hasText && isEnterKeyDown) {
      this.setState({
        elements: {
          ...elements,
          [Date.now()]: {
            id: Date.now(),
            text: itemsInput,
            isCheck: false,
          },
        },
        itemsInput: '',
      });
    }
  };

  checkBoxChange = id => {
    const { [id]: todoToUpdate } = this.state.elements;

    this.setState({
      elements: {
        ...this.state.elements,
        [id]: { ...todoToUpdate, isCheck: !todoToUpdate.isCheck },
      },
    });
  };

  render() {
    const items = Object.values(this.state.elements).map(
      ({ id, text, isCheck }) => (
        <ListItem
          key={id}
          id={id}
          check={isCheck}
          onChange={this.checkBoxChange.bind(this, id)}
        >
          {text}
        </ListItem>
      )
    );
    const { listName, itemsInput } = this.state;
    const { removeList, id } = this.props;
    return (
      <div className="childList">
        <div className="headerList">
          <input
            className="listName"
            type="text"
            onChange={this.onChange.bind(this, 'listName')}
            value={listName}
          />
          <button className="delete" onClick={removeList.bind(this, id)}>
            <i className="fas fa-times" />
          </button>
        </div>

        <div className="inputBloc">
          <input
            className="addItem"
            type="text"
            onChange={this.onChange.bind(this, 'itemsInput')}
            value={itemsInput}
            onKeyDown={this.onKeyDown}
            placeholder="Item to do"
          />
        </div>
        <div>{items}</div>
      </div>
    );
  }
}

Childlist.propTypes = {
  id: PropTypes.number.isRequired,
  removeList: PropTypes.func.isRequired,
};
