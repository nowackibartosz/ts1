import "./App.css";

function App() {
  let a = "tesdt";
  type FirstObj = { name: string; surname2: string };

  const arr: Array<string> = ["adas"];
  const arr2: FirstObj[] = [
    {
      name: "Adam",
      surname2: "Jochemczyk",
    },
  ];

  // const obj: FirstObj = {
  //   name: "Adam",
  //   surname2: "Jochemczyk",
  // };

  // function setMargin(value: string | number) {
  //   return value;
  // }

  // type Cases = "add" | "subtract";

  // function someSw(cases: Cases) {
  //   switch (cases) {
  //     case "add":
  //       break;
  //     case "subtract":
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // interface Kid {
  //   name: string;
  //   parentName?: string;
  //   age: number;
  //   introduce: () => void;
  // }

  // type Type2 = {
  //   readonly name: string;
  //   age: number;
  //   kids: Kid[];
  // };

  // const human: Type2 = {
  //   name: "s",
  //   age: 55,
  //   kids: [
  //     {
  //       name: "Jolanta",
  //       parentName: "Max",
  //       age: 233,
  //       introduce: () => {
  //         console.log("siemanko");
  //       },
  //     },
  //   ],
  // };
  // type Siema = {
  //   witam: string;
  // };

  // //generyki
  // function genericEx<T>(arg: T): T {
  //   return arg;
  // }

  // genericEx<Kid>();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <p>{a}</p>
      </header>
    </div>
  );
}

export default App;
