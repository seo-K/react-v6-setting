//react
import { useEffect, useState, useRef } from "react";
import { Link,useNavigate, useLocation  } from "react-router-dom";

//css
import styled from "styled-components"


export default function About() {
    
    return (
        <Container>
            <p>This is AboutPage</p>
        </Container>
    );
  }

const Container = styled.div`
    position: relative;
    width: 100%;
    min-height: 100%;;

    display: flex;

    & p {
        margin: auto;

        font-size: 30px;
    }
`
