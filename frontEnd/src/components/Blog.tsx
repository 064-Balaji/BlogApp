interface Props {
  title: string;
  content: string;
  email: string;
}

const Blog = ({ title, content, email }: Props) => {
  return (
    <div
      className="container mt-3 bg-info bg-gradient "
      style={{ borderRadius: "10px" }}
    >
      <div>
        <p>
          <b>Title:</b> {title}
        </p>
      </div>
      <div>
        <p>
          <b>Content:</b> {content}{" "}
        </p>
      </div>
      <div>
        <p>
          <b>Blog from:</b> {email}
        </p>
      </div>
    </div>
  );
};

export default Blog;
