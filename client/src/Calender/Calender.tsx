import React, { useRef } from 'react';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ScheduleComponent, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective,Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import '../App.css';
// import { ToastComponent, ToastAnimationSettingsModel, ToastPositionModel } from '@syncfusion/ej2-react-notifications';
import { useEffect,useState } from 'react';
// import {compile} from '@syncfusion/ej2-react-base'
// import '@syncfusion/ej2-react-notifications/styles/material.css';
import axios from 'axios';
import  {useAuth}  from '../AuthProvider/AuthContext';

const Calender: React.FC = () => {
  const scheduleObj = useRef<ScheduleComponent>(null);
  const [users, setUsers] = useState<Record<string, any>[]>([]);
  // let toastObj = useRef<ToastComponent>(null);
  // let reminderInterval: NodeJS.Timeout | number;
  // const position: ToastPositionModel = { X: 'Right', Y: 'Top' };
  // const timeout: number = 5;
  // const animation: ToastAnimationSettingsModel = {
  //     hide: { effect: 'SlideRightOut' },
  //     show: { effect: 'SlideRightIn' }
  // }

//   const onCreated = (): void => {
//     reminderInterval = setInterval(refreshEventReminder, 5000);
// }
// const refreshEventReminder = () => {
//   const eventCollection: Record<string, any>[] = scheduleObj.current.getCurrentViewEvents();
//   eventCollection.forEach((event: Record<string, any>, i: number) => {
//       const dateFormat = (date: Date): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
//       const startTime: Date = dateFormat(event[scheduleObj.current.eventFields.startTime] as Date);
//       const currentTime: Date = dateFormat(new Date(new Date().toUTCString().slice(0, -3)));
//       const difference: number = currentTime.getTime() - startTime.getTime();
//       if (startTime.getTime() <= currentTime.getTime() && difference > -1 && difference <= 4000) {
//           toastObj.current?.show({ template: templateFn(event) });
//       }
//   });
// }
// const refreshEventReminder = () => {
//   const eventCollection: Record<string, any>[] = scheduleObj.current.getCurrentViewEvents();

//   eventCollection.forEach((event: Record<string, any>, i: number) => {
//     const dateFormat = (date: Date): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());

//     const startTimeField = scheduleObj.current.eventFields.startTime;

//     // Ensure startTimeField is a valid string (not undefined) and exists in the event object
//     if (startTimeField && event.hasOwnProperty(startTimeField)) {
//       const startTime: Date = dateFormat(event[startTimeField] as Date);
//       const currentTime: Date = dateFormat(new Date(new Date().toUTCString().slice(0, -3)));
//       const difference: number = currentTime.getTime() - startTime.getTime();

//       if (startTime.getTime() <= currentTime.getTime() && difference > -1 && difference <= 4000) {
//         // Safely accessing toastObj with optional chaining to avoid null/undefined issues
//         toastObj.current?.show({ template: templateFn(event) });
//       }
//     }
//   });
// };
// const refreshEventReminder = () => {
//   // Check if scheduleObj and its current property are defined
//   if (scheduleObj && scheduleObj.current) {
//     // Safely check if the getCurrentViewEvents method exists
//     const eventCollection: Record<string, any>[] = scheduleObj.current.getCurrentViewEvents ? scheduleObj.current.getCurrentViewEvents() : [];

//     // Only proceed if eventCollection has items
//     if (eventCollection.length > 0) {
//       eventCollection.forEach((event: Record<string, any>, i: number) => {
//         const dateFormat = (date: Date): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());

//         // Check if startTimeField is valid
//         const startTimeField = scheduleObj.current?.eventFields.startTime;
        
//         if (startTimeField && startTimeField in event) {
//           const startTime: Date = dateFormat(event[startTimeField] as Date);
//           const currentTime: Date = dateFormat(new Date(new Date().toUTCString().slice(0, -3)));
//           const difference: number = currentTime.getTime() - startTime.getTime();

//           // Check if the event is within the time window
//           if (startTime.getTime() <= currentTime.getTime() && difference > -1 && difference <= 4000) {
//             // Safely access toastObj and show the reminder
//             if (toastObj.current) {
//               toastObj.current.show({ template: templateFn(event) });
//             }
//           }
//         } else {
//           console.warn(`Event is missing the 'startTime' field:`, event);
//         }
//       });
//     } else {
//       console.log("No events found in the current view.");
//     }
//   } else {
//     console.warn("scheduleObj or scheduleObj.current is not defined.");
//   }
// };


  const dataManager = new DataManager({
    url: 'http://localhost:5000/GetData',
    crudUrl: 'http://localhost:5000/BatchData',
    adaptor: new UrlAdaptor(),
    crossDomain: true
  });

  const {usersId} = useAuth();

  console.log(usersId);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);  // Set the room data to state
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    fetchRoomData();
  }, []); 
  // const getEmployeeName = (value: ResourceDetails): string => {
  //   return (((value as ResourceDetails).resourceData) ? (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField] : value.resourceName) as string;
  // }
