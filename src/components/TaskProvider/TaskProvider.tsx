import React, { createContext, useContext, useState, ReactNode } from "react";

type Task = {
  titulo: string;
  subtitulo: string;
};

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

type TaskProviderProps = {
  children: ReactNode;
};

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
