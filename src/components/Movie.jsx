import React from "react";

export const Movie = ({
  Title: title,
  Year: year,
  Type: type,
  Poster: poster,
}) => {
  return (
    <div className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={poster} alt={title} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
};
