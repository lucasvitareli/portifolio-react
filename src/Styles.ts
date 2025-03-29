import { createGlobalStyle } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, sans-serif;
        background-color:rgb(225, 226, 222);
        color: #333;
    }

    h1, h2, h3, h4, h5, h6 {
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 15px;
    }
`;

export default EstiloGlobal;