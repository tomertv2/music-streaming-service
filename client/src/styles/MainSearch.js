import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .search-header {
    font-size: 70px;
    margin-bottom: 10px;
  }

  .search-input {
    width: 20em;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    background-color: #181818;
    color: white;
    border-bottom: 2px solid #282c34;
  }
`;

export default SearchWrapper;
