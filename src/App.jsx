
import './App.css'

function App() {
  return (
    // Global Container
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
        {/* First Col */}
        <div className="bg-slate-700 text-white rounded-xl hover:bg-violet-700 duration-200">
          {/* Upper container */}
          <div className="p-8 mx-3 mt-3 rounded-l-xl bg-slate-800">
            <div className="text-center uppercase">Basic</div>
            <h2 className="text-5xl mt-10 font-serif text-center">100GB</h2>
            <h3 className="mt-2 text-center">$1.99/Month</h3>
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
                <div className="text-sm ml-1">100GB of storage</div>
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
                <div className="text-sm ml-1">Option to add members</div>
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
                <div className="text-sm ml-1">Extra member benefits</div>
              </div>
            </div>
          </div>
        </div>
         {/* Section Col */}
        <div className="bg-violet-700 text-white rounded-xl ">
          {/* Upper container */}
          <div className="p-8 mx-3 mt-3 rounded-l-xl bg-slate-800">
            <div className="text-center uppercase">STANDARD</div>
            <h2 className="text-5xl mt-10 font-serif text-center">200GB</h2>
            <h3 className="mt-2 text-center">$3.99/Month</h3>
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
                <div className="text-sm ml-1">200GB of storage</div>
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
                <div className="text-sm ml-1">Option to add members</div>
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
                <div className="text-sm ml-1">Extra member benefits</div>
              </div>
            </div>
          </div>
        </div>
         {/* First Col */}
        <div className="bg-slate-700 text-white rounded-xl hover:bg-violet-700 duration-200">
          {/* Upper container */}
          <div className="p-8 mx-3 mt-3 rounded-l-xl bg-slate-800">
            <div className="text-center uppercase">PREMIUM</div>
            <h2 className="text-5xl mt-10 font-serif text-center">2TB</h2>
            <h3 className="mt-2 text-center">$8.99/Month</h3>
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
                <div className="text-sm ml-1">2TB of storage</div>
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
                <div className="text-sm ml-1">Option to add members</div>
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
                <div className="text-sm ml-1">Extra member benefits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
