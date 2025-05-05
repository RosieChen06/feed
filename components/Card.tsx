import React from 'react'
import { MdOutlineTaskAlt } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

interface CardProps {
    title: string;
    userId: number;
    id: number
  }
  
const Card: React.FC<CardProps> = ({ title, userId, id }) => {
const navigate = useNavigate();

    return (
        <div className="flex flex-row border-[1px] shadow-md items-center justify-start px-16 mb-4 py-3 rounded-lg">
            <MdOutlineTaskAlt className="text-[#ac6bf1] text-3xl font-bold" />
            <div className='flex flex-row justify-between w-full ml-6'>
                <div>
                    <h1 className='font-semibold text-gray-800'>{title}</h1>
                    <p className='text-xs text-gray-400 mt-1'>{`Created by user ${userId}`}</p>
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
                
                >
                    View More
                </Button>
            </div>
        </div>
    );
};

export default Card;
