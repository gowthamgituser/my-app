import * as React from "react";
import { Row, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export const TableBody = (props: any) => {

    const { player, index } = props;
    const history = useHistory();

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
                <td key={"row-2-" + index}>
                    {player?.type || '-'}
                </td>
                <td key={"row-3-" + index}>
                    {player?.dob || '-'}
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
