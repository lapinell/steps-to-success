import React from "react";
import { Table } from "semantic-ui-react";
import Step from "./Components/Step";

class App extends React.PureComponent {
  dispalySteps = () => {
    return <Step />;
  };

  render() {
    return (
      <div className="App">
        <h1>Steps to Success</h1>
        <h2>This is created and maintained by the user</h2>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Step Name</Table.HeaderCell>
              <Table.HeaderCell>Required Step</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
            {this.displaySteps}
          </Table.Header>
        </Table>
      </div>
    );
  }
}

export default App;
