

import './App.css';

import {useState} from 'react'

function App() {

  const [activeSearch, setActiveSearch] = useState();

  const updateActiveSearch = (ev) => {
    console.log(ev.currentTarget.value);
    setActiveSearch(ev.currentTarget.value)
  };

  const searchStock = async () => {
    console.log('was here')
    let res = await fetch(`http://localhost:3000/api/v1/search/${activeSearch}`);
    let json = await res.json();
    console.log(json);

  };

  return (
    <>

      <div className={'grid grid-cols-12'}>
        <div className={'col-span-12 border border-gray-700 border-b-4'}>
          <h1 className={'text-center text-4xl p-5'}>Paper Trader</h1>
        </div>

        <div className={'col-span-12 md:col-span-7  h-96 border-r-4 border-gray-700'}>
          box 2


          <div className={'grid grid-cols-12'}>
            <div className={'col-span-12 md:col-span-6 h-32 border p-5'}>
              <input value={activeSearch} onChange={updateActiveSearch} type="search" className={'border w-2/3 p-3 rounded'}/>

              {/*<p>the current value if the active search is: {activeSearch}</p>*/}

              <button onClick={searchStock} className={'border w-1/3 bg-blue-500 text-white cursor-pointer'}>Search</button>

            </div>

            <div className={'hidden md:grid col-span-6 h-32 border p-5'}>
              this is going to be empty

            </div>

            <div className={'col-span-6 h-96 border p-5'}>
              stock name goes here


            </div>

            <div className={'col-span-6 h-96 border p-5'}>
              buy button goes here


            </div>

          </div>





        </div>

        <div className={'col-span-12 md:col-span-5  h-96'}>
          box3

        </div>


      </div>


    </>
  );
}

export default App;
