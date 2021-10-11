import {Button} from './ButtonUpdated/Button1'
import styled from '@emotion/styled'
import {AiFillHome, AiFillSetting} from 'react-icons/ai'


const ButtonSection = () => {
    return (
        <ButtonContainer>
        <h3>Button Component</h3>
        <h4>Solid variants variants</h4>
        <div className="categories">
            <Button label="primary"  style={{margin:"5px"}} />
            <Button label="Secondary"  accent="secondary" style={{margin:"5px"}} />
            <Button label="Success" accent="success" style={{margin:"5px"}}  />
            <Button label="Error" accent="error" style={{margin:"5px"}} />
            <Button label="Danger" accent="warning" style={{margin:"5px"}}/>
            <Button label="Link" accent="info" style={{margin:"5px"}} />
            <Button isLoading label="Loading" style={{margin:"5px"}} />
        </div> 
        <h4>Light variants</h4>
        <div className="categories">
            <Button label="primary" variant="light" style={{margin:"5px"}} />
            <Button label="Secondary" accent="secondary" variant="light" style={{margin:"5px"}} />
            <Button label="Success" accent="success" variant="light" style={{margin:"5px"}} />
            <Button label="Error" accent="error" variant="light" style={{margin:"5px"}} />
            <Button label="Danger" accent="warning" variant="light" style={{margin:"5px"}}/>
            <Button label="Link" accent="info" variant="light" style={{margin:"5px"}} />
            <Button isLoading label="Loading"  variant="light" style={{margin:"5px"}} />
        </div>
        <h4>Hallow variants</h4>
        <div className="categories">
            <Button label="primary" variant="hallow" style={{margin:"5px"}} />
            <Button label="Secondary" accent="secondary" variant="hallow" style={{margin:"5px"}} />
            <Button label="Success" accent="success" variant="hallow" style={{margin:"5px"}} />
            <Button label="Error" accent="error" variant="hallow" style={{margin:"5px"}} />
            <Button label="Danger" accent="warning" variant="hallow" style={{margin:"5px"}}/>
            <Button label="Link" accent="info" variant="hallow" style={{margin:"5px"}} />
            <Button isLoading label="Loading" variant="hallow" style={{margin:"5px"}} />

        </div>
        <h4>Ghost variants</h4>
        <div className="categories">
            <Button label="primary" variant="ghost" style={{margin:"5px"}} />
            <Button label="Secondary" accent="secondary" variant="ghost" style={{margin:"5px"}} />
            <Button label="Success" accent="success" variant="ghost" style={{margin:"5px"}} />
            <Button label="Error" accent="error" variant="ghost" style={{margin:"5px"}} />
            <Button label="Danger" accent="warning" variant="ghost" style={{margin:"5px"}}/>
            <Button label="Link" accent="info" variant="ghost" style={{margin:"5px"}} />
            <Button isLoading label="Loading" variant="ghost" style={{margin:"5px"}} />
        </div>  
        <h4>Sizes</h4>
        <div className="categories">
            <Button label="primary" size="small" style={{margin:"5px", maxHeight:"30px"}} />
            <Button label="primary" size="large" style={{margin:"5px", maxHeight:"40px"}} />
            <Button label="primary" size="xtraLarge" style={{margin:"5px"}} />
        </div>  
        <h4>Button with icon</h4>
        <div className="categories">
            <Button startIcon={<AiFillHome />} label="Home" style={{margin:"5px"}} />
            <Button label="Home" endIcon={<AiFillHome />} style={{margin:"5px"}} />
            <Button icon={<AiFillHome />}  style={{margin:"5px"}}/>
        </div>  
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
width: 98%;
display: flex;
flex-flow: column;
justify-content: space-around;
    .categories{
        display: flex; 
        flex-wrap: wrap;
        justify-content: center;
        align-items : center ;

        
    }
`

export default ButtonSection
