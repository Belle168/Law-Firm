import React from 'react'
import styled from 'styled-components'

export const PracticeAdvice = () => {
   return (
      <Wrapper>
         <Div margin="200px">
            <Title>Practice Advice</Title>
            <Paragraph>
               Problems trying to resolve the conflict between <br />
               the two major realms of Classical physics: Newtonian mechanics{' '}
            </Paragraph>
         </Div>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   width: 100%;
   height: 699px;
   background: #fafafa;
`
const Title = styled.h2`
   width: 312px;
   height: 50px;
   font-family: 'Martel';
   font-style: normal;
   font-weight: 700;
   font-size: 40px;
   line-height: 50px;
   letter-spacing: 0.2px;
   color: #252b42;
   flex: none;
   order: 0;
   flex-grow: 0;
   margin: 0 auto;
`
const Paragraph = styled.p`
   width: 461px;
   height: 40px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   text-align: center;
   letter-spacing: 0.2px;
   color: #737373;
   flex: none;
   order: 1;
   flex-grow: 0;
   margin-left: 38rem;
   padding: 13px;
`
const Div = styled.div`
   position: relative;
   top: 125px;
`
