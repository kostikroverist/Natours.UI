import { FC } from 'react'
import { AiOutlineStar } from 'react-icons/ai';


interface Props {
    count: number;
}
const CreateRating: FC<Props> = ({ count }) => {
    const elements = [];
    for (let i = 0; i < count; i++) {
        elements.push(<div key={i}>            <AiOutlineStar className="w-6 fill-green-400 h-6" />
        </div>);
    }
    return (
        <div className="flex">
            {elements}
        </div>
    )
}

export default CreateRating
