const Blog = ({ blog }) => {
  const {
    cover_photo,
    author_img,
    author,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blog;
  return (
    <>
      <img className="rounded-xl mt-10 max-h-[450px] w-full" src={cover_photo} alt={`image of ${title}`} />
      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center gap-5">
          <img
            className="w-16 h-16 object-cover rounded-full"
            src={author_img}
            alt="author_image"
          />
          <div>
            <h4 className="text-2xl font-bold">{author}</h4>
            <p className="text-gray-400">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-lg text-gray-500">{reading_time} min read</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322Z"
              stroke="#111111"
              strokeOpacity="0.6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-4xl font-bold my-4">{title}</h2>
      {hashtags.map((hashtag, index) => (
        <span key={index} className="mr-3 text-lg text-gray-400">
          #{hashtag}
        </span>
      ))}
      <div className="mt-5 pb-9 border-b">
        <button className="text-lg text-violet-600 font-semibold underline">
          Mark as read
        </button>
      </div>
    </>
  );
};

export default Blog;
