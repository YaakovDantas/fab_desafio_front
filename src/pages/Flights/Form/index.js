import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import SelectLocal from '../../../components/SelectLocal';
import { createFlight } from '../../../store/modules/flights/actions';
import { getLocais } from '../../../store/modules/locations/actions';

const FormLocation = () => {
  const dispatch = useDispatch();

  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');

  useEffect(() => {
    dispatch(getLocais());
  }, []);

  const { listaLocais } = useSelector(state => state.locations);

  let dadosIniciais = {
    data: '',
    origem_id: '',
    destino_id: '',
  };

  const schema = Yup.object().shape({
    data: Yup.string().required('A Data é obrigatória!'),
    origem_id: Yup.string().required('A Origem é obrigatória!'),
    destino_id: Yup.string().required('O Destino é obrigatório!'),
  });

  const handleSubmit = async ({ data, origem_id, destino_id }) => {
    dispatch(createFlight(data, origem_id, destino_id));
  };

  return (
    <>
      <h4 className="text-center">Criar Voo</h4>

      <Form onSubmit={handleSubmit} schema={schema} initialData={dadosIniciais}>
        <br />
        <label htmlFor="origem_id">Origem</label>
        <SelectLocal listaLocais={listaLocais} callbackValor={setOrigem} />
        <Input type="hidden" name="origem_id" value={origem} />

        <br />
        <label htmlFor="destino_id">Destino</label>
        <SelectLocal listaLocais={listaLocais} callbackValor={setDestino} />
        <Input type="hidden" name="destino_id" value={destino} />
        <br />
        <label htmlFor="data">Data</label>
        <Input
          type="datetime-local"
          name="data"
          id="data"
          className="form-control"
        />
        <button type="submit" className="btn btn-primary mt-2 float-right">
          Criar
        </button>
      </Form>
    </>
  );
};

export default FormLocation;
