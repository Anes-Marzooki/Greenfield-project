import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
border: 1;
background-color: black;
color: white;
border-radius: 4px;
box-shadow: 0px 0px 8px 2px rbga(15, 15, 15, 0.2);
`;

export default function Form (props) {
	 return <FormWrapper>{props.children}</FormWrapper>;
}