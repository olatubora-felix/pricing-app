
import './App.css'
import { prices } from '../data';
import { Fragment } from 'react';

function App() {
  return (
    // Global Container
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
        {
          prices.map(price => (
          <Fragment key={price.title}>
              {/* First Col */}
        <div  className={`${price.classes}`}>
          {/* Upper container */}
          <div className="p-8 mx-3 mt-3 rounded-l-xl bg-slate-800">
            <div className="text-center uppercase">{price.title}</div>
            <h2 className="text-5xl mt-10 font-serif text-center">{price.storage}</h2>
            <h3 className="mt-2 text-center">{price.price}</h3>
            <div className="flex justify-center">
              <a href="#" className='inline-block px-10 py-3 my-6 text-center border border-violet-600 hover:bg-violet-800 hover:border-violet-800 rounded-lg  duration-200'>Purpase</a>
            </div>
          </div>
          {/* Border */}
          <div className="border-t border-slate-700"></div>
          {/* Lower container */}
          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            {/*List Contain */}
            <div className="flex flex-col space-y-2">
              {/* List Item 1*/}
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <div className="text-sm ml-1">{price.storage} of storage</div>
              </div>

               {/* List Item 2*/}
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <div className="text-sm ml-1">{price.list1}</div>
              </div>

               {/* List Item 3*/}
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <div className="text-sm ml-1">{price.list2}</div>
              </div>
            </div>
          </div>
              </div>
          </Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default App
