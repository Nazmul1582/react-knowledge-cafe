import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = (title) => setBookmarks([...bookmarks, title]);

  return (
    <>
      <Header />
      <main className="container mx-auto">
        <section className="grid grid-cols-[2fr_1fr] gap-6">
          <Blogs handleBookmark={handleBookmark} />
          <Bookmarks bookmarks={bookmarks} />
        </section>
      </main>
    </>
  );
}

export default App;
