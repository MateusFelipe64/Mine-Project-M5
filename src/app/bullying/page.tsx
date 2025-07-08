// Update the import path below if the actual path is different
import CardList from "@/components/CardList/page";
import { fetchBullying } from "../../lib/api"; // Use @ para importar da raiz src
import BullyingCard from "@/components/BullyingCard/page";


export default async function BullyingPage() {
  const data = await fetchBullying();

  return (
    <CardList title="Bullying">
      {data.map((item: any) => (
        <BullyingCard
          key={item._id}
          id={item._id}
          title={item.title}
          description={item.content}
        />
      ))}
    </CardList>
  );
}