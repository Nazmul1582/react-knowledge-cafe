import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (title) => {
    if (bookmarks.includes(title)) {
      toast.warn("Already added in bookmark!");
      return;
    }
    setBookmarks([...bookmarks, title]);
  };

  const handleReadingTime = (time) => {
    setReadingTime(readingTime + time);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto mb-20">
        <ToastContainer pauseOnHover={false} />
        <section className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
          <Blogs
            handleBookmark={handleBookmark}
            handleReadingTime={handleReadingTime}
          />
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
        </section>
      </main>
    </>
  );
}

export default App;
