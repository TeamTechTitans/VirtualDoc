

import { useQuery } from '@tanstack/react-query';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import * as React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useAxiosPublic from '../../../lib/hooks/useAxiosPublic';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';


function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(
  url = window.location.href
) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

const VideoCall = () => {
  const {user}=React.useContext(AuthContext);
  const { id } = useParams();
  const axiosPublic = useAxiosPublic()
  const {patient_email,doctor_email,patient_name}=useLoaderData();
  const { data: doctor = [] } = useQuery({
    queryKey: ["doctor", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/doctor/${doctor_email}`);
      return res.data;
    },
  });
 // console.log(patient_email);
 const checkPatient=(email)=>{
  if(email!==patient_email){
    return patient_name.toUpperCase() 
  }
  return doctor?.name.toUpperCase() 
 }

  const roomID = getUrlParams().get('roomID') || id;
      let myMeeting = async (element) => {
     // generate Kit Token
      // const appID = 1297054783;
      // const serverSecret = "9a5f4732a88be40c656a7c7b7746bd79";
      const appID = 1763227442;
      const serverSecret = "d3557f019d9886521600e6b9e9e17951";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,randomID(5),checkPatient(user.email));


     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
  };
 // console.log(myMeeting);

  return (<>
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '70vw', height: '90vh' }}
    ></div>
 </> );
};

export default VideoCall;