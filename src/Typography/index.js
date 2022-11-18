import React from 'react'
import styled from 'styled-components'

const Typography = ({
    variant,
    align = 'center',
    color = 'black',
    inLine = 'block',
    children,
}) => {
    let Typography

    switch (variant) {
        case 'h0':
            Typography = styled.h1`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 64px;
                font-weight: 700;
                color: ${color};
                display: ${inLine};
                margin: 0px;
            `
            break
        case 'h1':
            Typography = styled.h1`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 32px;
                font-weight: 700;
                color: ${color};
                display: ${inLine};
                margin: 0px;
            `
            break
        case 'h2':
            Typography = styled.h2`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 26px;
                font-weight: 600;
                color: ${color};
                display: ${inLine};
                margin: 0px;
            `
            break
        case 'h3':
            Typography = styled.h3`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 22px;
                font-weight: 600;
                color: ${color};
                display: ${inLine};
                margin: 0px;
            `
            break
        case 'h4':
            Typography = styled.h4`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 20px;
                font-weight: 600;
                color: ${color};
                display: ${inLine};
                margin: 0px;
            `
            break
        case 'h5':
            Typography = styled.h5`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 18px;
                font-weight: 500;
                color: ${color};
                display: ${inLine};
                margin: 0px;
            `
            break
        case 'h6':
            Typography = styled.h6`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 16px;
                font-weight: 500;
                color: ${color};
                display: ${inLine};
                margin: 0px;
            `
            break
        case 'p1':
            Typography = styled.p`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 16px;
                font-weight: 400;
                color: ${color};
                display: ${inLine};
                margin: 0px;
            `
            break
        case 'p2':
            Typography = styled.p`
                text-align: ${align};
                font-family: Avenir Next;
                font-size: 12px;
                font-weight: 300;
                color: ${color};
                display: ${inLine};
                margin: 0px;
            `
            break
    }

    return <Typography>{children}</Typography>
}

export default Typography
