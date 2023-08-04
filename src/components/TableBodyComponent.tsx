import * as React from "react";
import { useHistory } from "react-router-dom";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export const TableBodyComponent = (props: any) => {

    const { player, index } = props;
    const history = useHistory();
    const date: any = new Date(player?.dob);
    const today: any = new Date();
    const ageInMilliseconds: any = today - date;
    const ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000);
    const age = Math.floor(ageInYears);
    React.useEffect(() => {

    }, [])
    return (
        <>
         
            <StyledTableRow key={"tr" + index}>
                <StyledTableCell style={{ cursor: 'pointer', textDecoration: 'underline', color: '#0000EE'}} key={"row-1-" + index} onClick={() => {
                    history.push(`/my-app/${player.id}`, { player });
                }}>
                    {player?.name || '-'}
                </StyledTableCell>
                <StyledTableCell key={"row-21-" + index}>
                    {player?.rank || '-'}
                </StyledTableCell>
                <StyledTableCell key={"row-2-" + index}>
                    {player?.type?.toUpperCase() || '-'}
                </StyledTableCell>
                <StyledTableCell key={"row-3-" + index}>
                    {age || '-'}
                </StyledTableCell>
                <StyledTableCell key={"row-4-" + index}>
                    {player?.points || '-'}
                </StyledTableCell>
                <StyledTableCell key={"row-5-" + index} style={{textAlign:'justify'}}>
                    {player?.description || '-'}
                </StyledTableCell>
            </StyledTableRow>
        </>
    );
}

export default TableBodyComponent;
