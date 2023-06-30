import styles from "./search-bar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type='text'
        placeholder='Co chcesz kupić?'
      />
      <img src='/icons/search.png' alt='search-icon' />
    </div>
  );
};

export default SearchBar;
