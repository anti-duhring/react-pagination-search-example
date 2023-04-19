import PaginationSearch from 'react-pagination-search';
import data from '../../data.json';
import './index.css';

const DefaultExample = () => {

  return (
    <PaginationSearch
        data={data}
        itemsPerPage={20}
    >
        <PaginationSearch.Searchbox />
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

export default DefaultExample;
