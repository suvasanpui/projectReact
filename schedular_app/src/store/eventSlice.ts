import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Event {
  Id: number;
  Subject: string;
  StartTime: Date;
  EndTime: Date;
  ResourceId: number;
}

interface EventState {
  events: Event[];
}

const initialState: EventState = {
  events: []
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
    setEvents: (state, action: PayloadAction<Event[]>) => {
      state.events = action.payload;
    }
  }
});

export const { addEvent, setEvents } = eventSlice.actions;
export default eventSlice.reducer;
