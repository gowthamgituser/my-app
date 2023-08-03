import * as React from "react";
import { Row, Table } from "react-bootstrap";
import TableBody from "./TableBody";
export const TableHeader = (props: any) => {

  const { playerList, handleNextButton, handlePrevButton, currentPage, endIndex, players, handlePageChange, sortPlayers } = props;

  console.log(props)
  React.useEffect(() => {

  }, [])
  return (
    <>
      <div>
        <Table>
          <thead style={{ backgroundColor: 'black' }}>
            <tr >
              <th className="column-header" onClick={()=>{
                sortPlayers('name');
              }}>
                Name
              </th>
              <th className="column-header" onClick={()=>{
                sortPlayers('rank');
              }}>
                Rank
              </th>
              <th className="column-header">
                Role
              </th>
              <th className="column-header" onClick={()=>{
                 sortPlayers('dob');
              }}>
                Age
              </th>
              <th className="column-header">
                Points
              </th>
              <th className="column-header">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {
              playerList.map((player: any, index: any) => {
                return (<TableBody index={index} player={player} />
                )
              })
            }
          </tbody>
        </Table>

        <div>
          <button onClick={() => {
            handlePrevButton();
          }} disabled={currentPage === 1}>
            Previous
          </button>
          {Array.from({ length: Math.ceil(players.length / 10) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={() => {
            handleNextButton();
          }} disabled={endIndex * currentPage >= players.length}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default TableHeader;
