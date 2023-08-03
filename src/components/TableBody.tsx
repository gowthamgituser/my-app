import * as React from "react";
import { Row, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export const TableBody = (props: any) => {

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
            <tr key={"tr" + index}>
                <td style={{ cursor: 'pointer', textDecoration: 'underline', color: '#0000EE' }} key={"row-1-" + index} onClick={() => {
                    history.push(`/my-app/${player.id}`, { player });
                }}>
                    {player?.name || '-'}
                </td>
                <td key={"row-21-" + index}>
                    {player?.rank || '-'}
                </td>
                <td key={"row-2-" + index}>
                    {player?.type || '-'}
                </td>
                <td key={"row-3-" + index}>
                    {age || '-'}
                </td>
                <td key={"row-4-" + index}>
                    {player?.points || '-'}
                </td>
                <td key={"row-5-" + index}>
                    {player?.description || '-'}
                </td>
            </tr>
        </>
    );
}

export default TableBody;
