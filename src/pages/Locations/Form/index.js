import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { createLocation } from '../../../store/modules/locations/actions';

const FormLocation = () => {
  const dispatch = useDispatch();

  let dadosIniciais = {
    cep: '',
    pais: '',
    estado: '',
    cidade: '',
  };

  const schema = Yup.object().shape({
    cep: Yup.string().required('O Cep é obrigatório!'),
    pais: Yup.string().required('O País é obrigatório!'),
    estado: Yup.string().required('O Estado é obrigatório!'),
    cidade: Yup.string().required('A Cidade é obrigatórie!'),
  });

  const handleSubmit = async ({ cep, pais, estado, cidade }) => {
    dispatch(createLocation(cep, pais, estado, cidade));
  };

  return (
    <>
      <h4 className="text-center">Criar Origem/Destino para Voos</h4>
      <div className="">
        <Form
          onSubmit={handleSubmit}
          schema={schema}
          initialData={dadosIniciais}
        >
          <br />
          <label htmlFor="pais">País</label>
          <Input type="text" name="pais" id="pais" className="form-control" />

          <br />
          <label htmlFor="estado">Estado</label>
          <Input
            type="text"
            name="estado"
            id="estado"
            className="form-control"
          />

          <br />
          <label htmlFor="cidade">Cidade</label>
          <Input
            type="text"
            name="cidade"
            id="cidade"
            className="form-control"
          />

          <br />
          <label htmlFor="cep">CEP</label>
          <Input type="text" name="cep" id="cep" className="form-control" />
          <button type="submit" className="btn btn-primary mt-2 float-right">
            Criar
          </button>
        </Form>
      </div>
    </>
  );
};

export default FormLocation;
