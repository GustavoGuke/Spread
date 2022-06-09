import styled from "styled-components"
import { Tabs, TabList, Tab, TabPanel, } from "react-tabs"

export const ContaierTabs = styled(Tabs)`
font-size: 1em;
width: 100%;
`

export const ContaierTabList = styled(TabList)`

    list-style-type: none;
    padding: 8px;
    margin: 0;
    display: flex;
    gap: 40px;
`
ContaierTabList.TabsRole = 'TabList'

export const ContaierTab = styled(Tab)`
    border: 1px solid white;
    border-radius: 16px;
    padding: 8px;
    user-select: none;
    cursor: pointer;
    box-shadow: 0 0 1em black;

    &:focus {
        outline: none;
    }
    &.is-selected {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid #1e293b;

        box-shadow: 5px 5px 7px black;
    }
`
ContaierTabList.TabsRole = 'Tab'

export const ContaierTabPanel = styled(TabPanel)`
    display:  none;
    padding: 10px;
    margin-top:5px;
    margin-left: 5px;
    border: 1px solid white;
    border-radius: 10px;


    &.is-selected {
        display: block;
    }
`
ContaierTabList.TabsRole = 'TabPanel'

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 20px;
    gap: 20px;
    flex-wrap: wrap;
`