import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        required
        value={text}
        type="text"
        placeholder="Find favorite film"
        onChange={handleChange}
      />
      <button type="submit">{nameButton}</button>
    </form>
  );
};
