import PropTypes from 'prop-types'

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="mt-10">
      <div className="bg-violet-200 text-center py-5 rounded-lg border border-violet-500">
        <h3 className="text-2xl font-bold text-violet-500">
          Spent time on read : 177 min
        </h3>
      </div>

      <div className="bg-gray-100 rounded-lg mt-6 p-7">
        <h3 className="text-2xl font-bold mb-4">
          Bookmarked Blogs: {bookmarks.length}
        </h3>

        {bookmarks.map((bookmark, index) => (
          <div key={index} className="bg-white p-5 rounded-lg mb-6">
            <h4 className="text-lg font-semibold">{bookmark}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array
}

export default Bookmarks;
