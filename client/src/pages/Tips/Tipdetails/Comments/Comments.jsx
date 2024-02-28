import { useForm } from "react-hook-form";
import { IoMdSend } from "react-icons/io";
import useAuth from "../../../../lib/hooks/useAuth";
import moment from "moment";
import useAxiosPublic from "../../../../lib/hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import profileImg from "../../../../assets/profile.png";

const Comments = ({ tip }) => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  //  console.log(user?.photoURL)

  const { data: comments = [], refetch, } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/comments/${tip.title}`);
      return res.data;
    },
  });
  refetch()
  const onSubmit = async (data) => {
    reset();
    const comment = {
      comment_id: tip._id,
      tipName: tip.title,
      name: user?.displayName,
      email: user?.email,
      date: moment().format("MMM Do YY"),
      comment: data.comment,
      userPhoto: user?.photoURL,
    };
    // console.log(tip._id)
    // console.log(comment)
    const res = await axiosPublic.post("/comments", comment);
    if (res.data) {
      Swal.fire({
        icon: "success",
        title: "Thanks for your comment",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch()
    }
  };

  return (
    <div className="py-4 space-y-4">
      <h2 className="text-2xl font-semibold">Comments </h2>
      <h2 className="text-2xl font-semibold my-3">Leave a comment here </h2>{" "}
      {
        user ? <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center gap-2">
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
          :
          (
            <p className="text-[#848484] text-xl">Please <a href="/login" className="text-primary-teal font-bold">Login</a> to post a comment</p>
          )
      }

      <div>
        {comments.map((comment) => (
          <div className="flex gap-4 flex-col md:flex-row" key={comment._id}>
            <div className="w-[60px]">
              {comment?.userPhoto ? (
                <img className="rounded-full" src={comment.userPhoto} alt="" />
              ) : (
                <img className="rounded-full" src={profileImg} alt="" />
              )}
            </div>
            <div className="space-y-2 flex-1">
              <h1 className="text-[20px] md:text-[25px] font-bold">
                {comment.name}
              </h1>
              <p className="font-medium text-gray-600">{comment.date}</p>
              <p className="text-[#848484] text-lg">{comment.comment}</p>
              <hr />
            </div>

          </div>
        ))}
      </div>
    </div>

  );
};

export default Comments;
