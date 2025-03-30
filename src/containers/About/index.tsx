import Title from "../../components/Title"
import Paragraph from "../../components/Paragraph"
import { Githubsecao } from "./styles"

const About = () => (
    <section>
        <Title fontSize={16}>About me</Title>
        <Paragraph type="main">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam assumenda velit dolorem, possimus nemo ut officiis iste ducimus dolorum! Corporis perspiciatis mollitia magni nam eos ex consequuntur accusamus nobis.
        </Paragraph>
        <Githubsecao>
        <img src="https://github-readme-stats.vercel.app/api?username=lucasvitareli&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lucasvitareli&layout=compact&langs_count=7&theme=dracula"/>
        </Githubsecao>
    </section>
)

export default About 