import { multiply } from "../utils";

export const DefaultParameters = () => {
  let withParam = multiply(5, 2); // 10
  let defaultParam = multiply(5); // 5
  return (
    <div>
      <h2>Default parameters</h2>
      <ul>
        <li>With parameter: {withParam}</li>
        <li>Without parameter: {defaultParam}</li>
      </ul>
    </div>
  );
};
