import React, { createContext, useContext, useState, ReactNode } from "react";

type Task = {
  title: string;
  subtitle: string;
  id: number;
  check: false;
};

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  updateTask: (updated: any) => void;
  checkTask: (id: number) => void;
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
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const updateTask = (updated: any) => {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === updated.id ? updated : task))
    );
  };

  const checkTask = (id: number) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, check: !task.check } : task
    );
    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask, checkTask }}>
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
