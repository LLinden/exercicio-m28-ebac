import http from 'k6/http';
import { group, sleep } from 'k6';
import { Login } from "../requests/login.request.js";
import data from '../data/usuarios.json';

export default function () {
  
  let login = new Login()

  group('login and get token', () => {
    login.access(data.user, data.pass)
  })

  group('list users', () => {

  })
  
}
