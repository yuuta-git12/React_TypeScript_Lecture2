import { FC } from "react";
import { User } from "./types/user";

type Props = {
    user: User;
}

export const UserProfile: FC<Props> = (props) => {

    const { user } = props;

    return (
        <dl>
            <dt>名前</dt>
            <dd>{user.name}</dd>
            <dt>趣味</dt>
            {/* オプショナルチェイニング:配列が存在しない場合は処理を実行しない */}
            <dd>{user.hobbies?.join("/")}</dd>
        </dl>
    );
};