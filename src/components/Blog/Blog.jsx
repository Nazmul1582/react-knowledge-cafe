const Blog = ({blog}) => {
    const {cover_photo, title} = blog;
    return (
        <div>
            <img src={cover_photo} alt={`image of ${title}`} />
            <h2>{title}</h2>
        </div>
    );
};

export default Blog;