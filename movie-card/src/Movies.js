import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Movies(props) {
  return (
    <div className="container  ">
      <div className="row align-items-center">
        <h1 className="text-secondary">Movie List</h1>
        <div className="card-group">
          {props.data.map((value, key) => {
            return (
              <div className="card ">
                <img
                  className="card-img-top"
                  src={value.posterurl}
                  alt="Card image cap"
                  style={{ height: "450px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.storyline}</p>
                  <p className="card-text">{value.year}</p>
                  <p className="card-text">
                    <FontAwesomeIcon
                      icon={faStar}
                      className={value.imdbRating > 0 ? "text-warning" : ""}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={value.imdbRating > 1 ? "text-warning" : ""}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={value.imdbRating > 2 ? "text-warning" : ""}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={value.imdbRating > 3 ? "text-warning" : ""}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={value.imdbRating > 4 ? "text-warning" : ""}
                    />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
