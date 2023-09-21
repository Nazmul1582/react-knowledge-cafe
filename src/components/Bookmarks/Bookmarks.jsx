import PropTypes from 'prop-types'

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="mt-10">
      <div className="bg-violet-200 text-center py-5 px-3 rounded-lg border border-violet-500">
        <h3 className="text-2xl font-bold text-violet-500">
          Spent time on read : {readingTime} min
        </h3>
      </div>

      <div className="bg-gray-100 rounded-lg mt-6 p-7">
        <h3 className="text-2xl font-bold mb-4">
          Bookmarked Blogs: {bookmarks.length}
        </h3>

        {bookmarks.map((bookmark, index) => (
          <div key={index} className="bg-white p-5 rounded-lg mb-6 last:mb-0">
            <h4 className="text-lg font-semibold">{bookmark}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
}

export default Bookmarks;
