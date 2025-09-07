import { redirect, RedirectType } from "next/navigation";

export default async function notFound(props: LayoutProps<"/[lang]">){
    return redirect(`/docs`, RedirectType.replace);
}