//   const templateFn = (data: Record<string, any>): string => {
//     const template: string = '<div class="e-toast-template"><div class="e-toast-message"><div class="e-toast-title">${Subject}</div>' +
//         '<div class="e-toast-content">${StartTime.toLocaleTimeString()} - ${EndTime.toLocaleTimeString()}</div></div></div>';
//     return compile(template.trim())(data) as string;
// }


  // const getEmployeeName = (value: ResourceDetails) => {
  //   // Check if resourceData and textField exist and are not undefined
  //   const resourceData = value?.resourceData;
  //   const textField = value?.resource?.textField;
    
  //   // Use optional chaining to safely access resourceData and textField
  //   if (resourceData && textField) {
  //     return resourceData[textField] ?? value.resourceName;  // Return resource data or fallback to resourceName
  //   }
    
  //   // Fallback to resourceName if resourceData or textField are undefined
  //   return value.resourceName;
  // }

//   const getEmployeeImage = (value: ResourceDetails): string => {
//     return getEmployeeName(value).replace(' ', '-').toLowerCase();
//   }

// const monthEventTemplate = (props:any) => {
//   return (<div className="subject">{props.Subject}</div>);
// }
// const resourceHeaderTemplate = (props:any) => {
//   return (
//     <div className="template-wrap">
//       <div className={"resource-image " + getEmployeeImage(props)}></div>
//       <div className="resource-details">
//         <div className="resource-name">{getEmployeeName(props)}</div>
//         {/* <div className="resource-designation">{getEmployeeDesignation(props)}</div> */}
//       </div>
//     </div>
//   );
// }

  return (
    <>

      {/* <div className="control-section"> */}
        {/* <div className="schedule-control"> */}
          <ScheduleComponent
            id="schedule"
            ref={scheduleObj}
            height="100%"
            width="100%"
            // selectedDate={new Date(2017, 5, 5)}
            currentView="Week"
            // resourceHeaderTemplate={resourceHeaderTemplate}
            group={{ allowGroupEdit: true }}
            allowDragAndDrop={false}
            // created={onCreated}
            // showWeekend={false}
            eventSettings={{ dataSource: dataManager }}
          >
            <ResourcesDirective>
              <ResourceDirective field='Users' title='Users' name='Users' idField='_id' textField={"name"} allowMultiple={true}  dataSource={users}></ResourceDirective>
            </ResourcesDirective>
            <ViewsDirective>
              <ViewDirective option="Day" />
              <ViewDirective option="Week" />
              <ViewDirective option="WorkWeek" />
              <ViewDirective option="Month"/>
              <ViewDirective option="Agenda" />
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop]} />
          </ScheduleComponent>
          {/* <ToastComponent ref={toastObj} cssClass='e-schedule-reminder e-toast-info' target='.e-schedule' position={position} animation={animation} newestOnTop={true} showCloseButton={true} timeOut={timeout} /> */}
        {/* </div> */}
    {/* </div> */}
    </>
  );
};

export default Calender;
