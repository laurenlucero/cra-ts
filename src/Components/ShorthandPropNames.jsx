export const ShorthandPropNames = () => {

let a = 'hello'
let b = 'world'

let objectInitializer = {a, b}
// console.log(objectInitializer)

let entries = Object.entries(objectInitializer);

  return ( <div>
    <h2>Shorthand Property Names w/ arrow function & .map()</h2>
    <ol>
      {entries.map((entry) => (
        <li>{entry[1]}</li>
      ))}
    </ol>
    </div>
  )
}