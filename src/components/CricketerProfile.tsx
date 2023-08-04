import * as React from "react";
import getPlayers from "../dataFile/get-players"
import Loading from './Loading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import ProfileCard from "./ProfileCard";


const backIcon = <FontAwesomeIcon size={'sm'} icon={faArrowLeft} color={'black'} />

export const CricketerProfile: React.FunctionComponent = (
    { match }: any,
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
                        return player.type === playerProfile[0]?.type && player.id !== id;
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
                            <div  className="alignProfilev2" style={{ marginLeft: '1%' }}>
                                <div style={{ fontSize: '30px', fontWeight:'bold', fontFamily:'cursive', textDecoration:'underline' }}>
                                    Cricketer Profile
                                </div>
                                <div style={{ cursor: 'pointer', fontWeight:'bold' }} onClick={() => {
                                    history.push(`/my-app`)
                                }}>
                                    {backIcon} Back to list
                                </div>
                            </div>
                        </div>
                        
                        <div className="profile-border" style={{backgroundColor:'#3E4F5'}}>
                            <div className="alignProfile">
                                <div style={{ width: '50%', padding: '20px' }}>
                                    <strong>Name :</strong>
                                </div>
                                <div className="nameFont" style={{ width: '50%' }}>
                                    {profile.name}
                                </div>
                            </div>

                            <div className="alignProfile">
                                <div style={{ width: '50%', padding: '20px' }}>
                                    <strong>Rank :</strong>
                                </div>
                                <div style={{ width: '50%', padding: '20px' }}>
                                    {profile.rank}
                                </div>
                            </div>

                            <div className="alignProfile">
                                <div style={{ width: '50%', padding: '20px' }}>
                                    <strong>Role :</strong>
                                </div>
                                <div style={{ width: '50%', padding: '20px' }}>
                                    {profile?.type?.toUpperCase()||'-'}
                                </div>
                            </div>

                            <div className="alignProfile">
                                <div style={{ width: '50%', padding: '20px' }}>
                                    <strong>Date of Birth :</strong>
                                </div>
                                <div style={{ width: '50%' }}>
                                    {new Date(profile.dob).toDateString()}
                                </div>
                            </div>

                            <div className="alignProfile">
                                <div style={{ width: '50%', padding: '20px' }}>
                                    <strong>Points :</strong>
                                </div>
                                <div style={{ width: '50%' }}>
                                    {profile.points}
                                </div>
                            </div>

                            <div className="alignProfile">
                                <div style={{ width: '50%', padding: '20px' }}>
                                    <strong>Description :</strong>
                                </div>
                                <div style={{ width: '50%', textAlign:'justify' }}>
                                    {profile.description}
                                </div>
                            </div>
                        </div>

                        {similarPlayer.length ? <div style={{ marginTop: '3%', marginLeft: '1%' }}>
                            <div style={{fontWeight:500}}>
                                Similar Crickerts based on the role :
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

                            <div style={{marginTop:'2%', color:'red', marginLeft:'2%'}}>
                               --- No Similar Players found ---
                            </div>

                        </>}

                    </div>

                </>}
            </div>
        </>
    );
}

export default CricketerProfile;
