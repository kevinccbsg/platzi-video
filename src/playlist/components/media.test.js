// importamos react para poder usar componentes
import React from 'react';
// importamos el metodo shallow para renderizar el componente
import { shallow } from 'enzyme';
// importamos el componente que queremos testear
import Media from './media';

// props se testing
const props = {
  title: 'title test',
};

const newProps = {
  title: 'new title test',
};

describe('Media', () => {
  it('should have an image', () => {
    // creamos un wrapper que tenga nuestro componente
    const wrapper = shallow(<Media {...props} />);
    // esperamos que ese wrapper que es nuestro componente tenga una imagen
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('should have title with value `title test`', () => {
    const wrapper = shallow(<Media {...props} />);
    // esperamos que ese wrapper que es nuestro componente tenga un h3 con el titulo
    expect(wrapper.find('h3.Media-title').text()).toEqual(props.title);
  });

  it('should have title with new value `new title test`', () => {
    const wrapper = shallow(<Media {...props} />);
    // modificamos las props con las nuevas
    wrapper.setProps(newProps);
    // esperamos que ese wrapper que es nuestro componente tenga un h3 con el titulo nuevo
    expect(wrapper.find('h3.Media-title').text()).toEqual(newProps.title);
  });
});
