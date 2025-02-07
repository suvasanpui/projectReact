import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { setTitle } from '../store/titleSlice';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.title.value);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(event.target.value));
  };

  return (
    <header>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        className="text-2xl font-bold p-2 w-full border-none outline-none text-center"
        style={{ background: 'transparent' }}
        placeholder="Enter title"
      />
    </header>
  );
};

export default Header;
