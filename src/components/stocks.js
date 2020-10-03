import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStock, setLoading } from "../redux/stockReducer";
import { Table } from "react-bootstrap";
import { TableStock } from "./tableStock";
import { RenderItems } from "./tableStock";
import { Pagination } from "./paginator/paginator";
import { Loading } from "./loader/loading";

export const Stocks = () => {
  const fetchedData = useSelector((state) => state.fetchData.data);
  const loading = useSelector((state) => state.fetchData.isLoading);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(10);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const fetched = fetchedData.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  React.useEffect(() => {
    dispatch(setLoading(false));
    dispatch(getStock());
    dispatch(setLoading(true));
  }, []);

  return (
    <div>
      <h1>
        <i>Ladies and Gentlemens you are welcome</i>
      </h1>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={fetchedData.length}
        paginate={paginate}
      />
      {loading ? <Loading /> : null}
      <Table striped bordered hover>
        <TableStock />
        <tbody>
          {fetched.map((items, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{items.symbol}</td>
                <td>{items.sector}</td>
                <td>{items.securityType}</td>
                <td>{items.bidPrice}</td>
                <td>{items.bidSize}</td>
                <td>{items.askPrice}</td>
                <td>{items.askSize}</td>
                <td>{items.lastUpdated}</td>
                <td>{items.lastSalePrice}</td>
                <td>{items.lastSaleSize}</td>
                <td>{items.lastSaleTime}</td>
                <td>{items.volume}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
