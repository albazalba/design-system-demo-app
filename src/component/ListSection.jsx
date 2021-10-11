import React from 'react'
import styled from '@emotion/styled'
import { List, ListItem, ListItemText, ListItemIcon } from './List/List'
import {AiFillHome, AiFillSetting} from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'
import {BiMessageAltDetail} from 'react-icons/bi'

const ListSection = () => {
    return (
        <ListContainer>
            <h3>List component</h3>
            <h4>Vertical list</h4>
            <List lists={[
                {
                    hoverEffect: true,
                    icon: <AiFillHome />,
                    primaryText: 'Buttons',
                    secondaryText: 'secondary text',
                    link: '/buttons'
                },
                {
                    disabled: true,
                    hoverEffect: true,
                    icon: <MdAccountCircle />,
                    primaryText: 'Account',
                    secondaryText: 'secondary text'
                },
                {
                    hoverEffect: true,
                    icon: <AiFillSetting />,
                    primaryText: 'Settings',
                    secondaryText: 'secondary text'
                },
                {
                    hoverEffect: true,
                    icon: <BiMessageAltDetail />,
                    primaryText: 'Support',
                    secondaryText: 'secondary text'
                }
                ]}
                alignment="horizontal"
            />
        <h4>horizontal list</h4>
        <List lists={[
                {
                    hoverEffect: true,
                    icon: <AiFillHome />,
                    primaryText: 'Buttons',
                    secondaryText: 'secondary text',
                },
                {
                    disabled: true,
                    hoverEffect: true,
                    icon: <MdAccountCircle />,
                    primaryText: 'Account',
                    secondaryText: 'secondary text'
                },
                {
                    hoverEffect: true,
                    icon: <AiFillSetting />,
                    primaryText: 'Settings',
                    secondaryText: 'secondary text'
                },
                {
                    hoverEffect: true,
                    icon: <BiMessageAltDetail />,
                    primaryText: 'Support',
                    secondaryText: 'secondary text'
                }
                ]}
                alignment="vertical"
            />
            </ListContainer>

    )
}

const ListContainer = styled.div`
    width: 98%;
`

export default ListSection
