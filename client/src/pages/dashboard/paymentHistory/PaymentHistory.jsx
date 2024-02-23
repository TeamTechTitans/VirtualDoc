import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../lib/hooks/useAuth";
import useAxiosPublic from "../../../lib/hooks/useAxiosPublic";

const PaymentHistory = () => {
  const { user } = useAuth()
  const axiosPublic = useAxiosPublic()

  const { data: payments = [] } = useQuery({
    queryKey: ['payments', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/payment/${user?.email}`)
      return res.data;
    }
  })
  // console.log(payments)
  return (
    <div>
      <div className="overflow-x-auto p-6 mt-12 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold py-4">
          TOTAL Payment: {payments.length}
        </h2>
        <table className="table ">
          {/* head */}
          <thead className="bg-[#22b6af] rounded-lg">
            <tr className="text-center">
              <th>#</th>
              <th>Email</th>
              <th>Price</th>
              <th className="">Transaction Id</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment, idx) => (
              <tr className="text-center" key={payment._id}>
                <td>{idx + 1}</td>
                <th>
                  <p>{payment.email}</p>
                </th>
                <th>
                  ${payment.price}
                </th>
                <th>
                  ${payment.transactionId}
                </th>
                <th>
                  {payment.paidStatus == true ?
                    (<p>Paid</p>) : (<p>Not Paid</p>)
                  }
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;