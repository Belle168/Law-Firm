import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Search } from '../../assets/icons/search.svg'
import { ReactComponent as Basket } from '../../assets/icons/basket.svg'
import { ReactComponent as Burger } from '../../assets/icons/burger.svg'
import { ReactComponent as Lady } from '../../assets/images/lady.svg'
import Background from '../../assets/images/background.jpg'
import Flex from '../UI/Flex'

export const Navbar = () => {
   return (
      <Wrapper>
         <Div>
            <h3>Legalide</h3>
         </Div>
         <Flex width="509px" height="195px">
            <Text>
               Help to reclaim <br /> your life and <br />
               freedom{' '}
            </Text>
         </Flex>

         <Items>
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
            <Flex gap="171px">
               <Flex gap="25px">
                  <Search />
                  <Basket />
               </Flex>
               <Flex>
                  <Burger />
               </Flex>
            </Flex>
         </Items>
         <LadyStyle>
            <Lady />
         </LadyStyle>
         <LowerText>
            We know how large objects will act, but things on a small scale.
         </LowerText>
         <Flex gap="20px">
            <Button1>Get Quote Now</Button1>
            <Button2>Learn More</Button2>
         </Flex>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   width: 100%;
   height: 800px;
   background-image: url(${Background});
   background-size: cover;
   background-position: center;
   background-attachment: fixed;
   min-height: ${`${window.innerHeight}px`};
   text-align: center;
`
const Div = styled.div`
   position: absolute;
   width: 104px;
   height: 32px;
   left: 12rem;
   top: 30px;
   font-family: 'Martel';
   font-style: normal;
   font-weight: 700;
   font-size: 24px;
   line-height: 32px;
   letter-spacing: 0.1px;
   color: #252b42;
`

const Items = styled.ul`
   position: relative;
   bottom: 10rem;
   left: 58rem;
   display: flex;
   justify-content: space-between;
   gap: 2rem;
   width: 100px;
   list-style-type: none;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 24px;
   text-align: center;
   letter-spacing: 0.2px;
   color: #737373;
`

const Text = styled.h1`
   position: relative;
   left: 196px;
   top: 240px;
   width: 509px;
   height: 195px;
   font-family: 'Martel';
   font-style: normal;
   font-weight: 900;
   font-size: 58px;
   line-height: 65px;
   letter-spacing: 0.2px;
   color: #252b42;
   flex: none;
   order: 0;
   flex-grow: 0;
   text-align: left;
`
const LadyStyle = styled.div`
   position: relative;
   left: 50rem;
   bottom: 100px;
   width: 565px;
   height: 681px;
`
const LowerText = styled.h4`
   position: absolute;
   left: 12rem;
   bottom: 166px;
   width: 376px;
   height: 60px;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 30px;
   letter-spacing: 0.2px;
   color: #737373;
   flex: none;
   order: 1;
   flex-grow: 0;
`
const Button1 = styled.button`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 15px 30px;
   gap: 10px;
   width: 182px;
   height: 48px;
   background: #784f33;
   border-radius: 37px;
   flex: none;
   order: 0;
   flex-grow: 0;
   color: #ffffff;
   position: absolute;
   left: 12.5rem;
   bottom: 80px;
`
const Button2 = styled.button`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 15px 30px;
   gap: 10px;
   width: 182px;
   height: 48px;
   background: #ffffff;
   border-radius: 37px;
   flex: none;
   order: 0;
   flex-grow: 0;
   color: #784f33;
   position: absolute;
   left: 25rem;
   bottom: 80px;
`
