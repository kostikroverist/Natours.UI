import React, { FC } from 'react'

type ButtonProps = {
    name: string,
}
const BaseButton: FC<ButtonProps> = ({ name }) => {
    return (
        <button className=" bg-background-button-form p-3 w-32 border rounded-3xl text-center duration-1175  hover:bg-black text-white">
            {name}
        </button>

    )
}

export default BaseButton
