import { Card } from '../../../components/card/card.component';
import { render } from '../../utility/test.util';
import { screen } from '@testing-library/react';

const renderComponent = async (props: any) => {
  return render(<Card {...props} onDelete={handleDelete} onUpdate={handlePut} />);
};
//TODO: Add 80% test coverage code tests
const handlePut = jest.fn;
const handleDelete = jest.fn;

describe('Card Component', () => {
  it('should render card component without errors', async () => {
    await renderComponent({ text: 'good test cases', type: 'good' });
    const goodcard = screen.getByTestId('retro-block-card-testid');
    expect(goodcard).toBeDefined();
  });

  it('should render card component with given text', async () => {
    await renderComponent({ text: 'good test cases', type: 'good' });
    const cardtext = screen.getByTestId('retro-block-card-text-testid');
    expect(cardtext.textContent).toBe('good test cases');
  });

  it('should render more menu option icon on card component', async () => {
    await renderComponent({ text: 'good test cases', type: 'good' });
    const moreoptionicon = screen.getByTestId('more-option-menu-testid');
    expect(moreoptionicon).toBeDefined();
  });

  it('should render user action block on card component', async () => {
    await renderComponent({ text: 'good test cases', type: 'good' });
    const useractionblock = screen.getByTestId('more-option-menu-testid');
    expect(useractionblock).toBeDefined();
  });

  //TODO:should render text box on card component when in edit mode
  it('should render text box on card component when in edit mode', async () => {});
});
