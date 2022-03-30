import styled from 'styled-components';

export const Box = styled.div`
padding: 5px 1px;
background: rgb(28, 27, 27);
width: 100%;
height: fit-content;
align-items: center;


@media (max-width: 1000px) {
	padding: 10px 5px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1500px;
	margin: 20px;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 5px;
`;

export const Row = styled.div`
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr;
grid-gap: 60px;
padding: 0 36px;
display: flex;
justify-content: space-around;

@media (max-width: 1000px) {
	display: grid;
	grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));}`;

export const FooterLink = styled.a`
color: #ffe6e6;
margin-bottom: 10px;
font-size: 15px;
text-decoration: none;
// color: #606060;
`;

export const FooterText = styled.p`
color: #ffe6e6;
padding: 0px;
margin: 1px;
font-size: 15px;
text-decoration: none;
// color: #606060;
`;

export const Heading = styled.p`
font-size: 20px;
color: #fff;
margin-bottom: 40px;
font-weight: 10;
`;

export const FooterIconRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`