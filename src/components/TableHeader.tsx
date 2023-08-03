import * as React from "react";
import { Form, Row, Table } from "react-bootstrap";
import TableBody from "./TableBody";
import Loading from "./Loading";
export const TableHeader = (props: any) => {

  const {isLoading, playerList, handleNextButton, handlePrevButton, currentPage, endIndex, players, handlePageChange, sortPlayers, filter, setFilter, setFilterValue, filterValue } = props;

  console.log(props)
  React.useEffect(() => {

  }, [])
  return (
    <>
      <div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', width:'100%'}}>
          <div style={{width:'16%'}}>
            <Form.Control
              as="select"
              style={{
                borderRadius: '4px',
                height: '34px',
                width: '100%',
                fontSize: '13px'
              }}
              value={filterValue}
              onChange={(e) => {
                setFilterValue(e.target.value)
                localStorage.setItem('filter', e.target.value);
              }}>
              {
                filter.map((role: string, index: number) =>
                  <option value={role} key={index}>
                    {role}
                  </option>
                )
              }
            </Form.Control>
          </div>
          <div style={{width:'16%'}}>

          </div>
        </div>
        {isLoading ? <Loading /> : <><Table>
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
          {playerList.length>0?<>
            {playerList.map((player: any, index: any) => {
                return (<TableBody index={index} player={player} />
                )
              })
            }
          </>:<>Not found</>
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
        </div></>}
      </div>
    </>
  );
}

export default TableHeader;
