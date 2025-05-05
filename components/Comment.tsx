import React from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from 'sweetalert2';

interface Comment {
    body: string;
    email: string;
    name: string;
  }

  interface CommentProps {
    body: string;
    email: string;
    name: string;
    setComments: React.Dispatch<React.SetStateAction<Comment[]>>; 
  }

const Comment:React.FC<CommentProps> = ({ body, email, name, setComments }) => {
    const handleDelete = (email:string, body:string, name: string) => {
        Swal.fire({
          title: 'Are you sure you would like to delete this comment？',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Delete',
          cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            console.log('delete success');
            setComments((prevComments) =>
                prevComments.filter((comment) => comment.email !== email && comment.body !== body && comment.name !== name)  // 過濾掉 ID 匹配的評論
              );
          }
        });
      };
  return (
    <div className='flex flex-col sm:flex-row items-start sm:items-center border-b-[1px] border-b-gray-200 pb-3'>
        <div>
            <h1 className='text-md'>{name}</h1>
            <p className='text-sm mt-1'>{body}</p>
        </div>
        <div 
            className='p-2 rounded-full cursor-pointer hover:bg-red-100 mt-3 sm:mt-0 border-gray-300 border-[1px] w-fit h-fit'
            onClick={()=>handleDelete(email, body, name)}
        >
            <MdOutlineDeleteOutline />
        </div>
    </div>
  )
}

export default Comment
