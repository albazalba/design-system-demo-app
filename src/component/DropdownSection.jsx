import React from 'react'
import styled from "@emotion/styled"
import { DropDown } from './Dropdown/DropDown'
import { CONSTANTS } from '../constants'

const DropdownSection = ({theme}) => {
    return (
        <DropDownContainer>
            <h3>Dropdown component</h3>
            <div style={{margin:"10px"}}>
                <DropDown
                    theme={theme}
                    buttonIcon="▾"
                    buttonName="Open"
                    buttonStyle={{
                        background: theme.primaryColor,
                        border: 'none',
                        color: 'white',
                        padding: '9px 15px'
                    }}
                    list={[
                        {
                        label: 'Frenchy',
                        onSelect: function noRefCheck(){}
                        },
                        {
                        label: 'Coco'
                        },
                        {
                        label: 'Kit-Kat'
                        },
                        {
                        label: 'Lei'
                        },
                        {
                        label: 'Holla'
                        }
                    ]}
                    menuListStyle={{}}
                    />
            </div>
        </DropDownContainer>
    )
}

const DropDownContainer = styled.div`
    height: 100%;

`

export default DropdownSection
