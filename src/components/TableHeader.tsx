import * as React from "react";
import { Form, Row } from "react-bootstrap";
import TableBodyComponent from "./TableBodyComponent";
import TableBody from '@mui/material/TableBody';
import Loading from "./Loading";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";



const sortIcon = <FontAwesomeIcon size={'sm'} icon={faSort} color={'white'} />

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#2497E9',
    color: theme.palette.common.white,
    fontWeight: 'bold'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const TableHeader = (props: any) => {

  const { isLoading, playerList, handleNextButton, handlePrevButton, currentPage, endIndex, players, handlePageChange, sortPlayers, filter, searchKey, setSearchKey, setFilterValue, filterValue } = props;

  return (
    <>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width:'100%' }}>
          <div style={{ fontFamily: 'cursive', fontSize: '30px', fontWeight: 'bold', width: '50%', textDecoration:'underline' }}>
            Cricketers List
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '50%' }}>
            <div style={{ width: '100%' }}>
              <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignContent:'center', alignItems:'center', width:'100%'}}>
              <div>
                Filter by Role : 
              </div>
              <div>
                <Form.Control
                  as="select"
                  style={{
                    borderRadius: '4px',
                    height: '40px',
                    width: '200%',
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
                        {role.toUpperCase()}
                      </option>
                    )
                  }
                </Form.Control>
              </div>
              </div>
            </div>
            <div style={{ width: '100%' }}>
              <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignContent:'center', alignItems:'center', width:'100%'}}>
              <div>
              Search by Name :
              </div>
              <div>
              <Form.Control
                style={{
                  borderRadius: '4px',
                  height: '34px',
                  width: '200%',
                  fontSize: '13px'
                }}
                value={searchKey}
                onChange={(e) => {
                 setSearchKey(e.target.value)
                }}>
              </Form.Control>
              </div>
              </div>
            </div>
          </div>
        </div>
        {isLoading ? <Loading /> : <>

          {playerList.length > 0 ? <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell  style={{width:'10%'}} onClick={() => {
                      sortPlayers('name');
                    }}>Name &nbsp;{sortIcon}</StyledTableCell>

                    <StyledTableCell style={{width:'5%'}} onClick={() => {
                      sortPlayers('rank');
                    }}>
                      Rank &nbsp;{sortIcon}
                    </StyledTableCell>
                    <StyledTableCell>
                      Role
                    </StyledTableCell>
                    <StyledTableCell  style={{width:'5%'}} onClick={() => {
                      sortPlayers('dob');
                    }}>
                      Age &nbsp;{sortIcon}
                    </StyledTableCell>
                    <StyledTableCell>
                      Points
                    </StyledTableCell>
                    <StyledTableCell>
                      Description
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {playerList.map((player: any, index: any) => {
                    return (<TableBodyComponent index={index} player={player} />
                    )
                  })
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </> : <>
            <div style={{ color: 'red', justifyContent: 'center', display: 'flex' }}>
              --- Not found ---
            </div>
          </>
          }

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '20%' }}>
              <div><button className="button-18" onClick={() => {
                handlePrevButton();
              }} disabled={currentPage === 1}>
                Previous
              </button>
              </div>
              {Array.from({ length: Math.ceil(players.length / 10) }, (_, index) => (
                <div>
                  <button className="button-18"
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    disabled={currentPage === index + 1}
                  >
                    {index + 1}
                  </button>
                </div>
              ))}

              <div><button className="button-18" onClick={() => {
                handleNextButton();
              }} disabled={endIndex * currentPage >= players.length}>
                Next
              </button>
              </div>
            </div>
          </div></>}
      </div>
    </>
  );
}

export default TableHeader;
