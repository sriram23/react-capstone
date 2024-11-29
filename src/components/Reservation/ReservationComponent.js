import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./ReservationComponent.css";

const ReservationSchema = Yup.object().shape({
  partySize: Yup.number()
    .min(1, 'We will need atleast one Guest')
    .max(10, 'You can reserve only upto 10 Guests')
    .required('Numer of guest is required'),
  date: Yup.date().required('Date is required'),
  reservationTime: Yup.string().required('Time is required'),
  guestName: Yup.string().required('Your name is required'),
  guestContactNumber: Yup.number().min(7000000000, 'Please enter a valid contact number. It should start with 7, 8 or 9 and should have 10 digits').max(9999999999, 'Please enter a valid contact number. It should start with 7, 8 or 9 and should have 10 digits').required('Your contact number is required'),
});

function Reservation() {
  return (
    <Formik
      initialValues={{
        partySize: 1,
        date: null, // Start with null for date picker
        reservationTime: '',
        guestName: '',
        guestContactNumber: '',
      }}
      validationSchema={ReservationSchema}
      onSubmit={(values, { resetForm }) => {
        // Handle form submission
        toast.success(`You booked tables for ${values.partySize} guests on ${new Intl.DateTimeFormat('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }).format(values.date)} at ${values.reservationTime}.`, {position: "bottom-center",})
        // Reset form
        resetForm();
      }}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form className="reservation-form">
          <h2>Make a Reservation</h2>

          {/* Party Size */}
          <div className="item-count">
            <label htmlFor="partySize">No of Guests:</label>
            <Field type="number" name="partySize" min={1} max={10} />
            <ErrorMessage name="partySize" component="div" className="error" />
          </div>

          {/* Current Date and Time */}
          <div className="current-date-time">
            <p>Current Date and Time:</p>
            <p>{new Date().toLocaleString()}</p>
          </div>

          {/* Date Picker */}
          <div className="date-picker">
            <label htmlFor="date">Date:</label>
            <DatePicker
              selected={values.date}
              onChange={(date) => setFieldValue("date", date)}
              minDate={new Date()}
              placeholderText="Select a date"
            />
            <ErrorMessage name="date" component="div" className="error" />
          </div>

          {/* Reservation Time */}
          <div className="reservation-time">
            <label htmlFor="reservationTime">Time:</label>
            <Field as="select" name="reservationTime">
              <option value="">Select a time</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="9:00 PM">9:00 PM</option>
            </Field>
            <ErrorMessage name="reservationTime" component="div" className="error" />
          </div>

          {/* Guest Name */}
          <div className="guest-info">
            <label htmlFor="guestName">Name:</label>
            <Field type="text" name="guestName" />
            <ErrorMessage name="guestName" component="div" className="error" />
          </div>

          {/* Guest Contact Number */}
          <div className="guest-info">
            <label htmlFor="guestContactNumber">Contact Number:</label>
            <Field type="number" min="7000000000" max="9999999999" length="10" name="guestContactNumber" />
            <ErrorMessage name="guestContactNumber" component="div" className="error" />
          </div>

          {/* Submit Button */}
          <button type="submit">Make Reservation</button>
          <ToastContainer />
        </Form>
      )}
    </Formik>
  );
}

export default Reservation;
