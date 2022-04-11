import { useState, useCallback } from "react";

function Button(props) {
  return <button onClick={props.onClick}>{props.name}</button>;
}

function CountCallback() {
  const [count, setCount] = useState(0);
  const [isActive, setActive] = useState(false);

  const handleCount = useCallback(() => {
    setCount(count + 1);
    console.log("Count called");
  }, [count]);
  const handleShow = useCallback(() => {
    setActive(!isActive);
    console.log("Show%Hide called");
  }, [isActive]);

  return (
    <div>
      <h2>Count useCallback</h2>
      {isActive && (
        <div>
          <h1>{count}</h1>
          <Button onClick={handleCount} name="Increment" />
        </div>
      )}
      <Button
        onClick={handleShow}
        name={isActive ? "Hide Counter" : "Show Counter"}
      />
    </div>
  );
}

export default CountCallback;
