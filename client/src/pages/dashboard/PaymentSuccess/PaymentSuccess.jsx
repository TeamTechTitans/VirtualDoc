import { Link, useParams } from 'react-router-dom';
import img from '../../../assets/icons/correct.png'
const PaymentSuccess = () => {
    const {tranId} = useParams()
  return (
    <div>
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
          <p><span className='font-semibold'>Transaction Id: </span>{tranId}</p>
          <div className="card-actions">
            <Link to='/dashboard/paymentHistory'>
                <button className="btn btn-primary">Payment History</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
