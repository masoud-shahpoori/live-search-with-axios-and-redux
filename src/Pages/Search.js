import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts, handleSearch } from "../Action/actions";
import SearchItem from "../Compnent/SearchItem";
import "../Assest/Style/App.css";
import Loading from "../Image/loading.gif"

const Search = ({ loading, products, handleSearch, query, isSearched,message }) => {
  React.useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <h2 className="heading">Book Search</h2>
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            id="search-input"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </label>
        {loading ? (
          <>
        
        <div className="text-center loading-container">
          <img src={Loading} />
        </div>
          </>
        ) : (
          <SearchItem
            products={products}
            isSearched={isSearched}
            query={query}
            message={message}
          ></SearchItem>
        )}
      </div>
    </>
  );
};

Search.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSearch: PropTypes.func.isRequired,
};
const mapStateToProps = ({
  searchState: { products, loading, searchNotFind, query, isSearched,message },
}) => {
  return { loading, products, searchNotFind, query, isSearched,message };
};
export default connect(mapStateToProps, { handleSearch })(Search);
