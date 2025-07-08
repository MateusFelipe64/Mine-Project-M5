import CardList from "@/components/CardList/page";
import { fetchAutocuidado } from "../../lib/api";
import AutocuidadoCard from "@/components/AutocuidadoCard/page";
export default async function AutocuidadoPage() {
  const data = await fetchAutocuidado();

  return (
    <CardList title="Autocuidado">
      {data.map((item: any) => (
        <AutocuidadoCard
          key={item._id}
          id={item._id}
          title={item.title}
          description={item.content}
        />
      ))}
    </CardList>
  );
}