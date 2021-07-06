import React, { useState } from "react";
// import { useIntl } from "gatsby";

const styles = {
  searchWrapper: "search",
  searchBtn: "search__btn-toggle",
  searchFormWrapper: "rah-static rah-static--height-zero search__expandable",
  searchContent: "mdc-layout-grid",
  searchForm: "search-form",
  searchInput: "search-form__input",
  searchSubmitBtn: "search-form__btn-submit",
};

const SearchButton = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="search"
    className="svg-inline--fa fa-search fa-w-11 fa-2x search__btn-toggle-icon"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
    ></path>
  </svg>
);

const CloseButton = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="times"
    className="svg-inline--fa fa-times fa-w-11 fa-2x search__btn-toggle-icon"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 352 512"
  >
    <path
      fill="currentColor"
      d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
    ></path>
  </svg>
);

export default function Search(props) {
  // const intl = useIntl();
  const serachTextBoxRef = React.createRef();
  const [enableSearch, setEnableSearch] = useState(false);

  const onClick = (e) => {
    const searchEle = document.getElementById("searchText");
    searchEle.style.display = !enableSearch ? "block" : "none";
    setEnableSearch(!enableSearch);
  };

  const button = !enableSearch ? SearchButton : CloseButton;

  return (
    <div className={styles.searchWrapper}>
      <button className={styles.searchBtn} onClick={onClick}>
        {button}
      </button>
      <div className={styles.searchFormWrapper}>
        <div ref={serachTextBoxRef} id="searchText" style={{ display: "none" }}>
          <div className={styles.searchContent}>
            <form className={styles.searchForm}>
              <input
                className={styles.searchInput}
                type="text"
                placeholder={"search items"}
              />
              <button className={styles.searchSubmitBtn} type="submit">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="svg-inline--fa fa-search fa-w-16 search-form__btn-submit-icon"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
