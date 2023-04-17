import PaginationSearch from 'react-pagination-search';
import data from './data.json';

function App() {

  return (
    <PaginationSearch
        data={data}
        itemsPerPage={20}
    >
        <PaginationSearch.Searchbox />
        <PaginationSearch.Data
            render={(item) => {
                return (
                    <div>
                        {item.name.official}
                    </div>
                )
            }}
        />
        <PaginationSearch.Buttons />
    </PaginationSearch>
  );
}

export default App;
