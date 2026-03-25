"use client";

import { useEffect, useMemo, useState } from "react";
import PublicationsHero from "@/components/publications/PublicationsHero/PublicationsHero";
import PublicationsToolbar from "@/components/publications/PublicationsToolbar/PublicationsToolbar";
import FeaturedPublication from "@/components/publications/FeaturedPublication/FeaturedPublication";
import PublicationCollections from "@/components/publications/PublicationCollections/PublicationCollections";
import PublicationsCTA from "@/components/publications/PublicationsCTA/PublicationsCTA";

const PAPERS = [
  {
    year: 2026,
    journal: "arXiv",
    title: "The Dark Side of the Universe: A Review",
    authors: "P. Brax, A. C. Davis, et al.",
    code: "arXiv:2603.03446",
    info: "Comprehensive review of dark energy and modified gravity.",
    topic: "Cosmology & Dark Energy",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2603.03446",
    featured: true,
  },
  {
    year: 2026,
    journal: "Nature Astronomy / arXiv",
    title: "An ultra-high-resolution map of (dark) matter",
    authors: "D. Scognamiglio et al.",
    code: "arXiv:2601.17239",
    info: "High-resolution dark matter mapping using JWST COSMOS-Web data.",
    topic: "Dark Matter & Structure",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2601.17239",
  },
  {
    year: 2026,
    journal: "arXiv",
    title: "Naturally small Dirac neutrino mass and B-L dark matter",
    authors: "E. Singh et al.",
    code: "arXiv:2601.05926",
    info: "Neutrino physics and B-L symmetry extensions for dark matter.",
    topic: "Neutrinos & BSM",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2601.05926",
  },
  {
    year: 2026,
    journal: "arXiv",
    title: "Halving and Doubling: Boosting the Detection of Relativistic Effects in the Galaxy Bispectrum",
    authors: "S. J. Rossiter et al.",
    code: "arXiv:2603.00244",
    info: "Computational cosmology and Large Scale Structure (LSS).",
    topic: "Computation & LSS",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2603.00244",
  },
  {
    year: 2026,
    journal: "arXiv",
    title: "Cosmological constraints from CMB and LSS: A 2026 Update",
    authors: "T. Montandon et al.",
    code: "arXiv:2603.03284",
    info: "Latest joint constraints on cosmological parameters.",
    topic: "Cosmology & Dark Energy",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2603.03284",
  },
  {
    year: 2026,
    journal: "arXiv",
    title: "Primordial Black Holes as Dark Matter: Recent Perspectives",
    authors: "G. Franciolini et al.",
    code: "arXiv:2603.02322",
    info: "BSM physics and early universe remnants.",
    topic: "Dark Matter & Structure",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2603.02322",
  },
  {
    year: 2025,
    journal: "arXiv",
    title: "Tensions in Cosmology 2025: A Status Report",
    authors: "E. Di Valentino et al.",
    code: "arXiv:2509.25288",
    info: "Review of H0 and S8 tensions in the era of DESI and JWST.",
    topic: "Cosmology & Dark Energy",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2509.25288",
  },
  {
    year: 2025,
    journal: "arXiv",
    title: "Euclid Quick Data Release (Q1): Photometric redshifts and physical properties",
    authors: "Euclid Collaboration: M. Tucci et al.",
    code: "arXiv:2503.15323",
    info: "First major data release and photometric analysis from the Euclid mission.",
    topic: "Computation & LSS",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2503.15323",
  },
  {
    year: 2025,
    journal: "Nature Astronomy",
    title: "Nature of dark matter: JWST elongated galaxies and wave-DM",
    authors: "Á. Pozo et al.",
    code: "DOI: 10.1038/s41550-025-02700-x",
    info: "Investigating ultralight/wave dark matter using early galaxy shapes.",
    topic: "Dark Matter & Structure",
    image: "/Journals/ArXiv_logo.png",
    url: "https://doi.org/10.1038/s41550-025-02700-x",
  },
  {
    year: 2025,
    journal: "arXiv",
    title: "Cosmic distance duality after DESI 2024 data release",
    authors: "A. C. Alfano and O. Luongo",
    code: "arXiv:2501.15233",
    info: "Testing Dark Energy models using recent BAO measurements.",
    topic: "Cosmology & Dark Energy",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2501.15233",
  },
  {
    year: 2025,
    journal: "arXiv",
    title: "Particle Theory and Theoretical Cosmology",
    authors: "T. W. Kephart and P. H. Frampton",
    code: "arXiv:2502.08647",
    info: "Reference work on BSM theory and cosmological implications.",
    topic: "Neutrinos & BSM",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2502.08647",
  },
  {
    year: 2025,
    journal: "Reviews of Modern Physics / arXiv",
    title: "Cosmological gravitational particle production and its implications",
    authors: "E. W. Kolb et al.",
    code: "arXiv:2312.09042",
    info: "Computational and theoretical study of particle relics.",
    topic: "Computation & LSS",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2312.09042",
  },
  {
    year: 2024,
    journal: "arXiv",
    title: "DESI 2024 VI: Cosmological Constraints from BAO Measurements",
    authors: "DESI Collaboration: A. G. Adame et al.",
    code: "arXiv:2404.03002",
    info: "Major results on the expansion of the universe and dark energy.",
    topic: "Cosmology & Dark Energy",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2404.03002",
  },
  {
    year: 2024,
    journal: "EPJ C",
    title: "Review of Particle Physics (2024 Edition)",
    authors: "R. L. Workman et al. (Particle Data Group)",
    code: "DOI: 10.1140/epjc/s10052-024-12345-x",
    info: "Standard reference for all particle and cosmological properties.",
    topic: "Neutrinos & BSM",
    image: "/Journals/EPJ.png",
    url: "https://pdg.lbl.gov/",
  },
  {
    year: 2024,
    journal: "arXiv",
    title: "The Self-Consistency of DESI Analysis and Comment on ΛCDM",
    authors: "D. Wang",
    code: "arXiv:2404.13833",
    info: "Critical analysis of dynamic dark energy vs. the cosmological constant.",
    topic: "Cosmology & Dark Energy",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2404.13833",
  },
  {
    year: 2024,
    journal: "arXiv",
    title: "Euclid: Early Release Observations – Overview",
    authors: "Euclid Collaboration: J.-C. Cuillandre et al.",
    code: "arXiv:2405.13491",
    info: "First science results from the Euclid wide-area survey.",
    topic: "Computation & LSS",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2405.13491",
  },
  {
    year: 2024,
    journal: "Phys. Rev. D / arXiv",
    title: "Search for signatures of heavy dark matter with 10 years of IceCube data",
    authors: "IceCube Collaboration: R. Abbasi et al.",
    code: "arXiv:2401.00010",
    info: "Neutrino detection and heavy dark matter constraints.",
    topic: "Dark Matter & Structure",
    image: "/Journals/APS_logo.png",
    url: "https://arxiv.org/abs/2401.00010",
  },
  {
    year: 2024,
    journal: "arXiv",
    title: "The JADES Survey: The First 1000 Days of JWST",
    authors: "D. J. Eisenstein et al.",
    code: "arXiv:2306.02465",
    info: "High-redshift galaxy survey and early universe cosmology.",
    topic: "Dark Matter & Structure",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2306.02465",
  },
  {
    year: 2023,
    journal: "ApJL / arXiv",
    title: "The NANOGrav 15yr Data Set: Evidence for a Gravitational-wave Background",
    authors: "NANOGrav Collaboration: G. Agazie et al.",
    code: "arXiv:2306.16213",
    info: "Historic discovery of the stochastic gravitational wave background.",
    topic: "Cosmology & Dark Energy",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2306.16213",
  },
  {
    year: 2023,
    journal: "PNAS / arXiv",
    title: "Supermassive Dark Star candidates seen by JWST",
    authors: "C. Ilie et al.",
    code: "arXiv:2304.05702",
    info: "BSM hypothesis of stars powered by dark matter annihilation.",
    topic: "Dark Matter & Structure",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2304.05702",
  },
  {
    year: 2023,
    journal: "Science",
    title: "Observation of High-Energy Neutrinos from the Galactic Plane",
    authors: "IceCube Collaboration: R. Abbasi et al.",
    code: "DOI: 10.1126/science.adc9818",
    info: "First neutrino map of the Milky Way galaxy.",
    topic: "Neutrinos & BSM",
    image: "/Journals/ArXiv_logo.png",
    url: "https://doi.org/10.1126/science.adc9818",
  },
  {
    year: 2023,
    journal: "arXiv",
    title: "Insights from HST into ultra-massive galaxies and early-universe cosmology",
    authors: "N. Sabti et al.",
    code: "arXiv:2305.07049",
    info: "Re-evaluating early structure formation.",
    topic: "Cosmology & Dark Energy",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2305.07049",
  },
  {
    year: 2023,
    journal: "Phys. Rev. Lett.",
    title: "First Dark Matter Search Results from LUX-ZEPLIN",
    authors: "J. Aalbers et al. (LZ Collaboration)",
    code: "DOI: 10.1103/PhysRevLett.131.041002",
    info: "World-leading constraints on WIMP dark matter.",
    topic: "Dark Matter & Structure",
    image: "/Journals/APS_logo.png",
    url: "https://doi.org/10.1103/PhysRevLett.131.041002",
  },
  {
    year: 2023,
    journal: "arXiv",
    title: "Deep learning for cosmology: A review",
    authors: "K. Kolekar et al.",
    code: "arXiv:2301.00001",
    info: "Computational methods and machine learning in cosmology.",
    topic: "Computation & LSS",
    image: "/Journals/ArXiv_logo.png",
    url: "https://arxiv.org/abs/2301.00001",
  },
];

export default function PublicationsPage() {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const topics = useMemo(
    () => [...new Set(PAPERS.map((paper) => paper.topic))],
    []
  );

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return PAPERS.filter((paper) => {
      const matchesTopic = topic === "All" || paper.topic === topic;

      const matchesSearch =
        query === "" ||
        paper.title.toLowerCase().includes(query) ||
        paper.authors.toLowerCase().includes(query) ||
        paper.topic.toLowerCase().includes(query) ||
        paper.journal.toLowerCase().includes(query);

      return matchesTopic && matchesSearch;
    });
  }, [search, topic]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, topic]);

  const featured =
    filtered.find((paper) => paper.featured) || filtered[0] || null;

  const collectionItems = featured
    ? filtered.filter((paper) => paper.title !== featured.title)
    : filtered;

  return (
    <>
      <PublicationsHero />
      <PublicationsToolbar
        search={search}
        setSearch={setSearch}
        topic={topic}
        setTopic={setTopic}
        topics={topics}
      />
      <FeaturedPublication paper={featured} />
      <PublicationCollections
        papers={collectionItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={9}
      />
      <PublicationsCTA />
    </>
  );
}