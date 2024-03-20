import { useState, FC } from 'react';
import axios from 'axios';
import { useEventData } from '../../../hooks/useEventData';

const inputField: React.CSSProperties = {
  width: '50vw',
  height: '2rem',
  border: '1px solid rgb(59, 130, 246)',
  padding: '5px',
  borderRadius: '5px',
};

const label: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: 'semi-bold',
};

const Upload: FC = () => {
  const { eventDatas } = useEventData();
  const [eventData, setEventData] = useState({
    eventName: '',
    eventDescription: '',
    speaker: '',
    eventUrl: '',
    // Store the uploaded file
    // ... other event details
  });

  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const existingEvent = eventDatas.find((event) => event.eventName === eventData.eventName);
    if (existingEvent) {
      setError('Event Name already exists.');
      return;
    }
    const token = sessionStorage.getItem('token');
    console.log("toke37645tguyuf8iyy!!!", token);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_SSMP_BACKEND_API}events/eventCreation`,
        eventData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(eventData);

      if (response.status === 200) {
        console.log('Event created successfully!');
        window.alert('Event created successfully!');
      } else {
        console.log('Failed to create event.');
        window.alert('Failed to create event.');
        // Handle success
      }
    } catch (error) {
      console.error('An error occurred:', error);
      window.alert(`An error occurred:${error}`);
      // Handle error cases
    }

    console.log(import.meta.env.VITE_APP_SSMP_BACKEND_API);
    console.log(eventData);
  };

  return (
    <div className='flex'>
      <div className='mt-8 ml-[6rem]'>
        <h1 className='font-bold text-2xl'>Upload Events</h1>

        <div className='mt-[2rem]'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='eventName' style={label}>
              Name of Event
            </label>{' '}
            <br />
            <input
              type='text'
              name='eventName'
              id='eventName'
              required
              style={inputField}
              onChange={handleInputChange}
            />
            <br /> <br />

            <label htmlFor='eventDescription' style={label}>
              Event Info
            </label>
            <br />
            <input
              type='text'
              name='eventDescription'
              id='eventDescription'
              required
              style={inputField}
              onChange={handleInputChange}
            />
            <br /> <br />

            <label htmlFor='speaker' style={label}>
              Speaker
            </label>
            <br />
            <input
              type='text'
              name='speaker'
              id='speaker'
              style={inputField}
              onChange={handleInputChange}
            />
            <br /> <br />

            <label htmlFor='eventDate' style={label}>
              Event Date
            </label>{' '}
            <br />
            <input
              type='date'
              name='eventDate'
              onChange={handleInputChange}
              id='eventDate'
              style={inputField}
            />
            <br />
            <br />

            <label htmlFor='eventUrl' style={label}>
              Event Link
            </label>{' '}
            <br />
            <input
              type='text'
              onChange={handleInputChange}
              name='eventUrl'
              id='eventUrl'
              style={inputField}
              required
            />
            <br />
            <div className='flex justify-center'>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            </div>
            <input
              type='submit'
              value='Upload Event'

              style={{
                height: '2rem',
                width: '8rem',
                backgroundColor: 'rgb(59, 130, 246)',
                color: 'white',
                marginTop: '1rem',
                borderRadius: '10px',
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
