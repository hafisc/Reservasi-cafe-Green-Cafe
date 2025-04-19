import React from 'react';
import Layout from '../components/layout/Layout';
import ReservationHeader from '../components/reservation/ReservationHeader';
import ReservationForm from '../components/reservation/ReservationForm';

const Reservation = () => {
  return (
    <Layout>
      <ReservationHeader />
      <ReservationForm />
    </Layout>
  );
};

export default Reservation;
