

function App() {
  

  declare namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }


  return
    <h1> Hello World </h1>

}

export default App
