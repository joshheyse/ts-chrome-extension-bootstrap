import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Popup extends React.Component<{}, {}> {

  public render() {
    return <div>Hello</div>;
  }
}

ReactDOM.render(
  <Popup />,
  document.getElementById('root')
);
