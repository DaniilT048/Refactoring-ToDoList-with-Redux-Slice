import {createSlice, Slice} from '@reduxjs/toolkit';
import {useState} from "react";

interface ToDoSlice{
    newTask: string;
    text: string;
    done: boolean;
}

const initialState: ToDoSlice ={
    newTask: '',
    text: 'new task',
    done: false,
}

const toDoSlice:Slice<ToDoSlice> = createSlice({
    name: 'toDoSlice',
    initialState,
    reducers:{
        addTask(state: ToDoSlice){
            if (state.newTask === '') {
                return
            }
            state.setTasks([...state.tasks, {text: newTask, done: false}])
        },
        handleNewTask(state: ToDoSlice):void {
            setNewTask(state.target.value)
        }
        },

    });