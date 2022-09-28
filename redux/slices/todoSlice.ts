import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type TODO = {
    id?: number;
    title: string; 
    dateStart: string;
    category: string;
    description: string;
    dateEnd:string;
    onClickDelete?: () => void;
    onClickArchive?: () => void;
    onClickEdit?: () => void;
}



export type CounterState = {
  todo: TODO[];
  archive: TODO[];
  summary: string[];
};

const initialState: CounterState = {
  todo: [{
    id: 1,
    title: "Shopping list1",
    dateStart: "12.09.22",
    category: "Task",
    description: "Tomatoes, bread",
    dateEnd: "2022-09-15",
  },
  {
    id: 2,
    title: "Shopping list2",
    dateStart: "12.09.22",
    category: "Random Thought",
    description: "Tomatoes, bread",
    dateEnd: "2022-09-15",
  },
  {
    id: 3,
    title: "Shopping list3",
    dateStart: "12.09.22",
    category: "Random Thought",
    description: "Tomatoes, bread",
    dateEnd: "2022-09-15",
  }],
  archive: [],
  
  summary: ["Task", "Random Thought", "Idea"],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    deleteTask: (state, action: PayloadAction<number>) => {
        state.todo = state.todo.filter((item) => item.id !== action.payload);
      },
    deleteArchive: (state, action: PayloadAction<number>) => {
      state.archive = state.archive.filter((item) => item.id !== action.payload);
    },
    archiveTask: (state, action: PayloadAction<number>) => {
      state.archive.push(...state.todo.filter(item => item.id === action.payload));
      state.todo = state.todo.filter(item => item.id !== action.payload);
    },
    dearchiveTask: (state, action: PayloadAction<number>) => {
      state.todo.push(...state.archive.filter(item => item.id === action.payload));
      state.archive = state.archive.filter(item => item.id !== action.payload);
    },
    deleteAllTasks: (state) => {
      state.todo = [];
      state.archive = []; 
    },
    addTask: (state, action: PayloadAction<TODO>) => {
      action.payload.id = state.todo.length + 1;
      state.todo.push(action.payload);
    },
    editTask: (state, action: PayloadAction<TODO>) => {
      console.log(action.payload);
    }
  },
})

export const { deleteTask, deleteAllTasks, deleteArchive, archiveTask, addTask, dearchiveTask, editTask } = todoSlice.actions

export default todoSlice.reducer