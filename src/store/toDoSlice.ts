import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';

interface Task{
    text: string;
    done: boolean;
}

interface ToDoState{
    tasks: Task[];
}

const initialState: ToDoState = {
    tasks: [],
}

const toDoSlice: Slice<ToDoState> = createSlice({
    name: 'toDo',
    initialState,
    reducers:{
        addTask(state, action: PayloadAction<string>){
            state.tasks.push({text: action.payload, done: false})
        }
    }
})