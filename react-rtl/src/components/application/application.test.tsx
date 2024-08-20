import { render, screen } from "@testing-library/react";
import Application from "./application";

describe('application', ()=>{
    test('renders correctly', ()=>{
        render(<Application/>)
        const nameElement = screen.getByRole('textbox')
        expect(nameElement).toBeInTheDocument()

        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole('combobox')
        expect(jobLocationElement).toBeInTheDocument()
    })

        


})