import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
    },
    reducers: {
        setUsers: (state, action) => {
            state.data = action.payload;
        },

        deleteUser: (state, action) => {
            state.data = state.data.filter((value, index) => index !== action.payload)
        }

    },
});

export const { setUsers, deleteUser } = userSlice.actions;

export const getUsers = () => dispatch => {
    setTimeout(() => {
        // Api call here
        let data = [{
            "id": 1,
            "name": "manager1",
            "age": "11",
            "gender": "female",
            "email": "manager1@gmail.com",
            "phoneNo": "9415346313"
        },
        {
            "id": 2,
            "name": "manager2",
            "age": "12",
            "gender": "female",
            "email": "manager2@gmail.com",
            "phoneNo": "9415346314"
        },
        {
            "id": 3,
            "name": "manager3",
            "age": "13",
            "gender": "female",
            "email": "manager3@gmail.com",
            "phoneNo": "9415346315"
        },
        {
            "id": 4,
            "name": "manager4",
            "age": "14",
            "gender": "male",
            "email": "manager4@gmail.com",
            "phoneNo": "9415346316"
        },
        {
            "id": 5,
            "name": "manager5",
            "age": "15",
            "gender": "male",
            "email": "manager5@gmail.com",
            "phoneNo": "9415346317"
        },
        ];
        dispatch(setUsers(data));
    }, 1000);
};

export const selectUsers = state => state.users.data;

export default userSlice.reducer;
