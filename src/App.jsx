import { useState } from "react";
import useFetch from "./useFetch";
import Card from "./components/card";
import Pagination from "./components/pagination";

const url = "https://react-mini-projects-api.classbon.com/programmer/sieve";
const pageSize = 6;
function App() {
  const [page, setPage] = useState(1);
  const [loading, programmers] = useFetch(url, { page, pageSize });

  return (
    <div className="container pt-5">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border"></div>
        </div>
      )}
      {!loading && (
        <>
          <div className="row d-flex justify-content-center">
            {programmers.data.map(({ id, ...programmer }) => {
              return (
                <div className="col-4" key={id}>
                  <Card {...programmer} />
                </div>
              );
            })}
          </div>
          <div className="row">
            <Pagination
              pages={Math.ceil(programmers.totalRecords / pageSize)}
              setPage={setPage}
              activePage={page}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
