import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import {List, ListItem, ListItemIcon, ListItemText} from '../component/List/List'
import {Button} from '../component/ButtonUpdated/Button1'
import {Card, CardMedia, CardActions, CardBody, CardHeader } from '../component/Card/Card'
import ButtonSection from '../component/ButtonSection'
import ListSection from '../component/ListSection'
import CardSection from '../component/CardSection'
import TabSection from '../component/TabSection'
import {Switch as Toggle} from '../component/ToggleSwitch/ToggleSwitch'
import InputSection from '../component/InputSection'
import Tab from '../component/Tab/Tab'
import { CONSTANTS, BackstageTheme, CoreTheme, CustomTheme } from '../constants'
import { ThemeProvider } from '@emotion/react';
import {AiFillHome, AiFillSetting} from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'
import {BiMessageAltDetail} from 'react-icons/bi'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import DropdownSection from '../component/DropdownSection'
import SelectSection from '../component/SelectSection'


const Home = () => {
    const [nightMode, setNightMode] = useState(false)
    const [theme, setTheme] = useState(CONSTANTS)
    const themeFile = JSON.stringify(theme)
    
    const downloadTxtFile = (event) => {
        event.preventDefault()
        const element = document.createElement("a");
        const file = new Blob([themeFile], {type:'application/json'});
        element.href = URL.createObjectURL(file);
        element.download = "Theme.json";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      }

    const onChange = () => {
        setNightMode(!nightMode)
        console.log("nightMode")
    }

    const backstageThemeSelect = () => {
        setTheme(BackstageTheme)
        console.log("backstage");
    }

    const baseThemeSelect = () => {
        setTheme(CONSTANTS)
        console.log("default");
    }

    const valueChange = (e) => {   
        setTheme(prevState => ({ 
            ...prevState,
            [e.target.name]: e.target.value,
          }));
    }

    useEffect(() => {
        console.log(theme);
    }, [theme])

    return (
        <ThemeProvider theme={theme}>
            <Page>
                <div className="pages">
                    <div className="component-container">
                    <div className="nav-bar">
                    <List alignment="horizontal" lists={[
                        {
                            link:"/buttons",
                            activeStyle:{background:"gray", color:"white"},
                            hoverEffect: true,
                            primaryText: 'Buttons',
                        },
                        {
                            link:"/list",
                            activeStyle:{background:"gray", color:"white"},
                            hoverEffect: true,
                            primaryText: 'List',
                        },
                        {
                            link:"/card",
                            activeStyle:{background:"gray", color:"white"},
                            hoverEffect: true,
                            primaryText: 'Card',
                        },
                        {
                            link:"/tab",
                            activeStyle:{background:"gray", color:"white"},
                            hoverEffect: true,
                            primaryText: 'Tab',
                        },
                        {
                            link:"/dropdown",
                            activeStyle:{background:"gray", color:"white"},
                            hoverEffect: true,
                            primaryText: "Dropdown"
                        },
                        {
                            link:"/select",
                            activeStyle:{background:"gray", color:"white"},
                            hoverEffect: true,
                            primaryText: "Select"
                        }
                        ]}
                    />
                    <Toggle label="DarkMode" onChange={()=>{setNightMode(!nightMode)}}/>
                        </div>
                    <div className="button-container" style={nightMode? {backgroundColor:"#282828", color:"#F5F5F5"} : {backgroundColor:"white", color:"black"}}>
                    <Switch>
                            <Route path="/buttons">
                                <ButtonSection theme={theme}/>
                            </Route>
                            <Route path="/list">
                                <ListSection />
                            </Route>
                            <Route path="/card">
                                <CardSection />
                            </Route>
                            <Route path="/tab">
                                <TabSection />
                            </Route>
                            <Route path="/dropdown">
                                <DropdownSection theme={theme} />
                            </Route>
                            <Route path="/select">
                                <SelectSection />
                            </Route>
                    </Switch>
                    </div>
                    </div>
                    <div className="config-container">
                        <div className="nav-bar">
                        <List alignment="horizontal" style={{color: "white"}} lists={[
                        {
                            hoverEffect: true,
                            primaryText: 'Default theme',
                            onClick: ()=>setTheme(CONSTANTS),
                            style: {color:"white"}
                        },
                        {
                            hoverEffect: true,
                            primaryText: 'Backstage theme',
                            onClick: ()=> setTheme(BackstageTheme),
                            style: {color:"white"}
                        },
                        {
                            hoverEffect: true,
                            primaryText: 'Core theme',
                            onClick: ()=> setTheme(CoreTheme),
                            style: {color:"white"}
                        },
                        {
                            hoverEffect: true,
                            primaryText: "Custom theme",
                            onClick: ()=> setTheme(CustomTheme),
                            style: {color:"white"}
                        },
                        ]}
                    />
                            {/* <List alignment="horizontal" style={{color:"white"}}>
                                <ListItem hoverEffect style={{justifyContent:"center"}} onClick={() => setTheme(CONSTANTS)}>
                                    <ListItemText primary="Default Theme"></ListItemText>
                                </ListItem>
                                <ListItem hoverEffect style={{justifyContent:"center"}} onClick={backstageThemeSelect}>
                                    <ListItemText primary="Backstage Theme"></ListItemText>
                                </ListItem>
                                <ListItem hoverEffect style={{justifyContent:"center"}} onClick={() => setTheme(CoreTheme)}>
                                    <ListItemText primary="Core Theme"></ListItemText>
                                </ListItem>
                                <ListItem hoverEffect style={{justifyContent:"center"}}>
                                    <ListItemText primary="Microsoft Theme"></ListItemText>
                                </ListItem>
                                <ListItem hoverEffect style={{justifyContent:"center"}} onClick={() => setTheme(CustomTheme)}>
                                    <ListItemText primary="Custom Theme"></ListItemText>
                                </ListItem>
                            </List> */}
                        </div> 
                        <div className="configs">
                            <InputSection valueChange={valueChange} downloadTxtFile={downloadTxtFile} />
                        </div>
                    </div>
                </div>
            </Page>
        </ThemeProvider>
    )
}

const Page = styled.div`
    min-height: 100%;
    min-width: 100%;
    background-color: #f5f5f5;
    .pages{
        display: flex;
        justify-content: space-around;
        height: 100vh;
        width: 100%;
        overflow-y: hidden;
        /* padding-top : 150px; */
        .component-container{
            width: 49vw;
            min-height: 100vh;
            background-color: white;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            /* padding: 10px; */
            background-color: #f5f5f5;
            overflow-y: auto;
            /* border: 1px solid grey; */
            .nav-bar{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
                font-weight: 500;
                background-color: white;
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                overflow-x: auto;
            }
            .button-container{
                background-color: ${(props) => props.nightMode ? "black" : "white"};
                margin-top: 6px;
                /* width: 100%; */
                padding: 10px;
            }
            ::-webkit-scrollbar {
                display: none;
                }
        }
        .config-container{
            width: 49vw;
            height: 100vh;
            background-color: #f5f5f5;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            position: relative;
            overflow-y: auto;
            overflow-x: hidden;
            .nav-bar{
                padding: 20px;
                background-color: #5a5a5a;
                font-weight: 500;
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                color: white;
            }
            .configs{
                background-color: white;
                /* height: 88vh; */
                /* width: 100%; */
                /* top: 0; */
                /* bottom: 0; */
                margin-top: 8px;
                position: absolute;
                top: 75px;
                bottom: 0;
                right: 0;
                left: 0;
            }
            ::-webkit-scrollbar {
                display: none;
                }
            
        }

    }   
`

export default Home
