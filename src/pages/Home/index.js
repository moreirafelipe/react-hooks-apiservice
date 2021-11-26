import {useState, useEffect} from 'react';
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

import Repositorio from './components/Repositorio';
import api from '../../services/api';

export default function Home() {
  const [repositorios, setRepositorios] = useState([]);
  const handleSubmit = async ({ nomeUsuario }) => {

    try {
      const response = await api.get(`/users/${nomeUsuario}/repos`);
      setRepositorios(response.data)
      console.log(repositorios)

/*       this.setState({ repositorios: response.data }); */
    } catch (error) {
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      });
    }
  }

    return (
      <>
        <Link to="/repository">Ir para repositórios</Link>
        <div className="col-md-4 col-sm-6 my-3 container text-center">
          <h2>Procure um usuário do Github</h2>
          <Formik initialValues={{ nomeUsuario: '' }} onSubmit={handleSubmit}>
            <Form>
              <Field placeholder="Insira o nome do usuário" required type="text" name="nomeUsuario" id="nomeUsuario" className="form-control my-3" />
              <button type="submit" className="btn btn-primary">Pesquisar</button>
            </Form>
          </Formik>
          {repositorios && (
            <ol className="list-group list-group-numbered my-3">
              {repositorios.map(({ id, name, html_url }) => {
                return (
                  <Repositorio id={id} name={name} html_url={html_url} />
                )
              })}
            </ol>
          )}
        </div>
      </>
    );
}