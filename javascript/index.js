import Table from './Table.js';
import store from './state/configureStore.js';

ReactDOM.render(
    React.createElement(
        ReactRedux.Provider,
        {
            store,
            children: React.createElement(Table)
        }
    ),
    document.querySelector('#table')
);
