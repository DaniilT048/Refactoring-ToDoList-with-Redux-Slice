import {createSlice, Slice} from '@reduxjs/toolkit';
import {useState} from "react";

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