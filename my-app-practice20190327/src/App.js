import React, {
  Component
} from 'react';
import Annie from './annie';
import Add from './add';

class App extends Component {
  state = {
    data: [{
        name: 'Annie',
        age: 10,
        saying: 'ya',
        id: 1
      },
      {
        name: 'Benson',
        age: 20,
        saying: 'ya',
        id: 2
      },
      {
        name: 'nina',
        age: 18,
        saying: 'ya',
        id: 3
      },
    ]
  }

  add = (add) => {
    add.id = Math.random();
    let data = [...this.state.data, data]
    this.setState({
      data: data
    })
  }

  render() {
    return ( <
      div className = "App" >
      <
      h1 > Hello < /h1>  <
      p > welcome < /p>   <
      Annie data = {
        this.state.data
      }
      /> <
      Add add = {
        this.add
      }
      / > < /
      div >
    );
  }
}

export default App;