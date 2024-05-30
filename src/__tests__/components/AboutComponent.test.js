import { render, screen } from '@testing-library/react'
import AbouComponent from '../../components/common/AboutComponent'
import "@testing-library/jest-dom";
test('should load about component', () => {
    render(<AbouComponent />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

})