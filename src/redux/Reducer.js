import {combineReducers} from 'redux';
import {SetRegist} from './TypeRedux';

const inisialstate = {
  name: 'Mardi Migrasi',
};
const inisialRegisterReducer = {
  form: {
    Username: '',
    Password: '',
  },
  title: 'mohom melakukan pendaftaran',
  username: 'masukkan nama anda',
};
const RegisterReducer = (state = inisialRegisterReducer, action) => {
  if (action.type === 'SET_TITLE') {
    return {
      ...state,
      title: 'Register jadi title',
    };
  }
  if (action.type === SetRegist) {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};
const inisialLoginReducer = {
  name: 'mardin',
  isloding: true,
};
const LoginReducer = (state = inisialLoginReducer, action) => {
  return state;
};
// tahap dua (ini digunakan jika mempunyai banyak reducer, sehingga perlu di gabungkan/combine)
const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
});
// tahap pertama (ini hanya di gunakan jikan hanya mempunyai satu reducer saja)
// const reducer = (state = inisialstate, action) => {
//   return state;
// };

export default reducer;
