import React from 'react'
import { MdOutlineTaskAlt } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoIosArrowDropright } from "react-icons/io";

interface CardProps {
    title: string;
    userId: number;
    id: number
  }
  
  const Card: React.FC<CardProps> = ({ title, userId, id }) => {
    const navigate = useNavigate();
  
    return (
      <div className="flex flex-row border-[1px] shadow-md items-center justify-between px-6 py-4 mb-4 rounded-lg">
        {/* 左側：Icon + 文字 */}
        <div className="flex items-center gap-4">
          <MdOutlineTaskAlt className="text-[#ac6bf1] text-3xl shrink-0" />
          <div className="flex flex-col">
            <h1 className="font-semibold max-w-[230px] sm:max-w-full text-gray-800 truncate sm:whitespace-normal">
              {title}
            </h1>
            <p className="text-xs text-gray-400 mt-1">{`Created by user ${userId}`}</p>
          </div>
        </div>
        <Button
          variant="contained"
          onClick={() => navigate(`/list/${id}`)}
          sx={{
            backgroundColor: '#a052f4',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#a863f3',
            },
          }}
          className="flex items-center gap-1 ml-4"
        >
          <span className="hidden sm:inline">View More</span>
          <span className="inline sm:hidden">
            <IoIosArrowDropright className="text-3xl" />
          </span>
        </Button>
      </div>
    );
  };
  

export default Card;
