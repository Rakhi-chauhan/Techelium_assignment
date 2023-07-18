import "./App.css";
import emp from "./assets/emp.json";
import BarChart from "./components/BarChart";

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Age</th>
        </thead>
        <tbody>
          {emp.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.designation}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="chart-container">
        <BarChart chartData={emp} />
      </div>
    </div>
  );
}

export default App;
