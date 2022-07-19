import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Scales } from '../../assets/icons/icn-settings.svg'
import { ReactComponent as Icon } from '../../assets/icons/icn.svg'
import { ReactComponent as Accept } from '../../assets/icons/accept.svg'
import Flex from '../UI/Flex'

const PracticeAreas = () => {
   return (
      <Wrapper>
         <Title>Our Practice Areas</Title>
         <Paragraph>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
         </Paragraph>
         <Flex justify="center" gap="10rem" margin="80px">
            <ScalesContainer>
               <Scales />
               <span>Family Law</span>
            </ScalesContainer>
            <Business>
               <Icon />
               <span>Business Law</span>
            </Business>
            <Trust>
               <Accept />
               <span>Trust & Estates</span>
            </Trust>
         </Flex>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   width: 100%;
   height: 529px;
   margin-top: 100px;
   background: #ffffff;
`
const Title = styled.h2`
   margin: 0 auto;
   width: 374px;
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
`
const Paragraph = styled.p`
   width: 431px;
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
   margin: 0 auto;
`
const ScalesContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 30px 40px;
   gap: 10px;
   width: 325px;
   height: 147px;
   background: #f9f9f9;
   box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
   border-radius: 5px;
   flex: none;
   order: 0;
   flex-grow: 0;
`

const Business = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 30px 40px;
   gap: 10px;
   width: 325px;
   height: 147px;
   background: #295c7a;
   box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
   border-radius: 5px;
   flex: none;
   order: 0;
   flex-grow: 0;
`
const Trust = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 30px 40px;
   gap: 10px;
   width: 325px;
   height: 147px;
   background: #f9f9f9;
   box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
   border-radius: 5px;
   flex: none;
   order: 0;
   flex-grow: 0;
`
export default PracticeAreas
