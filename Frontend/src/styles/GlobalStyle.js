import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root{
        --primary-color: #222260;
        --primary-color2: #222260cc;
        --primary-color3: #222260cc34;
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-red: #ff0000b5;
        --color-delete: #FF0000;

        --color-white-light: #fcf6f9c6;
        --color-white: #FFFFFF;
        --color-shadow:#00000029;

    }

    body{
        font-family: 'Nunito', sans-serif;
        font-size: clamp(1rem, 1.5vw + .001rem, 1.2rem);
        overflow: hidden;
        color: rgba(34, 34, 96, .6);
    }
    html{
        font-size: 14px;
    }

    h1, h2, h3, h4, h5, h6{
    color: var(--primary-color);
}
    .error{
        color: #FF0000;
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }

    
`;

