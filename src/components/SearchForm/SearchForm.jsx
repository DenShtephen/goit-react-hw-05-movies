import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit, nameButton }) => {
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!text.trim()) {
      alert('Add Todo');
      return;
    }

    onSubmit(text);
    setText('');
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        required
        className="search-input"
        value={text}
        type="text"
        placeholder="Find favorite film"
        onChange={handleChange}
      />
      <button type="submit" className="search-button">
        {nameButton}
      </button>
    </form>
  );
};
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  nameButton: PropTypes.string.isRequired,
};
