import './nav-buttons.scss';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FileOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { DeleteButton } from '.';

interface Props {
  id?: string;
}
export const NavButtons: React.FC<Props> = React.memo(({ id }) => {
  return (
    <Fragment>
      <header className='header'>
        <span className='left'>
          <Link to={'/'}>
            <UnorderedListOutlined />
            Volver al listado
          </Link>
        </span>
        <span className='left'>
          {id && (
            <Link to={'/article/' + id}>
              <FileOutlined />
              Volver al art&iacute;culo
            </Link>
          )}
        </span>
        <span className='right'>{id && <DeleteButton id={id} />}</span>
      </header>
    </Fragment>
  );
});
