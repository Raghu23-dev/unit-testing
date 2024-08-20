import { render, screen } from "@testing-library/react"
import Skills from "./Skills"

describe("skills",()=>{
    const skills = ["HTML","CSS","JAVASCRIPT"]
    render(<Skills skills={skills}/>)
    const listElement = screen.getByRole("list")
    expect(listElement).toBeInTheDocument()
})