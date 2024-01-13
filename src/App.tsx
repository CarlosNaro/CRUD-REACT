// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Table from "./components/table";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className=" flex justify-center  ">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
      </div>

      <div className=" flex  w-full bg-black       ">
        <div className=" card ">
          <form className=" ">
            <div className=" text-left space-y-0 mb-2 ">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Nombre
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className=" text-left space-y-0 mb-2 ">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Apellido
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className=" text-left space-y-0 mb-2 ">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Edad
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className=" text-left space-y-0 mb-2 ">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Cargo
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className=" text-left space-y-0 ">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Años de labor
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>

        <Table />
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* <a href="https://www.youtube.com/watch?v=U1u2jNYXmBw&ab_channel=ChrisG%C3%A1mezProfe"></a> */}
    </>
  );
}

export default App;
