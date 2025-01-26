type TodoType = {
    userId: number;
    title: string;
    // completedは必須ではない(オプションのプロップス)
    completed?: boolean;
};

export const Todo = (props: TodoType) => {
    const {title,userId,completed = false} = props;
    const completeMark = completed ? "[完]": "[未]";
    return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>
}