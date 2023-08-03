import React from 'react';

import classes from './ErrorModal.module.css';
import Button from '../Components/Button';

const ErrorModal = props => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <main className={classes.content}>
                    <p>{props.message}</p>
                </main>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </div>
        </div>
        
    )
};

export default ErrorModal;