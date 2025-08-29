import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const alerts = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  const cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [alertVisible, setAlertVisibility] = useState(false);
  const [selectedId, setSelectedId] = useState(-1);
  let alertColor = alerts[selectedId];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        {alertVisible && (
          <Alert color={alertColor} onClose={() => setAlertVisibility(false)}>
            My <em>{alertColor}</em> alert
          </Alert>
        )}
      </div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        {alerts.map((item, id) => (
          <Button
            key={id}
            selectedClasses={
              selectedId === id
                ? `btn-${item} btn-sm text-capitalize border border-1 active focus-ring`
                : `btn-${item} btn-sm text-capitalize border border-1 `
            }
            //selectedClasses={handleSelectClasses}
            onClick={() => {
              setSelectedId(id);
              setAlertVisibility(true);
            }}
          >
            {item} Alert
          </Button>
        ))}
      </div>

      <div>
        <ListGroup
          items={cities}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
