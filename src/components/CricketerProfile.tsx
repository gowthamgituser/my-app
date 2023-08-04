import * as React from "react";
import getPlayers from "../dataFile/get-players"
import Loading from './Loading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import ProfileCard from "./ProfileCard";


const backIcon = <FontAwesomeIcon icon={faArrowLeft} color={'#267BEB'} />

export const CricketerProfile: React.FunctionComponent = (
    { match, location }: any,
    props
) => {
    const {
        params: { id },
    } = match;

    const history = useHistory();
    const [profile, setProfile] = React.useState([] as any);
    const [similarPlayer, setSimilarPlayers] = React.useState([] as any);
    const [isLoading, setIsLoading] = React.useState(true);
    const [playerList, setPlayerList] = React.useState([] as any)


    React.useEffect(() => {
        (
            async () => {
                try {
                    setIsLoading(true);
                    const players = await getPlayers();
                    const playerProfile = players.filter((player: any) => {
                        return id === player.id
                    })
                    setPlayerList(players);
                    setProfile(playerProfile[0]);
                    const similarProfile = players.filter((player: any) => {
                        return player.type === playerProfile[0].type && player.id !== id;
                    })

                    setSimilarPlayers(similarProfile);
                    setTimeout(()=>{
                        setIsLoading(false);
                    },500)
                    
                } catch (error) {
                    console.error('Error while fetching and processing players:', error);

                }
            }
        )();

    }, [id])


    return (
        <>
            <div>
                {isLoading ? <Loading /> : <>
                    <div>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', width: '50%', marginLeft: '1%' }}>
                                <div style={{ fontSize: '30px', fontWeight: 500 }}>
                                    Cricketer Profile
                                </div>
                                <div style={{ cursor: 'pointer' }} onClick={() => {
                                    history.push(`/my-app`)
                                }}>
                                    {backIcon} Back
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%' }}>
                                <div style={{ width: '50%', padding: '20px' }}>
                                    <strong>Name</strong>
                                </div>
                                <div style={{ width: '50%' }}>
                                    {profile.name}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%' }}>
                                <div style={{ width: '50%', padding: '20px' }}>
                                    <strong>Rank</strong>
                                </div>
                                <div style={{ width: '50%', padding: '20px' }}>
                                    {profile.rank}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%' }}>
                                <div style={{ width: '50%', padding: '20px' }}>
                                    <strong>Role</strong>
                                </div>
                                <div style={{ width: '50%', padding: '20px' }}>
                                    {profile.type}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%' }}>
                                <div style={{ width: '50%', padding: '20px' }}>
                                    <strong>Date of Birth</strong>
                                </div>
                                <div style={{ width: '50%' }}>
                                    {new Date(profile.dob).toDateString()}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%' }}>
                                <div style={{ width: '50%', padding: '20px' }}>
                                    <strong>Points</strong>
                                </div>
                                <div style={{ width: '50%' }}>
                                    {profile.points}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '50%' }}>
                                <div style={{ width: '50%', padding: '20px' }}>
                                    <strong>Description</strong>
                                </div>
                                <div style={{ width: '50%' }}>
                                    {profile.description}
                                </div>
                            </div>
                        </div>

                        {similarPlayer.length ? <div style={{ marginTop: '3%', marginLeft: '1%' }}>
                            <div>
                                Similar Crickerts based on the Role
                            </div>
                            <div style={{marginTop:'1%'}}>
                                {
                                    similarPlayer.map((player: any, index: any) => {
                                        return <> <ProfileCard index={index} player={player}
                                            updatePlayerIndex={(playerId: any) => {
                                                const selectedPlayer = playerList.find((player: any) => player.id === playerId)
                                                history.push(`/my-app/${selectedPlayer.id}`, { selectedPlayer });
                                            }}
                                        />
                                        </>
                                    })
                                }
                            </div>
                        </div> : <>

                            <div>
                                No Similar Players found
                            </div>

                        </>}

                    </div>

                </>}
            </div>
        </>
    );
}

export default CricketerProfile;
