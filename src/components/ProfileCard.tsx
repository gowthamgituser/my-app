import * as React from "react";
import getPlayers from "../dataFile/get-players"
import TableHeader from "./TableHeader";
import Loading from './Loading';
import { Grow } from "@material-ui/core";
import { Card } from "react-bootstrap";

export const ProfileCard = (props: any) => {

    const {player, updatePlayerIndex, index} = props;
    const [playerList, setPlayerList] = React.useState([] as any);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // (
        //     async()=>{
        //         try {
        //             const players = await getPlayers();
                   
        //             setTimeout(() => {
        //                 setPlayerList(players);
        //                 setIsLoading(false);
        //               }, 1000); 
                   
        //         } catch (error) {
        //             console.error('Error while fetching and processing players:', error);
        //             setPlayerList([]);
        //         }
        //     }
        // )();

    }, [])
    return (
        <Grow  in={true} style={{ transformOrigin: '0 0 0' }}>
        <Card
          tabIndex={index}
          style={{height: '110px'}}
          className={'side-bar-card side-bar-card-custom patient-card new-card-width'}
          onClick={() => {
            updatePlayerIndex(player.id);
          }}
        >
    
           <Card.Body className={"card-body-class "}>
            <br/>
            <div className={'card-align'}>
              <div>
                <strong>Name</strong>
              </div>
              <div style={{marginLeft:'18%'}}>
                {player.name}
              </div>
            </div>
            <br/>
            <div className={'card-align'}>
              <div>
                <strong>Points</strong>
              </div>
              <div style={{marginLeft:'18%'}}>
                {player.points}
              </div>
            </div>
            <br/>
            <div className={'card-align'}>
              <div>
                <strong>Rank</strong>
              </div>
              <div style={{marginLeft:'18%'}}>
                &nbsp;&nbsp;{player.rank}
              </div>
            </div>
          </Card.Body>
        </Card>
        </Grow>
    );
}

export default ProfileCard;
