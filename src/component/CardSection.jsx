import React from 'react'
import styled from '@emotion/styled'
import { Card, CardHeader, CardBody, CardAction, CardMedia } from './Card/Card'
import { Button } from './ButtonUpdated/Button1'
import {FiMoreVertical} from 'react-icons/fi'

const CardSection = () => {
    return (
        <CardContainer>
        <h2>Card component</h2>
        <div className="grid-container">
        <div>
            <Card isElavated>
            <CardMedia image="https://domf5oio6qrcr.cloudfront.net/medialibrary/6000/8c38e37d-e8b9-48dd-a9a8-65083a6115e5.jpg" title = "image" />
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <CardHeader title="Title" subheader="Subheader" style={{fontSize:"50px"}}></CardHeader>
                    <Button icon={<FiMoreVertical />} accent="secondary" variant="ghost"/> 
                </div>
                <CardBody>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
                    possimus provident iste! Odit ratione dignissimos reiciendis dolorem
                    aperiam mollitia omnis unde ullam alias, necessitatibus blanditiis eos
                    tempore nulla magni nesciunt?
                </CardBody>
                <CardAction>
                    <Button accent="primary"  size="large" label="Next" style={{marginRight:"10px"}} onClick = {() => console.log("hi")} /> 
                    <Button variant="light" label="Continue" size="large" />
                </CardAction>
            </Card>
        </div>
        <div>
            <Card isElavated> 
            <CardMedia image="https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?k=6&m=1220017909&s=170667a&w=0&h=Zy_NqTbEluSW0T667IHW7DVlpQih70V45k-rgeFt6Oo=" title = "image" />
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <CardHeader title="Title" subheader="Subheader" style={{fontSize:"50px"}}></CardHeader>
                    <Button icon={<FiMoreVertical />} accent="secondary" variant="ghost"/> 
                </div>
                <CardBody>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
                    possimus provident iste! Odit ratione dignissimos reiciendis dolorem
                    aperiam mollitia omnis unde ullam alias, necessitatibus blanditiis eos
                    tempore nulla magni nesciunt?
                </CardBody>
                <CardAction>
                    <Button accent="primary"  size="large" label="Next" style={{marginRight:"10px"}} onClick = {() => console.log("hi")} /> 
                    <Button variant="light" label="Continue" size="large" />
                </CardAction>
            </Card>
        </div>
        </div>
            
        </CardContainer>
    )
}

const CardContainer = styled.div`
    width: 98%;
    .grid-container{
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 10px;
    }
`

export default CardSection
