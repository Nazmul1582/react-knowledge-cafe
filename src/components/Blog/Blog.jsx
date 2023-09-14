const Blog = ({blog}) => {
    const {cover_photo, author_img, author, posted_date, reading_time, title} = blog;
    return (
        <div>
            <img className="rounded-xl" src={cover_photo} alt={`image of ${title}`} />
            <div className="flex justify-between items-center mt-8">
                <div className="flex items-center gap-5">
                    <img className="w-16 h-16 object-cover rounded-full" src={author_img} alt="" />
                    <div>
                        <h4>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p>{reading_time} min read</p>
                </div>
            </div>
            <h2>{title}</h2>
        </div>
    );
};

export default Blog;