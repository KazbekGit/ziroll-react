import "./App.css";
import Header from "./components/header";
import Main from "./components/main";

const names = ["alice", "mark", "carl", "ice"];
console.log(
  names.map((elem, index, arr) => {
    return `<p>${elem[0].toUpperCase() + elem.slice(1)}</p>`;
  })
);
function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
