import { FC } from "react";

type Props = {
    color : string;
    fontSize : string;
}

// 関数コンポーネントの型指定の書き方
export const Text: FC<Props> = (props) => {
    const {color, fontSize} = props;
    return <p style={{color, fontSize}}>テキストです</p>
}