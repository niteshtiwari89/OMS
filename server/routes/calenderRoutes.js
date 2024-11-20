const express = require('express');
const router = express.Router();
const ScheduleEventData = require('../models/calenderModel');

// Load all events (similar to LoadData in C#)
router.post('/GetData', async (req, res) => {
  try {
    const events = await ScheduleEventData.find();
    res.json(events);
  } catch (err) {
    console.error('Error loading data:', err);
    res.status(500).json({ error: 'Error loading data' });
  }
});

// Update event data (insert, update, or remove)
// router.post('/BatchData', async (req, res) => {
//   const { action, key, added, changed, deleted, value } = req.body;

//   console.log('Request Body:', req.body); 
//   try {
//     if (action === 'insert' || (action === 'batch' && added)) {
//       const newEvent = added ? added[0] : value;
//     //   console.log()
//       const newEventData = new ScheduleEventData({
//         StartTime: new Date(newEvent.StartTime),
//         EndTime: new Date(newEvent.EndTime),
//         Subject: newEvent.Subject,
//         IsAllDay: newEvent.IsAllDay,
//         StartTimezone: newEvent.StartTimezone,
//         EndTimezone: newEvent.EndTimezone,
//         RecurrenceRule: newEvent.RecurrenceRule,
//         RecurrenceID: newEvent.RecurrenceID,
//         RecurrenceException: newEvent.RecurrenceException
//       });

//       await newEventData.save();
//       const allEvents = await ScheduleEventData.find();
//       return res.json(allEvents);
//     }

//     if (action === 'update' || (action === 'batch' && changed)) {
//       const updatedEvent = changed ? changed[0] : value;
//       const event = await ScheduleEventData.findById(updatedEvent.Id);

//       if (event) {
//         event.StartTime = new Date(updatedEvent.StartTime);
//         event.EndTime = new Date(updatedEvent.EndTime);
//         event.Subject = updatedEvent.Subject;
//         event.IsAllDay = updatedEvent.IsAllDay;
//         event.StartTimezone = updatedEvent.StartTimezone;
//         event.EndTimezone = updatedEvent.EndTimezone;
//         event.RecurrenceRule = updatedEvent.RecurrenceRule;
//         event.RecurrenceID = updatedEvent.RecurrenceID;
//         event.RecurrenceException = updatedEvent.RecurrenceException;

//         await event.save();
//       }

//       const allEvents = await ScheduleEventData.find();
//       return res.json(allEvents);
//     }

//     if (action === 'remove' || (action === 'batch' && deleted)) {
//       if (action === 'remove') {
//         const event = await ScheduleEventData.findByIdAndDelete(key);
//         if (event) {
//           return res.json(await ScheduleEventData.find());
//         }
//       } else {
//         for (const eventToDelete of deleted) {
//           await ScheduleEventData.findByIdAndDelete(eventToDelete.Id);
//         }
//       }

//       return res.json(await ScheduleEventData.find());
//     }
//   } catch (err) {
//     console.error('Error updating data:', err);
//     res.status(500).json({ error: 'Error updating data' });
//   }
// });
router.post('/BatchData', async (req, res) => {
  const { action, key, added, changed, deleted, value } = req.body;

  console.log('Request Body:', req.body); 
  try {
    if (action === 'insert' || (action === 'batch' && added && added.length > 0)) {
      const newEvent = added && added.length > 0 ? added[0] : value;
      
      // Check if newEvent is defined and contains required fields
      if (!newEvent || !newEvent.StartTime || !newEvent.EndTime || !newEvent.Subject) {
        return res.status(400).json({ error: 'Missing required fields in the event data' });
      }
      const users = newEvent.Users;

      console.log(users)
      const newEventData = new ScheduleEventData({
        StartTime: new Date(newEvent.StartTime),
        CreateBy:newEvent.Users,
        EndTime: new Date(newEvent.EndTime),
        Subject: newEvent.Subject,
        Description:newEvent.Description,
        Users:newEvent.Users || null,
        Location : newEvent.Location,
        IsAllDay: newEvent.IsAllDay || false,  // Default to false if not provided
        StartTimezone: newEvent.StartTimezone || null,
        EndTimezone: newEvent.EndTimezone || null,
        RecurrenceRule: newEvent.RecurrenceRule || null,
        RecurrenceID: newEvent.RecurrenceID || null,
        RecurrenceException: newEvent.RecurrenceException || null
      });

      
      await newEventData.save();
      const allEvents = await ScheduleEventData.find();
      return res.json(allEvents);

    }

    if (action === 'update' || (action === 'batch' && changed && changed.length > 0)) {
      const updatedEvent = changed && changed.length > 0 ? changed[0] : value;
      
      // Check if updatedEvent is defined and contains required fields
      if (!updatedEvent || !updatedEvent._id || !updatedEvent.StartTime || !updatedEvent.EndTime || !updatedEvent.Subject) {
        return res.status(400).json({ error: 'Missing required fields in the event data for update' });
      }
      const users = updatedEvent.Users;

      console.log(users)

      const event = await ScheduleEventData.findById(updatedEvent._id);
      if (event) {
        event.StartTime = new Date(updatedEvent.StartTime);
        event.EndTime = new Date(updatedEvent.EndTime);
        event.Subject = updatedEvent.Subject;
        event.CreateBy = updatedEvent.Users;
        event.Location = updatedEvent.Location;
        event.Description = updatedEvent.Description;
        event.Users = updatedEvent.Users || null;
        event.StartTimezone = updatedEvent.StartTimezone || null;
        event.EndTimezone = updatedEvent.EndTimezone || null;
        event.RecurrenceRule = updatedEvent.RecurrenceRule || null;
        event.RecurrenceID = updatedEvent.RecurrenceID || null;
        event.RecurrenceException = updatedEvent.RecurrenceException || null;

        await event.save();
      }

      const allEvents = await ScheduleEventData.find();
      return res.json(allEvents);
    }

    if (action === 'remove' || (action === 'batch' && deleted && deleted.length > 0)) {
      if (action === 'remove') {
        const event = await ScheduleEventData.findByIdAndDelete(key);
        if (event) {
          return res.json(await ScheduleEventData.find());
        }
      } else {
        for (const eventToDelete of deleted) {
          await ScheduleEventData.findByIdAndDelete(eventToDelete._id);
        }
      }

      return res.json(await ScheduleEventData.find());
    }

  } catch (err) {
    console.error('Error updating data:', err);
    res.status(500).json({ error: 'Error updating data' });
  }
});

module.exports = router;
