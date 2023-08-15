import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import dayjs from 'dayjs';
import {ConfigProvider} from 'antd';
import ruRU from 'antd/locale/ru_RU';
import 'dayjs/locale/ru';

import {store} from './store';
import App from './App';

dayjs.locale('ru');

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        locale={ruRU}
        theme={{
          token: {
            fontSize: 16,
            fontFamily:
              "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
          },
        }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
