import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

const uuid = uuidv4();

const Button: any = () => (
    <Link href="/[uuid]" as={`/${uuid}`}>
        <button className='m-10 w-64 h-32 bg-gray-300 rounded-2xl shadow-lg font-bold text-white'>UUIDを使用するボタン</button>
    </Link>
);

export const view = () => {
    return (
        <>
            <p>
                {Button}
            </p>
        </>
    )
}

export default Button;