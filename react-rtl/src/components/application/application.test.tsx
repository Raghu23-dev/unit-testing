import { render, screen } from "@testing-library/react";
import Application from "./application";

describe('application', ()=>{
    test('renders correctly', ()=>{
        render(<Application/>)
        const nameElement = screen.getByRole('textbox')
        expect(nameElement).toBeInTheDocument()
    })

    test('check if button exists',()=>{
        render(<Application/>)
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()

    })
})