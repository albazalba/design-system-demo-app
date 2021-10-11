import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Button } from './ButtonUpdated/Button1'
import {MdFileDownload} from 'react-icons/md'
import { useTheme } from '@emotion/react'

const InputSection = ({valueChange, downloadTxtFile}) => {
    const theme = useTheme();
    const [value, setValue] = useState(theme)
    return (
        <InputContainer>
            
            <div className="input-field">
                <label>Primary : </label>
                <input name="Primary-color" name="primaryColor" value={theme.primaryColor} onChange={valueChange}/><br/>
            </div>
            <div className="input-field">
                <label>Secondary : </label>
                <input name="Secondary-color" name="secondaryColor" value={theme.secondaryColor} onChange={valueChange}/><br/>
            </div>
            <div className="input-field">
                <label>Success : </label>
                <input name="Success" name="success" value={theme.success} onChange={valueChange}/><br/>
            </div>
            <div className="input-field">
                <label>Error : </label>
                <input name="Error" name="error" value={theme.error} onChange={valueChange} /><br/>
            </div>
            <div className="input-field">
                <label>Warning : </label>
                <input name="Warning" name="warning" value={theme.warning} onChange={valueChange} /><br/>
            </div>
            <div className="input-field">
                <label>Info : </label>
                <input name="info" value={theme.info} onChange={valueChange}/><br/>
            </div>
            <div className="download-button">
                <Button label="Export" endIcon={<MdFileDownload/>} onClick={downloadTxtFile} />
            </div>

        </InputContainer>
    )
}

const InputContainer = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    padding:20px;
    position:relative;
    .input-field{
        display: flex;
        margin: 10px;
        
    }
    input{
        border-top:none;
        border-left: none;
        border-right: none;
        height: 20px;
        margin-left: 10px;
        border-bottom: 1px solid grey;
        &::active{
            border:none;
        }
        &::focus{
            border:none;
        }
       
    }
    .download-button{
        position: fixed;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        bottom:20px;
        right:20px;
    }
`

export default InputSection
