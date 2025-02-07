import React, { useState } from 'react';
import './App.css';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, DragAndDrop, Resize, ResourcesDirective, ResourceDirective } from '@syncfusion/ej2-react-schedule';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store/store';

// Static color mapping outside component to maintain consistency
const colors = [
  '#FF6B6B', // Red
  '#4ECDC4', // Turquoise
  '#45B7D1', // Blue
  '#96CEB4', // Sage
  '#FFEEAD', // Yellow
  '#D4A5A5', // Pink
  '#9B59B6', // Purple
  '#3498DB', // Blue
  '#E67E22', // Orange
  '#2ECC71'  // Green
];

const subjectColorMap = new Map<string, string>();

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getEventColor = (subject: string) => {
    if (!subjectColorMap.has(subject)) {
      const nextColorIndex = subjectColorMap.size % colors.length;
      subjectColorMap.set(subject, colors[nextColorIndex]);
    }
    return subjectColorMap.get(subject)!;
  };

  const resourceData = [
    { ResourceId: 1, ResourceName: 'Location A' },
    { ResourceId: 2, ResourceName: 'Location B' },
    { ResourceId: 3, ResourceName: 'Location C' }
  ];

  const data = [
    {
      Id: 1,
      Subject: 'Paris',
      StartTime: new Date(2023, 1, 15, 10, 0),
      EndTime: new Date(2023, 1, 15, 12, 30),
      ResourceId: 1
    },
    {
      Id: 2,
      Subject: 'Germany',
      StartTime: new Date(2023, 1, 17, 12, 0),
      EndTime: new Date(2023, 1, 17, 13, 30),
      ResourceId: 2
    },
    {
      Id: 3,
      Subject: 'England',
      StartTime: new Date(2023, 1, 13, 9, 0),
      EndTime: new Date(2023, 1, 13, 11, 0),
      ResourceId: 3
    },
  ];

  const eventSettings = { 
    dataSource: data,
    template: eventTemplate
  };

  function eventTemplate(props: any): JSX.Element {
    const color = getEventColor(props.Subject);
    return (
      <div className="template-wrap" style={{ backgroundColor: color }}>
        <div className="subject">{props.Subject}</div>
      </div>
    );
  }

  const onDragStart = (args: any) => {
    // You can add custom logic here if needed
    args.navigation.enable = true;
  };

  // Add navigation functions
  const previousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <Header />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
          <button onClick={previousMonth}>Previous Month</button>
          <button onClick={nextMonth}>Next Month</button>
        </div>
        <ScheduleComponent 
          height='550px' 
          selectedDate={currentDate}
          eventSettings={eventSettings}
          dragStart={onDragStart}
          group={{ resources: ['Locations'] }}
          showWeekend={true}
          currentView='Month'
        >
          <ResourcesDirective>
            <ResourceDirective 
              field='ResourceId' 
              title='Location' 
              name='Locations'
              dataSource={resourceData}
              textField='ResourceName' 
              idField='ResourceId'
            />
          </ResourcesDirective>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
        </ScheduleComponent>
      </div>
    </Provider>
  );
}

export default App;
