import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

const uuid = uuidv4();

const Button = () => (
  <Link href="/items/[uuid]" as={`/items/${uuid}`}>
    <button className='text-white'>UUIDを使用するボタン</button>
  </Link>
);

export default Button;
