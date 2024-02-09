import { Link, useParams } from 'react-router-dom';
import img from '../../assets/icons/correct.png'
import { Button } from '@material-tailwind/react';
const PaymentSuccess = () => {
    const {tranId} = useParams()
  return (
    <div className='my-4'>
      <div className="card w-96 mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl w-44"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Congratulations</h2>
          <p>Your Payment Successful.</p>
          <p className='font-medium'>Your Appointment has been Scheduled</p>
             <p>You will see all details at your dashboard <span className='font-semibold'>Appointments</span> section</p>
          <p><span className='font-semibold'>Transaction Id: </span>{tranId}</p>
          <div className="card-actions">
            <Link to='/dashboard/appoinment'>
            <Button className="bg-secondary-blue" size="sm">Appointments</Button>
            </Link>
            <Link to='/dashboard/paymentHistory'>
                <Button className="bg-secondary-blue" size="sm">Payment History</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
