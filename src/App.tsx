import React from 'react';
import './App.css';
import clsx from 'clsx';

const App: React.FC = () => {
  const [selected, setSelected] = React.useState('');

  const handleClick = (box: string) => {
    setSelected(box);
  };

  const listStyles = {
    justifyContent: ''
  };

  const formDetails = <div className="details">details</div>;

  const box1 = (
    <li key="box1" onClick={() => handleClick('box1')}>
      box1
      {formDetails}
    </li>
  );

  const box2 = (
    <li key="box2" onClick={() => handleClick('box2')}>
      box2
      {formDetails}
    </li>
  );

  const box3 = (
    <li key="box3" onClick={() => handleClick('box3')}>
      box3
      {formDetails}
    </li>
  );

  let items = [box1, box2, box3];

  if (selected === 'box1') {
    items = [box1];
    listStyles.justifyContent = 'flex-start';
  } else if (selected === 'box2') {
    items = [box2];
    listStyles.justifyContent = 'center';
  } else if (selected === 'box3') {
    items = [box3];
    listStyles.justifyContent = 'flex-end';
  }

  return (
    <div className="app">
      <div onClick={() => handleClick('')}>clear</div>
      <ul
        className={clsx('list', selected && 'is-selected')}
        style={listStyles}
      >
        {items}
      </ul>
    </div>
  );
};

export default App;
