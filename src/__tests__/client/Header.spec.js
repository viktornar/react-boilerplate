import { renderComponent, expect } from '../helper';
import Header from '../../client/components/Header';

describe('Header', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Header, { title: 'Title' });
  });

  it('has the correct title', () => {
    expect(component).to.contain('Title');
  });
});
