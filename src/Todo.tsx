import { FC } from "react";
import { TodoType } from "./types/todo";


export const Todo:FC<Omit<TodoType,"id">> = (props) => {
    // Pickを使ってTodoTypeからuserId,title,completedの型定義のみ抜き出す記述
    // props: Pick<TodoType,"userId" | "title" | "completed">) => {
    // Pickと逆の書き方Omit(id以外の型定義を取得する記述)
    // props: Omit<TodoType,"id">) => {
    const {title,userId,completed = false} = props;
    const completeMark = completed ? "[完]": "[未]";
    return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>
}