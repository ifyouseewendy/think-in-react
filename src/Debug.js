import React from 'react';

function Debug(props) {
  const state = props.state;
  let properties = [];

  for (let key in state) {
    let text = '';
    if (typeof(key) == 'boolean') {
      text = key ? 'true' : 'false';
    } else {
      text = `${key}: ${state[key]}`;
    }

    properties.push(<p>{text}</p>);
  }

  const style = {
    border: '1px solid blue',
    position: 'fixed',
    up: 0,
    left: '20px',
  };

  return (
    <table className='debug' style={style}>
      <thead>
        <tr>
          <td>Key</td>
          <td>Value</td>
        </tr>
      </thead>
      {properties}
    </table>
  );
}

export default Debug;
