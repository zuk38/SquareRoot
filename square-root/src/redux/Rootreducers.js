import { combineReducers } from 'redux';
import chatReducer from './chats/ChatReducer';
import notesReducer from './notes/NotesReducer';
import emailReducer from './email/EmailReducer';

const RootReducers = combineReducers({
  chatReducer,
  notesReducer,
  emailReducer,
});

export default RootReducers;
