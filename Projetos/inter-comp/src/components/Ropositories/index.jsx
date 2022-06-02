import React from 'react'
import * as S from './styled'

export default function Repositories() {
    return (
        <>
            <S.ContaierTabs
                selectedTabClassName='is-selected'
                selectedTabPanelClassName='is-selected'
            >
                <S.ContaierTabList>
                    <S.ContaierTab>Repositories</S.ContaierTab>
                    <S.ContaierTab>Starred</S.ContaierTab>
                </S.ContaierTabList>

                    <S.ContaierTabPanel>Panel Repositories</S.ContaierTabPanel>
                    <S.ContaierTabPanel>Panel Starred</S.ContaierTabPanel>
            </S.ContaierTabs>
        </>
    )
}
