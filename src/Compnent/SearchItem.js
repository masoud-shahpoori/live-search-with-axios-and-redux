import React from "react";

export default function SearchItem({ products, isSearched, query, message }) {
  if (isSearched == true) {
    if (products.length > 0) {
      return (
        <>
          {products.map((item) => {
            let title = `${item.volumeInfo.title.toLowerCase().toString()}`;
            let queryDigest = "";
            if (title.indexOf(query) == 0) {
              queryDigest = (
                <p>
                  {" "}
                  <span className="title-searched">{query}</span>
                  {title.substring(query.length)}
                </p>
              );
            } else if (title.indexOf(query) > 0) {
              queryDigest = (
                <p>
                  {" "}
                  {title.slice(0, title.toLowerCase().indexOf(query))}{" "}
                  <span className="title-searched">{query}</span>{" "}
                  {title.substring(
                    query.toLowerCase().toString().length +
                      title.toLowerCase().search(query)
                  )}
                </p>
              );
            } else {
              queryDigest = title;
            }
            return (
              <div className="container-book">
                <p>{queryDigest}</p>
                <p>publishedDate : {item.volumeInfo.publishedDate}</p>
                <p></p>
              </div>
            );
          })}
        </>
      );
    } else {
      return <div>{message}</div>;
    }
  } else {
    return <>{message}</>;
  }
}
