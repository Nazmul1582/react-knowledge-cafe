import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = (title) => {
    if (bookmarks.includes(title)) {
      toast.warn("Already added in bookmark!");
      return;
    }
    setBookmarks([...bookmarks, title]);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto">
        <ToastContainer pauseOnHover={false} />
        <section className="grid grid-cols-[2fr_1fr] gap-6">
          <Blogs handleBookmark={handleBookmark} />
          <Bookmarks bookmarks={bookmarks} />
        </section>
      </main>
    </>
  );
}

export default App;
