import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <main className='container mx-auto'>
        <section className='grid grid-cols-[2fr_1fr] gap-6'>
          <Blogs />
          <Bookmarks />
        </section>
      </main>
    </>
  )
}

export default App
