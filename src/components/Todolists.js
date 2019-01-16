import React, { Component } from 'react';

import Childlist from './Childlist.js';

import './todolists.css';

export default class Todolists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
  }

  addList = () =>
    this.setState({
      lists: [...this.state.lists, Date.now()],
    });

  removeList = id => {
    this.setState({
      lists: this.state.lists.filter(list => list !== id),
    });
  };

  render() {
    const lists = this.state.lists.map(list => (
      <Childlist key={list} id={list} removeList={this.removeList} />
    ));
    return (
      <div className="todolists">
        <h1>Todo lists</h1>
        <div className="lists">
          {lists}
          <div className="buttonPlace">
            <span>Add new list</span>
            <button className="addList" onClick={this.addList}>
              <i className="fas fa-plus" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
