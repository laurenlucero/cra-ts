export const TemplateLiteral = () => {

  let a = 1;
  let b = 2;
  let c = a + b;

  return (
    <div>
      <h2>Template literal</h2>
      <p>{`${c} is equal to ${a} + ${b}`}</p> 
    </div>
  );
}
