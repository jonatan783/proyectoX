import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { sendLoginRequest, sendSignUpRequest, sendLogoutRequest, } from '../../redux/user';
import { FormModalContainer, UserPopoverContainer } from '../../containers';
import { useNavigate } from 'react-router';
import "./Login.css"

const LoginComponent = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const first_name = useInput('');
  const last_name = useInput('');
  const email = useInput('');
  const password = useInput('');
  const dispatch = useDispatch();
  

  const subTitleRegister = [
    { subTitle: 'Nombre', key: 'name' }, 
    { subTitle: 'Apellido', key: 'lastname' }, 
    { subTitle: 'Email', key: 'email' }, 
    { subTitle: 'Contraseña', key: 'password' },
  ]
  const subTitleLogin = [
    { subTitle: 'Email', key: 'email' }, 
    { subTitle: 'Contraseña', key: 'password' },
  ]

  const dataRegister ={
    id: 'registerModal',
    title: 'Registro',
    nameButton: 'Registrate',
    fn: data => console.log(data),
  }

  const dataLogin = {
    id: 'loginModal',
    title: 'Iniciar sesión',
    nameButton: 'Iniciar sesión',
    fn: ({email, password}) => {
      if (!validateEmail(email)) return;
      console.log(email, password)
      dispatch(sendLoginRequest({ email, password}))
      .then(() => { window.location.reload(false)})
      .catch(err => console.log(err)) 
    },
  }

  const validateEmail = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    alert('You have entered an invalid email address!');
    return false;
  };

  const validateString = str => {
    if (/^[a-z ,.'-]+$/i.test(str)) {
      return true;
    }
    alert('Your name or lastname is not valid!');
    return false;
  };

  const handleLogin = e => {
    e.preventDefault();

    if (!validateEmail(email)) return;
    dispatch(sendLoginRequest({ email, password}))
    .then(() => { window.location.reload(false)});
  };
  
  const handleRegister = e => {
    e.preventDefault();

    if (!validateString(first_name.value)) return;
    if (!validateString(last_name.value)) return;
    if (!validateEmail(email.value)) return;

    dispatch(
      sendSignUpRequest({
        name: first_name.value,
        lastname: last_name.value,
        email: email.value,
        password: password.value,
      })
    )
      .then(user =>
        dispatch(
          sendLoginRequest({ email: user.email, password: user.password })
        )
      )
      .then(() => {
        window.location.reload(false);
      });
  };

  const handleLogout = () => {
    dispatch(sendLogoutRequest());
  };


  return (
    <div>
      <FormModalContainer data={dataRegister} subTitles={subTitleRegister} />
      <FormModalContainer data={dataLogin}  subTitles={subTitleLogin} />
      <FormModalContainer data={dataRegister} subTitles={subTitleRegister}/>
      <UserPopoverContainer/>   
    </div>
  );
};

export default LoginComponent
