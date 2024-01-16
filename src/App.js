import './App.css';
import { BsFillMoonStarsFill } from 'react-icons/bs';

function App() {
  return (
    <div >
      <head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <main className="bg-white px-10">
        <section className="bg-blend-lighten min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-2xl font-sans'>qiman</h1>

            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-8' href="#">Resume</a>
              </li>
            </ul>

          </nav>
        </section>

        <body>

        </body>

      </main>
    </div>
  )
}

export default App;
