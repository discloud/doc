import { redirect, RedirectType } from "next/navigation";

export default async function notFound(){
    return redirect(`/docs/discloud`, RedirectType.replace);
}