import PropTypes from 'prop-types';
import { UserDetails } from './components/UserDetails';
import { Title } from './components/Title';  // ✅ Componente con mayúscula
import { Book } from './components/Book';

export const HelloWorldApp = ({ user, id, title, book }) => {
    return (
        <>
            <Title title={title} />  {/* ✅ Usa el componente Title */}
            <UserDetails user={user} id={id} />
            <Book book={book} />  {/* ✅ 'Book' con mayúscula */}
        </>  
    );
}

HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    book: PropTypes.string  // ✅ Agrega book también
};

HelloWorldApp.defaultProps = {
    title: 'Hola Mundo por defecto',
    book: 'No hay libro',
};