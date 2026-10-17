import PublicationsCatalog from "@/components/publications/PublicationsCatalog/PublicationsCatalog";
import { getInspirePublications } from "@/lib/inspirePublications";
import { client } from "@/sanity/lib/client";
import { PUBLICATION_AUTHORS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 21600;

export default async function PublicationsPage() {
  let papers = [];
  let loadError = false;

  try {
    const people = await client.fetch(
      PUBLICATION_AUTHORS_QUERY,
      {},
      { next: { revalidate: 3600 } }
    );
    papers = await getInspirePublications(
      people.map((person) => person.inspireAuthorId)
    );
  } catch (error) {
    console.error("Unable to load publications from INSPIRE", error);
    loadError = true;
  }

  return <PublicationsCatalog papers={papers} loadError={loadError} />;
}
