import React, { useEffect, useState } from "react";
import "../Styles/Homepage.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { FaAngleRight } from "react-icons/fa6";
import { postRequest } from "../Redux/Actions/action";

function CardContainer({ setSelectedItem }) {
  const { data } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postRequest());
  }, [dispatch]);

  return (
    <div className="card-container">
      {data.length > 0 ? (
        data.map((post) => (
          <Card key={post.id} post={post} setSelectedItem={setSelectedItem} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}

const Card = ({ post, setSelectedItem }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card">
      <img
        src={`https://picsum.photos/200?random=${post.id}`}
        className="pic"
        loading="lazy"
      />
      <div className="detail-btn">
        <div className="title">
          <h3>{post.title}</h3>
        </div>
        <div className="para-btn">
          <div className="paragraph">
          <p className={expanded ? "expanded" : ""}>{post.body}</p>
          <span className="read-more" onClick={toggleExpand}>
            {expanded ? "Read Less" : "Read More"}
          </span>
          </div>
        <Link to={`/item/:${post.id}`}>
          <button
            type="button"
            onClick={() => {
              setSelectedItem(post);
              window.scrollTo(0, 0);
            }}
          >
            <FaAngleRight />
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
