import * as React from "react";
import getPlayers from "../dataFile/get-players"
import TableHeader from "./TableHeader";
import Loading from './Loading';
import { Grow } from "@material-ui/core";
import { Card } from "react-bootstrap";

export const ProfileCard = (props: any) => {

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
        //   tabIndex={index}
        //   style={{height: '110px'}}
        //   className={mainClass+' '+customClass}
        //   onClick={() => {
    
        //   }}
        >
    
           <Card.Body className={"card-body-class "}>
             {/* <div className={'row'} style={{marginBottom: '10px'}}>
               <div className="sidebar-name col-12" style={{paddingLeft: '0px'}}>
                 <span className="patient-name"> {Prefix} { TruncateName(patient.patientName || patient.patientName)} </span>
                 <span style={{fontWeight:500, fontSize:'14px', marginLeft:'6%'}}>{patient.patientInfo.age ? patient.patientInfo.age  : '' }/{patient.patientInfo.gender ? patient.patientInfo.gender : '' }</span>
                 <span>{patient?.patientInfo?.casePriority === 'Emergency' ? <div style={{display:'inline-block', marginLeft:'8%'}} className={"emergency"}>E</div> : null}</span>
               </div>
             </div>
             <div className="row">
               <div className={'col-12'} style={{flexDirection:'row', display:'flex', justifyContent:'flex-start', alignItems:'center', padding:'0px'}}>
                  <div><Label_form style={{ textTransform: 'uppercase' }}>{patient.uhid ? <>UHID: <span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{patient.uhid}</span></> : "-"} {patient.ipNumber ? <span style={{marginLeft: '5px'}}>IP#: <span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{patient.ipNumber}</span></span> : ""} </Label_form></div>
                  <div style={{marginLeft:'10%'}}>
                    <span style={{ color: "#737373", fontSize: "13px" }}>{moment(patient.appointmentDateTime ).format('DD-MM-YYYY HH:mm a')}</span>
                  </div>
               </div>    
            </div>  
            <div className="row">
                <img alt="" src={phoneImage} style={{ height: '16px' }} />{" "}
                <span style={{ color: "#737373", fontSize: "13px", marginLeft:'12px' }}>
                  {patient.patientInfo.phone ? patient.patientInfo.phone : patient.patientInfo.phone || '-'}
                </span>        
            </div>
            {showGoToImage ? (
              <img src={goToPatientImage} alt={'go-to-patient'} className={'go-to-patient-image'}/>
            ) : null} */}
          </Card.Body>
        </Card>
        </Grow>
    );
}

export default ProfileCard;
