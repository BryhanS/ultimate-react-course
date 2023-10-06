export default function App() {
  return (
    <div className="app">
      <logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function logo() {
  return <h1>🏝️Far Away🥘</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X</em>
    </footer>
  );
}
