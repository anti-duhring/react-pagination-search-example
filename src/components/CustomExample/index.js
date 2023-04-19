import PaginationSearch from 'react-pagination-search';
import data from '../../data.json';
import './index.css';

const CustomExample = () => {

  return (
    <PaginationSearch
        data={data}
        itemsPerPage={20}
    >
        <PaginationSearch.Searchbox
            SearchInput={
                <input 
                    type='text'
                    placeholder='Custom input element'
                />
            }

            SearchButton={
                <button>
                    Click here
                </button>
            }
        />
        <PaginationSearch.Data
            render={(item, index) => {
                return (
                    <div key={index}>
                        {item.name.official}
                    </div>
                )
            }}
        />
        <PaginationSearch.Buttons />
    </PaginationSearch>
  );
}

export default CustomExample;
