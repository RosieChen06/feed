import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

// 定義狀態型別
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostContextType {
  posts: Post[];
  loader: boolean;
  fetchTodo: () => void;
}

// 創建 Context 並設置型別
const PostContext = createContext<PostContextType | undefined>(undefined);

// 創建 Provider 來管理 Post 的狀態
const PostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [userLogin, setUserLogin] = useState<String>('')

  const fetchTodo = async () => {
    setLoader(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <PostContext.Provider value={{ posts, loader, fetchTodo, userLogin, setUserLogin }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider, PostContext };
