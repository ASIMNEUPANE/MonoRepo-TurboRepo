import Admin from '@repo/ui/admin'
import { Card } from '@repo/ui/card'
import { InputBox } from '@repo/ui/input-box'
import React from 'react'

function page() {
    return (
        <div>
            <Admin />
            <InputBox/>
        </div>
    )
}

export default page