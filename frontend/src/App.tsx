import React from 'react';
import './App.css';
import { createStyles, MantineProvider } from '@mantine/core';
import { colors } from './app/constants/colors';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import { Routes,Route } from 'react-router-dom';
import { TicketsListPage } from './app/pages/tickets-list/TicketsListPage';
import { AddTicketsPage } from './app/pages/add-tickets/AddTicketsPages';
import { Notifications } from '@mantine/notifications';

const useStyles = createStyles((theme) => ({
    bodyBackground: {
        backgroundColor: colors.lightBackground,
        minHeight: '100vh',
    },
}));

function App() {
    const { classes } = useStyles();

    return (
        <Provider store={store}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'light',
                }}
            >
                <div className={classes.bodyBackground}>
                    <Notifications position="top-right"/>
                    <Routes>
                        <Route path='/' element={<TicketsListPage/>}></Route>
                        <Route path='/addTicket' element={<AddTicketsPage/>}></Route>
                    </Routes>       
                </div>
            </MantineProvider>
        </Provider>
    );
}

export default App;
