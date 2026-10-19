import CollaborationsOverview from "@/components/collaborations/CollaborationsOverview/CollaborationsOverview";
import CollaboratorsSection from "@/components/people/Collaborators/CollaboratorsSection";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  FREQUENT_COLLABORATORS_QUERY,
  INSTITUTIONAL_COLLABORATIONS_QUERY,
} from "@/sanity/lib/queries";

export const revalidate = 3600;

export default async function CollaborationsPage({ params }) {
  const { locale } = await params;
  let collaborations = [];
  let collaborators = [];

  try {
    const [institutionalData, collaboratorData] = await Promise.all([
      client.fetch(INSTITUTIONAL_COLLABORATIONS_QUERY, { locale }, { next: { revalidate: 3600 } }),
      client.fetch(FREQUENT_COLLABORATORS_QUERY, { locale }, { next: { revalidate: 3600 } }),
    ]);

    collaborations = institutionalData.map((item) => ({
      ...item,
      imageUrl: item.image
        ? urlFor(item.image.asset).width(1200).height(900).fit("max").url()
        : null,
      activeMembers: (item.activeMembers ?? [])
        .filter((member) => member?.membershipStatus === "current")
        .map((member) => ({
          ...member,
          imageUrl: member.photo
            ? urlFor(member.photo).width(160).height(160).fit("crop").url()
            : null,
        })),
    }));

    collaborators = collaboratorData.map((person) => ({
      ...person,
      image: person.photo
        ? urlFor(person.photo).width(900).height(760).fit("crop").url()
        : null,
    }));
  } catch (error) {
    console.error("Unable to load collaborations from Sanity", error);
  }

  return (
    <>
      <CollaborationsOverview items={collaborations} />
      <CollaboratorsSection items={collaborators} />
    </>
  );
}
