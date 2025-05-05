import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from '../../context/PostContext';
import axios from 'axios';
import { FaRegCommentDots } from "react-icons/fa";
import Comment from '../../components/Comment';

const Detail: React.FC = () => {
  const { id } = useParams();
  const context = useContext(PostContext);
  const { posts } = context;
  const selectedPost = posts.find((item) => item.id === Number(id)); 
  const [comments, setComments] = useState([])
  const fetchComment = async () => {
    // setLoader(true);s
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    } finally {
      // setLoader(false);
    }
  };

  useEffect(() => {
    fetchComment();
  }, []);

  console.log(comments)

  return selectedPost && (
    <div className="bg-[#b471fb] h-[100vh] flex flex-col px-4 sm:px-36 pt-4 sm:pt-12 w-full text-gray-700">
      <div className="bg-white rounded-t-xl border-b border-gray-300 py-6 px-8 flex-shrink-0">
        <h1 className="text-3xl font-semibold">{selectedPost.title}</h1>
        <p className="mt-4 text-sm text-gray-400">{`Created by ${selectedPost.userId}`}</p>
      </div>
      <div className="bg-white pt-12 px-8 pb-3 flex-1 overflow-hidden flex flex-col">
        <div>
          {selectedPost.body}
        </div>
        <div className="mt-12">
          <div className="flex flex-row gap-3 items-center">
            <FaRegCommentDots />
            <p>Comments</p>
          </div>
          <div className="mt-5 flex flex-col gap-3 border rounded-lg overflow-y-auto max-h-[35vh] p-3">
            {comments.map((item, index) => (
              <Comment key={index} body={item.body} email={item.email} name={item.name} setComments={setComments}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
