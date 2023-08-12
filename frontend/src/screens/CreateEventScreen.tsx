import React from 'react';
import MyCalendar from '../components/MyCalendar';

const CreateEventScreen = () => {
  return (
    <section>
      <div className="max-w-[800px] p-4">
        <h2 className="font-semibold text-[24px]">
          Create an Event (Basic info)
        </h2>
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
          <h3 className="font-bold text-[1.25rem]">Date & Time</h3>
          <div>
            <MyCalendar />
          </div>
          <h3 className="font-bold text-[1.25rem]">Location</h3>
          <div className="my-2">
            <label className="font-medium text-[14px]">Event will be in</label>
            <input
              className="p-2 w-[100%] border rounded"
              type="text"
              placeholder="location"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateEventScreen;
