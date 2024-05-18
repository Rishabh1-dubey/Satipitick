const Comment = ({ data }) => {
  return (
    <div className="flex p-2">
      <img
        className="w-16 h-16 p-2 rounded-full"
        alt="user"
        src={data?.authorProfileImageUrl}
      />
      <div>
        <div className="py-1 font-bold">{data?.authorDisplayName}</div>
        <div className="font-light text-sm">{data?.textOriginal}</div>
      </div>
    </div>
  );
};

const CommentsList = ({ list, isComment }) => {
  // return comments.map((comment, index) => (
  //   <div key={index}>
  //     <Comments data={comment} />
  //     <div className="pl-5 border border-l-black ml-5">
  //       <CommentsList comments={comment.replies} />
  //     </div>
  //   </div>
  // ));

  isComment && console.log("Comments: ", list);
  return (
    list?.length > 0 &&
    list.map((comment) => {
      // comment.replies && console.log("Comment: ",comment?.replies?.comments?.length)
      return (
        <div className="hidden md:block" key={comment?.id}>
          <Comment
            data={
              isComment
                ? comment?.snippet
                : comment?.snippet?.topLevelComment?.snippet
            }
          />
          {comment?.replies?.comments?.length > 0 && (
            <div className="pl-16">
              <CommentsList
                list={comment?.replies?.comments}
                isComment={true}
              />
            </div>
          )}
        </div>
      );
    })
  );
};

const CommentsContainer = ({ videoID }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getComments(videoID);
  }, []);

  const commentList = useSelector((store) => store.comments.list);

  async function getComments(videoID) {
    const data = await fetch(
      YOUTUBE_COMMENT_API + videoID
    );
    const json = await data.json();
    console.log(json);
    dispatch(setComments(json));
  }

  return (
    <div className="m-5 p-2">
      <div className=" text-2xl font-bold">Comments:</div>
      <div>
        <CommentsList list={commentList?.items} />
      </div>
    </div>
  );
};