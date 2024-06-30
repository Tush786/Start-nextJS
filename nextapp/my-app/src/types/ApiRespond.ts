import { Message } from "@/model/user";

export interface ApiRespond{
    success:boolean;
    message:string;
    isAccesptingMessages?:boolean;
    messages?:Array<Message>
}