import { useEffect, useState } from 'react';


const App = (props) => {
  const [items, setItems] = useState({});
  const { data } = props;
  useEffect(() => {
    const request = () =>
      data.forEach((product) => {
        console.log("product is ", product);
        fetch(`http://localhost:8081/temperature/${product.id}`)
          .then((response) => response.json())
          .then((response) => {
            console.log("items are ", items)
            console.log("new resp is ", response)
            console.log("product temperature is ", product.name);
            setItems((prevItems) => ({
              ...prevItems,
              [product.id]: {
                ...product,
                ...response,
              },
            }))
          }
          );
      });

    setInterval(request, 5000);

    request();
  }, []);

  return (
    <div className="App">
      <h2>Beers</h2>
      <div>{items & items[1]}</div>
      <table>
        <thead>
          <tr>
            <th align="left">Product</th>
            <th align="left">Temperature</th>
            <th align="left">Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).map((itemKey) => (
            <tr key={items[itemKey].id}>
              <td width={150}>{items[itemKey].name}</td>
              <td width={150}>{items[itemKey].temperature}</td>
              <td width={150}>
                {items[itemKey].temperature <
                  items[itemKey].minimumTemperature && <span>too low</span>}
                {items[itemKey].temperature >
                  items[itemKey].maximumTemperature && <span>too high</span>}
                {items[itemKey].temperature <=
                  items[itemKey].maximumTemperature &&
                  items[itemKey].temperature >=
                  items[itemKey].minimumTemperature && <span>all good</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
