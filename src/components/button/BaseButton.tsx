import React, { FC } from 'react'

type ButtonProps = {
    name: string
}
const BaseButton: FC<ButtonProps> = ({ name }) => {
    return (
        <div className=" mt-5">
            <button className=" bg-background-button-form p-3 w-32 border rounded-3xl text-center text-white ">
                {name}
            </button>
        </div>

    )
}

export default BaseButton
