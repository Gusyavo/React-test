import React, { useState } from "react";
import users from './users.json'
import './App.css'

//Components
function App() {
  //Hook State
  const [subscribers, setSubscribers] = useState(users);

  function sortFunction(prop) {

    function compare(a, b) {
      const A = a[prop];
      const B = b[prop];

      let comparison = 0;
      if (A > B) {
        comparison = 1;
      } else if (A < B) {
        comparison = -1;
      }
      return comparison;
    }
    const arraySorted = [...subscribers]  // copy of the state in order not to modify it directly by reference

    setSubscribers(arraySorted.sort(compare));
  }

  return (
    <div className='App'>
      <div>
        <table className='Table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>lastName</th>
              <th>Age</th>
              <th>Sport</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber, index) =>
              <tr key={index}>
                <td>{subscriber.name}</td>
                <td>{subscriber.lastName}</td>
                <td>{subscriber.age}</td>
                <td>{subscriber.sport}</td>
              </tr>
            )}
            <tr>
              <td><button onClick={() => sortFunction('name')}>Sort by Name</button></td>
              <td><button onClick={() => sortFunction('lastName')}>Sort by Last Name</button></td>
              <td><button onClick={() => sortFunction('age')}>Sort by Age</button></td>
              <td><button onClick={() => sortFunction('sport')}>Sort by Sport</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;
