import ApoioCard from "@/components/ApoioCard/page";
import CardList from "@/components/CardList/page";
import { fetchApoio } from "@/lib/api";

export default async function ApoioPage() {
  const data = await fetchApoio();

  return (
    <CardList title="Apoio">
      {data.map((item: any) => (
        <ApoioCard
          key={item._id}
          id={item._id}
          title={item.title}
          description={item.content}
        />
      ))}
    </CardList>
  );
}