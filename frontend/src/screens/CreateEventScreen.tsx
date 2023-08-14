import React from 'react';
import MyCalendar from '../components/MyCalendar';
import SaveButton from '../components/SaveButton';

const CreateEventScreen = () => {
  return (
    <section className="px-4">
      <div className="max-w-[600px] p-4">
        <div className="my-4">
          <h2 className="font-semibold text-[24px]">Create an Event</h2>
        </div>
        <form>
          <div className="my-2">
            <label className="font-medium text-[14px]">Title</label>
            <input
              className="p-2 w-[100%] border rounded"
              type="text"
              placeholder="Title of the event..."
            />
          </div>
          <div className="my-2">
            <label className="font-medium text-[14px]">Category</label>
            <input
              className="p-2 w-[100%] border rounded"
              type="text"
              placeholder="Category of the event..."
            />
          </div>
          <div className="my-4">
            <h3 className="font-bold text-[1.25rem]">Date & Time</h3>
          </div>
          <div className="my-2">
            <MyCalendar />
          </div>
          <div className="my-4">
            <h3 className="font-bold text-[1.25rem]">Location</h3>
          </div>
          <div className="my-2">
            <label className="font-medium text-[14px]">Event will be in</label>
            <input
              className="p-2 w-[100%] border rounded"
              type="text"
              placeholder="Enter the event location"
            />
          </div>
          <div className="my-8">
            <SaveButton />
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateEventScreen;
