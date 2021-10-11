import styled from '@emotion/styled'
import React from 'react'
import { Select } from './Select/Select'

const SelectSection = () => {
    return (
        <SelectContainer>
            <h3>Select component</h3>
            <Select
                    argTypes={{
                        onChange: {
                            action: function noRefCheck(){}
                        }
                    }}
                    defaultValue="frenchy"
                    onBlur={function noRefCheck(){}}
                    onChange={function noRefCheck(){}}
                    options={[
                        {
                        label: 'Frenchy',
                        value: 'frenchy'
                        },
                        {
                        label: 'Coco',
                        value: 'coco'
                        },
                        {
                        label: 'Kit-Kat',
                        value: 'kitkat'
                        },
                        {
                        label: 'Lei',
                        value: 'lei'
                        },
                        {
                        label: 'Ankith',
                        value: 'ankith'
                        }
                    ]}
                    size="large"
                    />
        </SelectContainer>
    )
}

const SelectContainer = styled.div`

`
export default SelectSection
