import React, { useEffect, useState } from "react";
import "../Css/PostList.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [tagFilter, setTagFilter] = useState("");

  useEffect(() => {
    const fetchPosts = () => {
      fetch("https://devjourneybackend.onrender.com/api/posts")
        .then((response) => response.json())
        .then((data) => {
          const filtered = data
            .filter((post) => post.tags && post.tags.includes("Post"))
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

          setPosts(filtered);
        })
        .catch((error) => {
          console.error("Erro ao buscar posts:", error);
        });
    };
    fetchPosts(); // Busca inicial
    const intervalId = setInterval(fetchPosts, 10000); // A cada 10 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      tagFilter === "" ||
      (post.tags &&
        post.tags.some((tag) =>
          tag.toLowerCase().includes(tagFilter.toLowerCase())
        ))
  );

  return (
    <div style={{ width: "100%" }}>
      <input
        type="text"
        placeholder="Filtrar por tag"
        value={tagFilter}
        onChange={(e) => setTagFilter(e.target.value)}
        className="PostInput"
      />

      {filteredPosts.map((post) => (
        <div key={post.id} className="PostCard">
          <h2 className="PostTitle">{post.title}</h2>
          <p className="PostContent" style={{ whiteSpace: "pre-wrap" }}>
            {post.content}
          </p>

          <div className="PostLink">
            <a href={post.link}>{post.link}</a>
          </div>
          
          {post.image_url !== "" && (
            <div className="PostImgArea">
              <img
                src={`https://devjourneybackend.onrender.com/api/posts/${post.id}/image`}
                alt="Post"
                className="PostImg"
              />
            </div>
          )}

          <p className="PostAuthor">
            <strong>Usuário:</strong> {post.author?.username}
          </p>
          {post.tags && post.tags.length > 0 && (
            <p className="PostTags">
              <strong>Tags:</strong> {post.tags.join(", ")}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
