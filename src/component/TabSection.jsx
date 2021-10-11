import React from 'react'
import styled from '@emotion/styled'
import Tab from '../component/Tab/Tab'

const TabSection = () => {
    return (
        <TabContainer>
            <Tab
                tabs={[
                    {
                    content: ' Content Two renders here! Lorem ipsum dolor sit amet',
                    title: 'Tab one'
                    },
                    {
                    content: ' Content oo renders here! Lorem ipsum dolor sit amet',
                    title: 'Tab Two'
                    },
                    {
                    content: ' Content ao renders here! Lorem ipsum dolor sit amet',
                    title: 'Tab Three'
                    }
                ]}
                />
        </TabContainer>
    )
}

const TabContainer = styled.div`
    min-height: 100%;
`

export default TabSection
