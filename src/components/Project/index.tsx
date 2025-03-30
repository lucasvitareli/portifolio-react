import Paragraph from "../Paragraph"
import Title from "../Title"
import { Card, LinkButton } from "./styles"



const Project = () => (
    <Card>
        <Title>To-Do List</Title>
        <Paragraph type="secondary">
            This is a "To-Do List" application built with VueJS.
        </Paragraph>
        <LinkButton>Visit </LinkButton>
    </Card>
)

export default Project