/* 
Script necesario para realizar test con enzyme y la
versión 16 de React si utilizas otra versión puedes consultar
en el siguiente enlace:

https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16#upgrading-from-enzyme-2x-or-react--16

*/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });

// stub para ignorar cuando incluimos css con css loader en nuestros componentes

const stubCSS = '';

export default stubCSS;
