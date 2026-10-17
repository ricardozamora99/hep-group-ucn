import { redirect } from "next/navigation";

export default async function AboutGroupPage({ params }) {
  const { locale } = await params;
  redirect(`/${locale}#about-preview`);
}
