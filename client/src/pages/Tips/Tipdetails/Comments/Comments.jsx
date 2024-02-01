import { useForm } from "react-hook-form";
import { IoMdSend } from "react-icons/io";
import useAuth from "../../../../lib/hooks/useAuth";
import moment from 'moment'
import useAxiosPublic from "../../../../lib/hooks/useAxiosPublic";

const Comments = ({ tip }) => {
  const { register, handleSubmit, reset } = useForm();
  const {user} = useAuth()
  const axiosPublic = useAxiosPublic()
//  console.log(user?.photoURL)

  const onSubmit = async (data) => {
    reset()
    const comment = {
      comment_id: tip.id,
      tipName: tip.title,
      name: user?.displayName,
      email: user?.email,
      date: moment().format("MMM Do YY"),
      comment: data.comment,
      userPhoto: user?.photoURL
    }
    const res = await axiosPublic.post('/comments', comment)
    console.log(res)
  };

  return (
    <div className="py-4 space-y-4">
      <h2 className="text-2xl font-semibold">Comments </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-semibold my-3">Leave a comment here </h2>      <div className="flex items-center gap-2">
        <div className="flex-1">
        <textarea 
          type="text"
          placeholder="Comment here"
          {...register("comment", { required: true })}
          className="input h-16 input-bordered focus:outline-0 w-full rounded-2xl"
        />
      </div>
      <div className="">
          <button type="submit">
            <IoMdSend className="text-gray-500 text-3xl" />
          </button>
        </div>
      </div>
      
    </form>
    <div>
      
    </div>
    </div>
    
  );
};

export default Comments;
