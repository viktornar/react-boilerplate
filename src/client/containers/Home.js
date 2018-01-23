import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { toggleTodo } from '../actions/todos';
import Header from '../components/Header';

const Home = ({ todos, actions }) => {
  return (
    <div className="home">
      <Header title="Home" />
      <div>This is home</div>
      <br />
      {todos.map((todo) => (
        <div key={ todo.id }>
          <span style={ (todo.checked) ? { textDecoration: 'line-through' } : {} }>{ todo.text } </span>
          <button onClick={ () => actions.toggleTodo(todo.id) }>Toggle</button>
        </div>
      ))}
      <br />
      <Link to="/page">
        <button>Go to page</button>
      </Link>
    </div>
  );
};

Home.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    toggleTodo
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
