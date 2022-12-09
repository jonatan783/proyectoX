import React, { useState, useEffect } from 'react'
import { DropdawnComponent } from '../components'

function DropdawnContainer({ options, optionClick }) {
    const [collapsed, setCollapsed] = useState(false)

    useEffect(() => {
        if (document.getElementById('in')) document.getElementById('in').focus()
    }, [collapsed]);

    const handleBlur = () => {
        setTimeout(function () {
            setCollapsed(false)
        }, 100);
    }
    const handleClick = () => setCollapsed(true)

    return (
        <DropdawnComponent
            collapsed={collapsed}
            options={options}
            handleClick={handleClick}
            handleBlur={handleBlur}
            optionClick={optionClick}
        />
    )
}

export default DropdawnContainer