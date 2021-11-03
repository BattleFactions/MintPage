import React from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import App from './App';

dayjs.extend(utc);
dayjs.extend(timezone);

ReactDOM.render(<App />, document.getElementById('root'));
