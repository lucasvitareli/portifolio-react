import Title from "../../components/Title";
import Avatar from "../Avatar";

import { Description, Username, ThemeButton, SidebarContainer } from "./styles";

const Sidebar = () => (
    <aside>
        <SidebarContainer>
        <Avatar />
        <Title fontSize={18}> Lucas Vitareli </Title>
        <Username type="main" font-size={16}>
            @lucasvitareli
        </Username>
        <Description type="secondary" font-size={16}>
            Front-End Developer
        </Description>
        <ThemeButton>Change Theme</ThemeButton>
        </SidebarContainer>
    </aside>
)

export default Sidebar;