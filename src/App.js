import React, { useState } from "react";
import users from './users.json'

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
    const arraySorted = subscribers.sort(compare);

    setSubscribers([...arraySorted]);
  }

  return (
    <div className='App'>
      <div>
        <table className='App-header'>
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
          </tbody>
        </table>
      </div>
      <button onClick={() => sortFunction('name')}>Sort By Name</button>
      <button onClick={() => sortFunction('age')}>Sort By Age</button>
      <button onClick={() => sortFunction('sport')}>Sort By Sport</button>
    </div>
  );
}
export default App;
