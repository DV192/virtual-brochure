import './App.css';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <main className='w-[100vw] min-h-[100vh] flex items-center justify-center font-bold text-[2.25rem] text-white'>
      <Hero />
      <Experience />
      <Footer />
    </main>
  )
}

export default App
