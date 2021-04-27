import React from "react"
import styled from 'styled-components'

const Home = () =>{
	return(

			<div>
				<Title> Gatsbyjs with styled-components </Title>

			</div>
		)
}



const Title = styled.h1`
  font-weight: 100;
  font-size: 30px;
  text-align: center;
  color: purple;
  font-family: verdana;
  text-transform: uppercase;
`;








export default Home